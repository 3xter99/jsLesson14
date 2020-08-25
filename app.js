

let body =document.querySelector('body')

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElem = function () {
        let element
    if (this.selector.split('')[0] === '.') {
        element = document.createElement('div')
        element.classList.add(this.selector)
    } else {
        element = document.createElement('p')
        element.id = this.selector
    }
    element.textContent = 'Привет'
    element.style.height = this.height
    element.style.width = this.width
    element.style.background = this.bg
    element.style.fontSize = this.fontSize
    body.append(element)
}

let newObj = new DomElement('#111', '100px', '100px', 'red', '20px')
newObj.createElem()

