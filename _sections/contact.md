---
title: Contact
theme: light
---
<div style="width: 100%; float: left">
    <form id="contactform" method="POST" action="https://formspree.io/mckenzielangefeld@gmail.com">
        <p><b>Send me something!</b></p>
        <input type="email" name="_replyto" placeholder="Your email address">

        <textarea placeholder="Your message" name="message"></textarea>
        <input type="hidden" name="_subject" value="New message from mckenzielangefeld.com" />
        <br />
        <input type="submit" value="Submit">
    </form>
</div>

<style type="text/css">
    #contactform input[type="email"] {
        width: calc(100% - 30px);
        height: 30px;
        font-size: 16px;
        padding: 10px;
        margin-bottom: 10px;
    }

    #contactform textarea {
        width: calc(100% - 30px);
        height: 100px;
        font-size: 16px;
        border: 1px solid #ccc;
        background-color: #fafafa;
        padding: 15px;
        resize: vertical;
    }

    #contactform input[type="submit"] {
        display: inline-block;
        width: 127px;
        height: 42px;
        background-color: #272727;
        color: white;
        font-weight: 600;
        font-style: normal;
        font-size: 14px;
        border: none;
        margin-top: 10px;
        cursor: pointer;
    }
</style>
