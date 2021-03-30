
class MyComponent extends HTMLElement {
    constructor() {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = `<ul></ul>`;
        super() // returns element this scope
            .attachShadow({mode: 'open'}) // sets AND returns this.shadowRoot
            .append(templateElement.content.cloneNode(true));
    }
    set listItems(items) {
        this._listItems = items;
        this._renderLis();
    }
    get listItems() {
        return this._listItems;
    }
    _renderLis() {
        const ul = this.shadowRoot.querySelector('ul');
        
        this.listItems.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        });
    }
}

customElements.define('my-component', MyComponent);

// Return a reference to the my-paragraph constructor
let MyComponentConstructor = customElements.get('my-component');

const myComponentInstance = new MyComponentConstructor();
myComponentInstance.id = "myId";
myComponentInstance.listItems = ['Gandalf', 'Legolas', 'Aragorn'];

document.body.appendChild(myComponentInstance);
