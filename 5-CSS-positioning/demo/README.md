As with other `<head>` elements, meta tags will not be included in the render tree as they are not visual content.

With `<meta name="viewport" content="width=device-width">` :
If we have a device with a browser width of 500px, the body will be 500px wide, and a paragraph within the body set to `width: 50%` will be 250px wide. Accordingly, if we had another element inside of `<p>` that was visible, it would inherit the 50% width (250px).

This inheritance pattern continues; with a window of 500px by 500px:

- width=100% body -> width = 500px
- width=100% div -> width = 500px
- width=50% p -> width = 250px
- width=100% div -> width = 250px
- width=50% div -> width = 125px

This is the process the browser goes throught to determine how much space an element should take up on the page and exactly where each element should be placed. When the layout is determined, the browser issues "paint setup" and "paint" events which convert the render tree to pixels on the screen.

To gain an idea of how the browser might center a div, visit:
https://repl.it/@chelseyeslehc/HTMLCSS-Day-5#index.html
