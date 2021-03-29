# Writing Shadow DOM style rules in seperate CSS files with Vanilla JS

## NO frameworks or build tools necessary
This example code with pure html, css and js files works out of the box in every modern browser.`

### CSS source files

In this code example we are attaching the following 3 different CSS files to our component.

1. `sample-component_layout.css`
2. `sample-component_typography.css`
3. `sample-component_variables.css`

### Attaching methods

The CSS files from above are included to the component via the following ways.

1. Using the `insertRule()` method of the `CSSStyleSheet` object
    - Disadvantages: there is a restriction regarding to `@import` at-rules. They have to be inserted before the style rules.
    - Advantages: you can validate your added style rules on by one.
2. Setting the `innerText` property of an `HTMLStyleElement`
    - Disadvanteges: someone can accidentally overwrite former CSS rules
    - Advantages: you can add multiple CSS rules at once in a template string.
3. Setting the `href` property of an `HTMLLinkElement`
    - Disadvantages: You cannot add style rules from the component class only reference the content of a CSS file.
    - Probably this is the best way to go with.

