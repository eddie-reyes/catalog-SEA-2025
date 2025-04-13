import Card from './card.js';

class Species extends Card {
    constructor(title, imgPath, latinName) {
        super(title);
        this.imgPath = imgPath;
        this.latinName = latinName;
        this.visible = true;
    }

    setElement(element) {
        this.element = element;
    }

    render(borderColor) {
        this.visible
            ? (this.element.style.display = 'block')
            : (this.element.style.display = 'none');

        const img = this.element.querySelector('img');
        img.src = this.imgPath;
        img.style.borderColor = borderColor;
        img.style.filter = 'brightness(85%)';

        const title = this.element.querySelector('h3');
        title.textContent = this.title;

        const latinName = this.element.querySelector('p');
        latinName.textContent = this.latinName;
    }
}

export default Species;
