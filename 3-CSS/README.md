<h1>CSS Design Patterns</h1>

- By default, some styling will be applied based on a given tag. For example, an `<h1>` is bold and larger than `<p>` or `<h3>`. All browsers have internal stylesheets that contain default styling.

- Two schools of thought for addressing browser default styling or 'user-agent' styling are [Normalizing vs. Resetting CSS.](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e).

- <strong>descendant combinator</strong> - allows you to apply styling to an element that's a descendant of another element:

```
li em {
  color: purple;
}
```

- <strong>adjacent sibling combinator</strong> - allows you to add styling to an element on the same level:

```
h1 + p {
  color: pink;
}
```

- <strong>Styling based on state</strong> - links are a good example. They have states of being unclicked, hover, clicked, focused, etc.
<ul>
  <li> unclicked:
  ```
  a:link {
    color: blue;
  }
  ```
  </li>
  <li> clicked:
  ```
  a:visited {
    color: red;
  }
  ```
  </li>
  <li> hover:
  ```
  a:hover {
    color: purple;
  }
  ```
  </li>
</ul>

## How does the browser handle css ?

- Each broser has a rendering engine, which is the part of the browser that handles HTML + CSS. It turns the HTML and CSS files into pixels on the screen. Ex. Chrome -> Blink, Safari -> Webkit

- Each browser handles CSS styles in a different way. When the browser receives an HTML document, it will parse it and request additional linked resources (link an external stylesheet).

- In order to build the render tree, CSSOM style nodes are applied to DOM nodes. The rendering engine needs to:
<ul>
  <li>Figure out which rules apply to the node - aka selector matching</li>
  <li>Fill in any missing values with values from the parent or default value - aka the cascade</li>
</ul>

#### Styling + rules:

- CSS rules are read and applied by the browser line-by-line / in-order. What happens if we have multiple CSS files? SCSS, LESS, etc?

- If a browser encounters a property or value that it doesn't recognize (maybe due to a spelling mistake or a new feature that the current browser does not yet support) it will skip over that rule. This is helpful as it won't "break" in the event that it doesn't understand something, but this can have impacts on users who haven't updated their browsers or who are using browsers that don't support the updates to CSS. What we can do in these cases is to list the default value first, and then follow it with our desired rule.

- The different types of selectors carry different "weights" or levels of importance when it comes to CSS:
<ul>
  <li>Element selectors (the default styling for p elements and so on) are the most basic form of styling, and would be overwritten by a class selector or an id selector on a p element</li>
  <li>An ID selector holds more importance/power than a class selector, and would overwrite a class selector's style</li>
</ul>

- Style struct sharing - a browser would likely run out of memory if it tried to hold onto each value. To resolve this issue, they store data that goes together (like font properties) in a group object called a style struct. That way, the computed object has pointers to the style struct that has the right values for a given DOM node.

[Advanced manipulation of CSS rendering](https://developer.mozilla.org/en-US/docs/Web/Houdini)

[CSS normalization](https://www.w3.org/International/questions/qa-html-css-normalization)

[quantum css engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/)
