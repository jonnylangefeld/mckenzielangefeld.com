---
title: Performances
backgroundUrl: /assets/img/drum-background-03.jpg
---

<div class="list-group" id="past-event-list"></div>

#### Upcoming Performances

<div class="list-group" id="event-list"></div>

<script type="text/javascript">
  $(function() {
    $('#past-event-list').gCalReader({
        calendarId:'ofhs64hf3fh1upgmchqmqi0op4@group.calendar.google.com',
        apiKey:'AIzaSyC0vgU_TedzMkjC13YrqOs9_u1VtbsoDyE',
        futureEventsOnly: false,
        pastEvents: true,
        sortDescending: false
    });
  });
</script>

<script type="text/javascript">
  $(function() {
    $('#event-list').gCalReader({
        calendarId:'ofhs64hf3fh1upgmchqmqi0op4@group.calendar.google.com',
        apiKey:'AIzaSyC0vgU_TedzMkjC13YrqOs9_u1VtbsoDyE',
        futureEventsOnly: true,
        sortDescending: false
    });
  });
</script>
