class externalHTML extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();


    }

    connectedCallback() {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('readystatechange', e => {
            if (xhr.readyState == xhr.DONE) {
                if (xhr.status == 200 || xhr.responseURL.startsWith('file:')) {
                    this.innerHTML = xhr.response
                } else {
                    this.innerHTML = `ERROR ${xhr.status}: ${xhr.statusText} `
                }
            }
        })
        xhr.open('GET', this.attributes.getNamedItem('src').value, true)
        xhr.send()
    }
}

customElements.define('external-html', externalHTML)