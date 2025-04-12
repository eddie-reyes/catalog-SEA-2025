import Card from './card.js';

class Species extends Card {
    constructor(title, img, description) {
        super(title);
        this.img = img;
        this.description = description;
    }

    setElement(element) {}
}

export default Species;
