import Card from './card.js';

class Category extends Card {
    constructor(title, parent, members, color, kingdom = 'none') {
        super(title);
        this.parent = parent;
        this.members = members;
        this.color = color;
        this.kingdom = kingdom;
    }

    setElement(element) {
        this.element = element;
    }

    renderSelf(speciesTemplate) {
        this.element.style.display = 'block';
        this.element.style.backgroundColor = this.color;

        const cardHeader = this.element.querySelector('h2');
        cardHeader.textContent = this.title;

        this.members.forEach(species => {
            let nextSpecies = speciesTemplate.cloneNode(true);
            this.element.appendChild(nextSpecies);
            species.setElement(nextSpecies);
            species.render(this.color);
        });
    }

    renderConnections(ctx) {
        ctx.strokeStyle = this.color;

        if (this.parent != null) {
            let from = this.parent.element.getBoundingClientRect();
            //cheap hack for filter to work
            if (from.x <= 0) return;
            let to = this.element.getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(from.x + from.width / 2, from.y + from.height / 2 + window.pageYOffset);
            ctx.lineTo(to.x + to.width / 2, to.y + to.height / 2 + window.pageYOffset);
            ctx.stroke();
        }
    }
}

export default Category;
