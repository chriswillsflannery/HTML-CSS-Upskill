Why does understanding the HTML rendering process matter?

The DOM is built up incrementally - and this means we can take advantage of this process to improve performance. We can leverage the ability to render part of the DOM (for example the header/nav content if this stays consistent), while the rest of the DOM is being built. This comes into play when you're thinking of API design and making requests to those APIs.

If we had a web page where the header and footer content was always consistent, but content inside a container not in the header or footer (such as a div) changed, we could make it so that content would render when available, but the header and footer would always be visible.

Leveraging techniques like this can create a more engaging and seamless experience for our end-users, as the page gives a visual cue that it's loading/loaded.

There are many other ways to optimize web performance which are beneficial to look into as you advance in your web development.

Though already 13 years old, I recommend High Performance Websites:
https://www.oreilly.com/library/view/high-performance-web/9780596529307/

Many of these concepts which were applicaple in 2007 are still just as relevant today, and this book provides a comprehensive look at the steps you can take to improve your websites, from most effective/most important techniques all the way to minor edge cases.
