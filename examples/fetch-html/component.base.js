import { ComponentConfig } from './component.config.js';

export class Component extends HTMLElement {
    constructor(config) {
        super();
        if ( !config instanceof ComponentConfig ) {
            throw new TypeError(`${config} is not an instance of ComponentConfig!`);
        }
        this.config = config;
        this.init();
    }

    init() {
        this.attachShadow({ mode: 'open' });
        /*
            The inline html will always be first in the element list of the shadow root
            hence the .html fetching is an async operation.
        */
        this.appendTemplateInline();
        this.appendTemplateFromUrl();
        this.appendStyleUrls();
        this.appendStyles();
    }

    appendChild(child) {
        return this.shadowRoot.appendChild(child);
    }

    /* STYLE HANDLING */
    appendStyleUrls() {
        if ( !this.config.styleUrls ) {
            return;
        }
        const styleSheet = this.getStyleSheet();
        for ( let styleUrl of this.config.styleUrls ) {
            styleSheet.insertRule(`@import url('${styleUrl}')`)
        }
    }
    appendStyles() {

    }
    getStyleSheet() {
        this.appendChild(this.createStyleEl());
        const styleSheets = this.shadowRoot.styleSheets;
        return styleSheets[0];
    }
    createStyleEl() {
        return document.createElement('style');
    }

    /* TEMPLATE HANDLING */
    async appendTemplateFromUrl() {
        if ( !this.config.templateUrl ) {
            return;
        }
        const templateHtml = await this.getTemplateHtml();
        const templateClone = this.getNewTemplateCloneFromHtml(templateHtml);
        this.appendChild(templateClone);
    }
    async getTemplateHtml() {
        const res = await fetch(this.config.templateUrl);
        const templateText = await res.text();
        return templateText;
    }
    /* The newClone has no parent and is not part of the document,
    until it is added to another node that is part of the document.  */
    getNewTemplateCloneFromHtml(html) {
        const templateEl = document.createElement('template');
        templateEl.innerHTML = html;
        return templateEl.content.cloneNode(true);
    }
    appendTemplateInline() {
        if ( !this.config.template ) {
            return;
        }
        const templateClone = this.getNewTemplateCloneFromHtml(this.config.template);
        this.appendChild(templateClone);
    }
}
