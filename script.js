const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.createElement = function () {
    let el
    if (this.selector.startsWith(".")) {
        el = document.createElement("div")
        el.classList.add = this.selector;

    } else if (this.selector.startsWith("#")) {
        el = document.createElement("p")
        el.id = this.selector;

    }

    el.style.height = this.height
    el.style.width = this.width
    el.style.background = this.bg
    el.style.fontSize = this.fontSize


    document.body.appendChild(el);

    return (el)
}

const divEl = new DomElement(".hyi", "50px", "50px", "yellow", "25px")
const idEl = new DomElement("#pizda", "30px", "30px", "red", "55px")

divEl.createElement();
idEl.createElement();
