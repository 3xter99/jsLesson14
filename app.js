

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
        element.classList.add(this.selector.split('').slice(1).join(''))
    } else if (this.selector.split('')[0] === '#'){
        element = document.createElement('p')
        element.id = this.selector.split('').slice(1).join('')
    } else {
        console.error('Не тот селектор')
    }
    element.textContent = 'Привет'
    element.style.cssText = `height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        fontSize: ${this.fontSize};
        position: absolute;
        left: 50%;
        top: 50%`
    body.append(element)
}

let newObj = new DomElement('#111', '100px', '100px', 'red', '20px')
newObj.createElem()

