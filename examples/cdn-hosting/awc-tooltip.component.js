class TooltipComponent extends HTMLElement {
    constructor() {
      super(); 
      
      this._tooltipVisible = false;
      this._tooltipIcon;
      this._tooltipText = '...';
      
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.innerHTML = this._getTemplate();

    }
    
    connectedCallback() {
      if(this.hasAttribute('text')) {
         this._tooltipText = this.getAttribute('text');
      }
      
      this._tooltipIcon = this.shadowRoot.querySelector('span');
      this._tooltipIcon.addEventListener('mouseenter', this._showTooltip);
      this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip);
      this.shadowRoot.appendChild(this._tooltipIcon);
      this._render();
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue) {
        return;
      }
      if (name === 'text') {
        this._tooltipText = newValue;
      }
    }
    
    static get observedAttributes() {
      return ['text'];
    }
    
    disconnectedCallback() {
      this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
      this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip);
    }
    
    _showTooltip = () => {
      this._tooltipVisible = true;
      this._render();
    }
    
    _hideTooltip = () => {
      this._tooltipVisible = false;
      this._render();
    }
    
    _getTemplate() {
      return `
        <style>
          div {
              background-color: var(--color-main-dark, black);
              color: white;
              position: absolute;
              z-index: 10;
              padding: 10px;
              border-radius: 3px;
              box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
              min-width: 200px;
          }
          :host {
            position: relative;
            border: 1px solid gray;
          }
          :host(.red-border) {
            border: 1px solid red;
          }
          ::slotted(*) {
            font-weight: bold;
            color: #333;
          }
        </style>
        <slot>DEFAULT</slot>
        <span> 📌</span>
      `
    }
  
    _render() {
      let tooltipContainer = this.shadowRoot.querySelector('div');
      if (this._tooltipVisible) {
        tooltipContainer = document.createElement('div');
        tooltipContainer.textContent = this._tooltipText;
        this.shadowRoot.appendChild(tooltipContainer);
      } else {
        if(tooltipContainer) {
           this.shadowRoot.removeChild(tooltipContainer);
        }
      }
    }
  }
  customElements.define('awc-tooltip', TooltipComponent);