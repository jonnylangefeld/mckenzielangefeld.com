---
title: Media
slider:
  text_color: white
  shadow_color: black
  slides: 
    - image: /assets/slides/01.jpg
      slide_html:
    - image: /assets/slides/02.jpg
      slide_html:
    - image: /assets/slides/03.jpg
      slide_html:
    - image: /assets/slides/04.jpg
      slide_html:
more_text: show more media items...
---
<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/videoseries?list=PLzYpzgBWuLtuKbNPRV_pFqcd_14OsywzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p/>

<!--more-->

Check out my songs on soundcloud:

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/903599158&color=%2306095e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

<p/>

{% if page.slider %}
    {% include slider.html height="50" unit="%" transition="fade" duration="7" %}
{% endif %}

<style>
    .read-more-state ~ .read-more-trigger:before {
    content: 'Show more...';
    }
</style>