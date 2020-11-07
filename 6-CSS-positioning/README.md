# Flexbox & Grid

- Flexbox and grid allow us to take all of the logic of manually placing elements in their correct positioning on the page (layout/reflow), and wrap all of that functionality in much easier-to-use apis.

- Consider the structure of index.html. Why do these elements stack like blocks on top of one another in the browser window? What do you think would happen if we applied `display: flex` to the container?

- Try applying this change. Is it what you expected? Why? What do you think setting `display: flex` tells the browser to do?

- Before we set display: flex, every element on the page was block-level (display: block). So it took up the entire span / width of the page. When we add `display: flex` to the container, it's like adding `display: block flex`, the container acts as a block that then holds all of the elements inside of it.

- When we think about the flex containers we create, we may note that we are defining how the "box" on the page behaves from both an inner and an outer perspective. You likely also noticed that the elements automatically fell into a row - the default behavior is `flex-direction: row`, but we can change that to column or reverse.

- We can reverse our row: `flex-direction: row-reverse`. What do you think it will look like if we set our flex-direction to column? The same as our original layout!

- Flexbox is most used for simple, one-dimensional layouts, but we can use it in partnership with Grid to create complex, flowing layouts.

- link to flexbox demo: https://repl.it/@chelseyeslehc/FLEXBOX-CSS
- link to grid demo: https://repl.it/@chelseyeslehc/GRID-CSS
