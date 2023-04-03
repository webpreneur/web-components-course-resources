## `closed` shadowRoot

The shadowRoot property in the Web Components API can be set to either `open` or `closed`, depending on the desired behavior and **level of encapsulation**.

Setting the shadowRoot to "closed" means that **the shadow DOM tree is not accessible from JavaScript and cannot be manipulated after the element has been created**. 
This mode **provides the highest level of encapsulation** and ensures that the internal implementation of the custom element remains hidden and protected.

It is ideal to set the shadowRoot to "closed" when you want to build a custom element that is meant to be used as a **black box** and does not expose its internal implementation. For example, you might use "closed" mode when building a custom element that implements a complex UI or behavior that should not be tampered with.