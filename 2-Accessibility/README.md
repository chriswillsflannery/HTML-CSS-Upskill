<h1>Accessibility & inclusion</h1>

- Using semantic HTML is one of the best ways to make your sites accessible (as well as gaining SEO and readability benefits) - sometimes called POSH or Plain Old Semantic HTML.

- You could in theory make any HTML element behave however you want. You could make a `<div>` element behave like a button, but [as you can see in this video,](https://www.youtube.com/watch?v=z8xUCzToff8), there are both accessibility and element behavior issues you would need to address. Better to just use the `<button>` element, that's what it's for! Semantic elements like `<button>` have built-in keyboard accessibility by default.

## Benefits of semantic HTML:

<ul>
  <li>Easier to develop with, easier to read</li>
  <li>Better on mobile - easier to make responsive & lighter file size</li>
  <li>Good for SEO - higher ranking of keywords inside semantic elements</li>
</ul>

- In the past, we used tables to create layouts. Screen readers don't handle tables well, though:
  [table layout](https://mdn.github.io/learning-area/accessibility/html/table-layout.html) vs. [semantic tags](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)

## Accessibility & Interactivity - buttons, forms, links

- Buttons and links can be read by a screenreader and manipulated by the keyboard. They can be read in bulk, so it's good to use descriptive and clear names denoting each button's purpose.
- Labels on forms should be listed inside `<label>` elements andand associated to a given input with the `for="value"` attribute.
- In most browsers associating a label with a form input means that you can click the label to select or activate the form element. This gives the input a bigger hit area, making it easier to select.

## Best practices

#### In general, try to avoid using language and characters that don't get read out clearly by the screen reader.

<ul>
  <li>Don't use dashes. Instead of 5-7, write 5 to 7.</li>
  <li>Expand abbreviations: Jan -> January</li>
  <li>Expand acronyms, at least at beginning. Instead of writing HTML in the first instance, write Hypertext Markup Language.</li>
  <li>Avoid using slang and jargon.</li>
</ul>

[Mobile Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Mobile)

[Good Semantics example](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)

[Bad Semantics example](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)
