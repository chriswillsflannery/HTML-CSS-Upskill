## The Cascade:

[Author stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#Author_stylesheets)
[@rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)
[Intro to the cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#Origin_of_CSS_declarations)

- Understanding the way the cascade behaves is key to understanding CSS. The cascade is an algorithm that defines how to combine property values originating from different sources. Its job is to select CSS declarations in order to determine the correct values for CSS properties.

- The cascading algorithm first filters all CSS rules from the various sources (user-agent stylesheets, author stylesheets and end-user styles) and keeps the rules that apply to a specific element. It then sorts the rules in order of importance. This is where things like !important come into play in terms of overriding like-rules on the same selector. The order that rules are accepted is as follows:

<ol>
  <li>User agent; importance: normal</li>
  <li>User; importance: normal</li>
  <li>Author; importance: normal</li>
  <li>Animations</li>
  <li>Author; importance: !important</li>
  <li>User; importance: !important</li>
  <li>User agent; importance: !important</li>
  <li>Transitions</li>
</ol>

- In the case of equality, [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) of a value is considered.

#### Engines in browsers:

<ul>
  <li>Blink: Chrome, Opera, Edge</li>
  <li>Webkit: Safari</li>
  <li>Gecko: Firefox</li>
  <li>Trident: IE</li>
</ul>

#### Default browser styling (user-agent stylesheets)

- [BDS](https://browserdefaultstyles.com/) is a great website for seeing what the default styling is for the various CSS engines.

- Given the default styling rules that apply to different browsers, we may want to consider overriding some to ensure our webpages look the exact same on every browser.

### Advanced CSS Concepts

- <strong>Inheritance</strong> controls what happens when no value is specified for a property on an element. CSS properties are categoried in two ways:
<ul>
  <li>Inherited props: by default are set to the computed value of the parent element</li>
  <li>Non-inherited props: by default are set to the initial value of the prop</li>
</ul>

- Inheritance encompasses 4 key property values:
<ul>
  <li>Initial</li>
  <li>Inherit</li>
  <li>Unset</li>
  <li>Revert</li>
</ul>

- <strong>Computed Value</strong> - the value transferred from parent element to child element during inheritance which is calculated from the specific value:
<ul>
  <li>You can look at the 'computed' tab in the chrome dev tools for more insight into how the computed value is applied. It shows us the values that the browser is actually using on the rendered website. If an element isn't styled how you think it should be, looking at its computed values can help you understand why.</li>
  <li>The 'computed' tab takes a selected element and displays a list of CSS properties that have been rendered, allowing each one to be expanded to reveal the cascade of inherited values alongside the actual computed value that is currently in use.</li>
  <li>The styles tab, on the other hand, displays the exact rulesets of a selected element exactly as they were written. So while the Styles tab might show you something like `.subhead {font-size: 75%}`, <mark>the computed tab will show you the actual font size, or what 70% currently resolves to.</mark></li>
</ul>

* <strong>CSSStyleDeclaration</strong> - an interface that represents an object that is a CSS declaration block, and exposes style info and various style-related methods and properties.

#### External Stylesheets

- Stylehseets either packaged with your code, or completely external (ie. bootstrap), that you can import into your HTML document.
- Can be beneficial as it allows you to declare styling once that can be applied to multiple elements (potentially in multiple HTML files)
- Because painting the DOM happens after the DOM has been created, complex CSS rendering may mean your pages are not loaded correctly until the external CSS is loaded properly.
- Uploading or linking to multiple CSS files can increase load time.

#### Internal Stylesheets

- These are bits of styling that are written directly into the head of your HTML document inside `<style>` tags.
- This approach can add to the length of the HTML document and therefore increase cognitive load as well as overall page load time.

#### Inline styles

- These are style attributes that can be added to individual elements on a page. Can be useful for quick, permanent changes. Considerations should be made around using inline styles in combination with other style sheets as it can be difficult to maintain.

### CSS Preprocessors

- CSS Preprocessors are scripting languages that extend the default capabilities of CSS. They add features such as variables, nesting, mixins, functions and mathematical equations.
- They allow us to easily automate repetitive tasks, reducing errors and bloat, and can help ensure backward compatibility.
- While each has its own language, it all gets compiles down to CSS which the browser is able to interpret and render.

### SASS - Syntactically Awesome Style Sheet

- The OG CSS preprocessor (2006 initial release); [documentation](https://sass-lang.com/), written in Ruby.
- Was inspired by the Haml templating language which adds dynamic features to HTML. Allows you to use variables, if/else conditions, loops, inheritance, and other computational logic in CSS.
- Has two syntax options, .sass and .scss. Primary differentiator here is allowances in the flexibility of your syntax.
- <strong>Pros:</strong>
<ul>
  <li>Ability to use variables</li>
  <li>Follows DRY principle by design</li>
  <li>Mixins make it possible to create reusable rulesets and quickly apply them to properties</li>
  <li>Active dev community</li>
  <li>Used by many popular sites: Airbnb, Freshbooks, Zapier</li>
</ul>

### LESS - Leaner Style Sheets

- Initial release in 2009, written in Javascript; [documentation](http://lesscss.org/#overview)
- Influenced by Sass, leverages mixins, variables, and nesting
- <strong>Pros</strong>
<ul>
  <li>Same syntax as css, gentle learning curve</li>
  <li>Great documentation</li>
  <li>Supports mixins</li>
</ul>
- <strong>Cons</strong>
<ul>
  <li>Requires Node to install and run the compiler</li>
  <li>Less sophisticated conditional logic support</li>
</ul>

### Stylus

- Initial release in 2010, written in Javascript
- Combines powerful logical abilities of Sass with easy and straightforward setup of LESS. Syntax is sparse and flexible.
- <strong>Pros</strong>
<ul>
  <li>Can write like CSS with punctuation or completely omit it</li>
</ul>

## CSS Architecture

### BEM (Block Element Modifier)

- CSS class naming convention that makes CSS easier to maintain
- Its goal is to help developers better understand the relationship between the HTML and CSS in a given project.
- The parent element gets the primary name, then child components are declared using that name, two underscores, and another identifier. Modifiers can manipulate the block based on theme or style.
- In BEM, everything is a class and nothing is nested, making specificity "flat" and more understandable ([strategies for keeping specificity low](https://css-tricks.com/strategies-keeping-css-specificity-low/))
- <strong>Pros</strong>
<ul>
  <li>Easy to decipher parent-child relationships in styles</li>
  <li>Helps with maintaining clean and clear code</li>
  <li>consistent naming conventions</li>
</ul>

### Atomic CSS (aka Functional CSS)

- Atomic CSS is the approach to CSS architecture that favors small, single-purpose classes with names based on visual function.
