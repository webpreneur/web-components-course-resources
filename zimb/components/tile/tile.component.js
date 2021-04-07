export class TileComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode:'open' });
    }
    
    async connectedCallback() {
        await this._appendTemplate();
        /* 
            We have to wait the Promise of the _appendTemplate() method to resolve
            before attempting to access the shadowRoot.
        */
        this.shadowRoot.querySelector('h1').textContent = 'This text comes from connectedCallback';
    }

    async _appendTemplate() {
        const res = await fetch('./components/tile/tile.component.html');
        const text = await res.text();
        const template = document.createElement('template');
        template.innerHTML = text;
        return this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
}
