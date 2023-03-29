"use strict"
class NavBar extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.innerHTML = `
        <style>
            div {
                margin: 0;
                padding: 0;
                display: flex;
                border-bottom: 1px solid grey;
            }
            span {
                padding: 16px 20px;
                border: 2px solid white;
                font-family: Helvetica;
                width: 8px;
            }
            span:hover {
                background: aliceblue;
                border: 2px solid cornflowerblue;
            }
        </style>
        <div><span>=</span><slot></slot></div>
        `
        this.span = this.shadow.querySelector('span')
        this.toggleSpan = this.toggle(this.span)
        this.span.addEventListener('click', this.toggleSpan)
    }
    toggle = target => e => target.textContent = target.textContent == '=' ? 'x' : '='
    disconnectedCallback() {
        this.span.removeEventListener('click', this.toggleSpan)
    }
}
class NavItem extends HTMLElement {
    connectedCallback() {
        this.shadow = this.attachShadow({ mode: 'open' })
        const link = this.dataset.link || ''
        this.shadow.innerHTML = `
        <style>
            a {
                padding: 8px 12px;
                border: 2px solid white;
                line-height:calc(20px + 1em);
                display:block;
            }
            a:hover {
                background: aliceblue;
                border: 2px solid cornflowerblue;
            }
        </style>
        <a href="#${this.dataset.link}">
        ${this.dataset.link}<slot></slot></a>
        `
    }
}
export { NavBar, NavItem }