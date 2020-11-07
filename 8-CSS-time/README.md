# Transitions, transformations and animations

- We can leverage transitions to create a smoother (and more accessible) experience for end-users. Consider the demo here. Look at each commented out line. What do you expect will happen when we uncomment it? How do you see this providing value or removing value in some cases?

- What do you think is happening to the DOM and CSSOM as these changes occur? The DOM and CSSOM will update whenever there is a change to the nodes in either tree, so as animations / transformations occur, these changes being reflected on the page are due to the DOM / CSSOM updating, and the process of the 'critical rendering path' starting over.

#### Critical rendering path: DOM > CSSOM > render tree > layout > paint

Demo available here: https://repl.it/@chelseyeslehc/HTML-CSS-Day-8
