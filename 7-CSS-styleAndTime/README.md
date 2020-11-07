# CSS style and time

- The CSS box model outlines the fact that everything on a page is a box (or rectangle) and every element on the page relates to the other elements. We're going to take a closer look at the box model as well as the flow of elements on the page.

- Take a look at the "computed" tab in the chrome devtools to get a visual idea of the box model in action.

- We've previously looked into the "layout" phase of elements being placed on the page exactly where they're meant to be. This is where the box model comes into play; as boxes are placed on the "screen" (when their location is being calculated by the browser), margin, padding, border, and content are all taken into account.

* Tip: if you want to see every box that makes up a page, add:

```
* {
  border: 1px solid red !important;
}
```

- this will ensure that each box has a border around it so you can clearly see how they appear against each other.

* When talking about the box model, and how these boxes are positioned on the page, it can be helpful to visualize position and the flow of elements.
