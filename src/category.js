import Card from './card.js';

class Category extends Card {
    constructor(title, parent, members) {
        super(title);
        this.parent = parent;
        this.members = members;
    }

    setElement(element) {
        this.element = element;
    }

    renderSelf(speciesTemplate) {
        this.element.style.display = 'block';

        const cardHeader = this.element.querySelector('h2');
        cardHeader.textContent = this.title;

        this.members.forEach(species => {
            let nextSpecies = speciesTemplate.cloneNode(true);
            this.element.appendChild(nextSpecies);
            species.setElement(nextSpecies);
            species.render();
        });
    }

    renderConnections(ctx) {
        if (this.parent != null) {
            let from = this.parent.element.getBoundingClientRect();
            let to = this.element.getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(from.x + from.width / 2, from.y + from.height / 2);
            ctx.lineTo(to.x + to.width / 2, to.y + to.height / 2);
            ctx.stroke();
        }
    }
}

export default Category;
