(function($) {

  $.fn.gCalReader = function(options) {
    var $div = $(this);

    var defaults = $.extend({
        calendarId: 'en.usa#holiday@group.v.calendar.google.com',
        apiKey: 'Public_API_Key',
        dateFormat: 'LongDate',
        errorMsg: 'No events in calendar',
        maxEvents: 50,
        futureEventsOnly: true,
        pastEvents: false,
        sortDescending: true
      },
      options);

    var s = '';
    var now = new Date();
    var feedUrl = 'https://www.googleapis.com/calendar/v3/calendars/' +
      encodeURIComponent(defaults.calendarId.trim()) +'/events?key=' + defaults.apiKey +
      '&orderBy=startTime&singleEvents=true';
      if(defaults.futureEventsOnly) {
        feedUrl+='&timeMin='+ now.toISOString();
      }
      if(defaults.pastEvents) {
        feedUrl+='&timeMax='+ now.toISOString();
        timeMin = new Date();
        timeMin.setMonth(timeMin.getMonth()-6);
        feedUrl+='&timeMin='+ timeMin.toISOString();
      }

    $.ajax({
      url: feedUrl,
      dataType: 'json',
      success: function(data) {
        if(defaults.sortDescending){
          data.items = data.items.reverse();
        }
        data.items = data.items.slice(0, defaults.maxEvents);

        $.each(data.items, function(e, item) {
          var eventdate = item.start.dateTime || item.start.date ||'';
          var summary = item.summary || '';
					var description = item.description;
					var location = item.location;
                    var eventDate = formatDate(eventdate, defaults.dateFormat.trim());
                    s = '<table>'
					s += '<tr class="eventtitle"><td><i class="fa"/></td><td>'+ summary +'</td></tr>';
					s += '<tr class="eventdate"><td><i class="fas fa-calendar-alt"></i></td><td>'+ eventDate +'</td></tr>';
					if(location) {
                        s += '<tr class="location"><td><i class="fas fa-map-pin"></i></td><td>'+ location +'</td></tr>';
					}
					if(description) {
                        s += '<tr class="description"><td><i class="fa"/></td><td>'+ description +'</td></tr>';
					}
					$($div).append('<li class="list-group-item">' + s + '</li>');
        });
      },
      error: function(xhr, status) {
        $($div).append('<p>' + status +' : '+ defaults.errorMsg +'</p>');
      }
    });

    function formatDate(strDate, strFormat) {
      var fd, arrDate, am, time;
      var calendar = {
        months: {
          full: ['', 'January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October',
            'November', 'December'
          ],
          short: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
        },
        days: {
          full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'
          ],
          short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
            'Sun'
          ]
        }
      };

      if (strDate.length > 10) {
        arrDate = /(\d+)\-(\d+)\-(\d+)T(\d+)\:(\d+)/.exec(strDate);

        am = (arrDate[4] < 12);
        time = am ? (parseInt(arrDate[4]) + ':' + arrDate[5] + ' AM') : (
          arrDate[4] - 12 + ':' + arrDate[5] + ' PM');

        if (time.indexOf('0') === 0) {
          if (time.indexOf(':00') === 1) {
            if (time.indexOf('AM') === 5) {
              time = 'MIDNIGHT';
            } else {
              time = 'NOON';
            }
          } else {
            time = time.replace('0:', '12:');
          }
        }

      } else {
        arrDate = /(\d+)\-(\d+)\-(\d+)/.exec(strDate);
        time = 'Time not present in feed.';
      }

      var year = parseInt(arrDate[1]);
      var month = parseInt(arrDate[2]);
      var dayNum = parseInt(arrDate[3]);

      var d = new Date(year, month - 1, dayNum);

      switch (strFormat) {
        case 'ShortTime':
          fd = time;
          break;
        case 'ShortDate':
          fd = month + '/' + dayNum + '/' + year;
          break;
        case 'LongDate':
          fd = calendar.days.full[d.getDay()] + ' ' + calendar.months.full[
            month] + ' ' + dayNum + ', ' + year;
          break;
        case 'LongDate+ShortTime':
          fd = calendar.days.full[d.getDay()] + ' ' + calendar.months.full[
            month] + ' ' + dayNum + ', ' + year + ' ' + time;
          break;
        case 'ShortDate+ShortTime':
          fd = month + '/' + dayNum + '/' + year + ' ' + time;
          break;
        case 'DayMonth':
          fd = calendar.days.short[d.getDay()] + ', ' + calendar.months.full[
            month] + ' ' + dayNum;
          break;
        case 'MonthDay':
          fd = calendar.months.full[month] + ' ' + dayNum;
          break;
        case 'YearMonth':
          fd = calendar.months.full[month] + ' ' + year;
          break;
        default:
          fd = calendar.days.full[d.getDay()] + ' ' + calendar.months.short[
            month] + ' ' + dayNum + ', ' + year + ' ' + time;
      }

      return fd;
    }
  };

}(jQuery));
