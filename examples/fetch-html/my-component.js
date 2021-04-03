import { Component } from './component.base.js';
import { ComponentConfig } from './component.config.js';

window.customElements.define('my-component', class extends Component {
    constructor() {
        const config = new ComponentConfig(
            {
                templateUrl: './my-component.html',
                styleUrls: ['./my-component.css'],
                template: `
                    <footer>
                        <h2>This is an inline sync template</h2>
                        <slot name="inline-slot-sync"></slot>
                    </footer>
                `,
                styles: `
                    * {
                        box-sizing: border-box;
                        font-size: 1rem;
                        margin: 0;
                        padding: 0;
                    }
                    ul, ol {
                        list-style: none;
                    }
                    a {
                        text-decoration: none;
                    }
                `,
            }
        );
        super(config);
    }
});