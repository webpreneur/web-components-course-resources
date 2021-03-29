class MyComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        const template = document.getElementById("myComponentTemplate");
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const style = document.createElement("style");
        /* Adding an @import at-rule via setting the innerText property of the style element */
        style.innerText = `
            @import "./sample-component_layout.css";
        `;
        this.shadowRoot.appendChild(style);

        console.log(this.shadowRoot.styleSheets.length);
    }
    connectedCallback() {
        
        this.shadowRoot.appendChild(document.createElement('style'));

        const styleSheet = this.shadowRoot.styleSheets[0];

        /* Adding an @import at-rule via the insertRule() method of the CSSStyleSheet object */
        styleSheet.insertRule(`
            @import "./sample-component_typography.css";
        `);
    }
  }
  
window.customElements.define("my-component", MyComponent);
