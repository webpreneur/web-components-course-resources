import define from './define-component.js';

class CurrencyPipeComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(this.templateNode);
    }

    static get observedAttributes() {
        return ['input', 'currency'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if ( newVal ) {
            this[name] = newVal;
        }
        this._transform();
    }

    _transform() {
        if ( !this.input || !this.currency ) {
            return;
        }
        this.shadowRoot.querySelector('span').innerText = `${this.input} ${this.currency}`;
    }

}

define({
    componentClass: CurrencyPipeComponent,
    tagName: 'currency-pipe',
    templateUrl: './currency-pipe.component.html',
});
