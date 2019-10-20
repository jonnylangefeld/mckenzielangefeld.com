---
title: Media
slider:
  text_color: white
  shadow_color: black
  slides: 
    - image: /assets/slides/1.jpg
    - image: /assets/slides/10.jpg
    - image: /assets/slides/11.jpg
    - image: /assets/slides/12.jpg
    - image: /assets/slides/13.jpg
    - image: /assets/slides/14.jpg
    - image: /assets/slides/15.jpg
    - image: /assets/slides/16.jpg
    - image: /assets/slides/17.jpg
    - image: /assets/slides/18.jpg
    - image: /assets/slides/19.jpg
    - image: /assets/slides/2.jpg
    - image: /assets/slides/20.jpg
    - image: /assets/slides/21.jpg
    - image: /assets/slides/22.jpg
    - image: /assets/slides/23.jpg
    - image: /assets/slides/24.jpg
    - image: /assets/slides/25.jpg
    - image: /assets/slides/26.jpg
    - image: /assets/slides/27.jpg
    - image: /assets/slides/28.jpg
    - image: /assets/slides/29.jpg
    - image: /assets/slides/3.jpg
    - image: /assets/slides/30.jpg
    - image: /assets/slides/31.jpg
    - image: /assets/slides/32.jpg
    - image: /assets/slides/33.jpg
    - image: /assets/slides/34.jpg
    - image: /assets/slides/4.jpg
    - image: /assets/slides/5.jpg
    - image: /assets/slides/6.jpg
    - image: /assets/slides/7.jpg
    - image: /assets/slides/8.jpg
    - image: /assets/slides/9.jpg
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