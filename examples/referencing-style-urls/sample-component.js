class MyComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        const template = document.getElementById("myComponentTemplate");
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this._addStyles({ method: 'insertStyle', url: './sample-component_layout.css' });
        this._addStyles({ method: 'innerText', url: './sample-component_typography.css' });
        this._addStyles({ method: 'link', url: './sample-component_variables.css' });

    }

    _addStyles({
        method,
        url,
    }) {
        switch (method) {
            case 'insertStyle':
                this._addStylesByInsertStyle(url);
                break;

            case 'innerText':
                this._addStylesViaInnerText(url);
                break;
    
            case 'link':
                this._addStylesViaLinkTag(url);
        }
    }

    /* Adds an @import at-rule via the insertRule() method of the CSSStyleSheet object */
    _addStylesByInsertStyle(styleUrl) {
        this.shadowRoot.appendChild(document.createElement('style'));

        const styleSheet = this.shadowRoot.styleSheets[0];

        styleSheet.insertRule(this._getImportAtRule(styleUrl));
    }
    /* Adds an @import at-rule via setting the innerText property of the style element */
    _addStylesViaInnerText(styleUrl) {
        const style = document.createElement("style");
        
        style.innerText = this._getImportAtRule(styleUrl);

        this.shadowRoot.appendChild(style);
    }
    /* Link stylesheet via a link element */
    _addStylesViaLinkTag(styleUrl) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = styleUrl;

        this.shadowRoot.appendChild(link);
    }

    /* Not supported in Firefox, does not support @import at-rules */
    _addStylesViaConstructedStyleSheets(styleRules) {

    }

    _getImportAtRule(styleUrl) {
        return `@import "${styleUrl}";`;
    }
  }
  
window.customElements.define("my-component", MyComponent);
