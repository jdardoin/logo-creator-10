class Shapes {
    constructor(backgroundclolor, text, textcolor) {


        this.backgroundclolor = backgroundclolor;
        this.text = text;
        this.textcolor = textcolor;
    }

}

class Square extends Shapes {
    create() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" version="1.1">
        <rect width="100" height="100" fill="${this.backgroundclolor}" />
        <text x="10" y="50" font-size="12" fill="${this.textcolor}">${this.text}</text>
      </svg>
      `
    }
}

class Circle extends Shapes {
    create() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" version="1.1">
        <circle cx="50" cy="50" r="40" fill="${this.backgroundclolor}" />
        <text x="30" y="55" font-size="12" fill="${this.textcolor}">${this.text}</text>
      </svg>
      `
    }
}

class Triangle extends Shapes {
    create() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" version="1.1">
        <polygon points="50,10 90,90 10,90" fill="${this.backgroundclolor}" />
        <text x="25" y="55" font-size="12" fill="${this.textcolor}">${this.text}</text>
      </svg>
      `
    }
}

