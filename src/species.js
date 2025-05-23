import Card from './card.js';

class Species extends Card {
    constructor(title, imgPath, latinName) {
        super(title);
        this.imgPath = imgPath;
        this.latinName = latinName;
        this.visible = true;
    }

    setElement(element) {
        //bind element to object instance
        this.element = element;
    }

    render(borderColor, options) {
        //render element
        this.visible
            ? (this.element.style.display = 'block')
            : (this.element.style.display = 'none');

        //styling for sort
        if (options.type == 'sort' && options.keyword) {
            this.element.style.display = 'inline-block';
            this.element.style.width = '200px';
        }

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
