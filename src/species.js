import Card from './card.js';

class Species extends Card {
    constructor(title, imgPath, latinName) {
        super(title);
        this.imgPath = imgPath;
        this.latinName = latinName;
    }

    setElement(element) {
        this.element = element;
    }

    render() {
        this.element.style.display = 'block';

        const img = this.element.querySelector('img');
        img.src = this.imgPath;

        const title = this.element.querySelector('h3');
        title.textContent = this.title;

        const latinName = this.element.querySelector('p');
        latinName.textContent = this.latinName;
    }
}

export default Species;
