import { fetchTemplate } from "../../utils.js";

export class BoardComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode:'open' });
    }
    
    async connectedCallback() {
        await this._appendTemplate();
    }

    async _appendTemplate() {
        const template = await fetchTemplate('./components/board/board.component.html');
        return this._shadowRoot.appendChild(template);
    }
    
}
