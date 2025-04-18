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
        //bind element to object instance
        this.element = element;
    }

    renderSelf(speciesTemplate, options) {
        //render category and child elements
        this.element.style.display = 'block';
        this.element.style.backgroundColor = this.color;

        const cardHeader = this.element.querySelector('h2');
        cardHeader.textContent = this.title;

        this.members.forEach(species => {
            let nextSpecies = speciesTemplate.cloneNode(true);
            this.element.appendChild(nextSpecies);
            species.setElement(nextSpecies);
            species.render(this.color, options);
        });
    }

    renderConnections(ctx) {
        //draw connection between parent and self

        if (this.parent != null) {
            ctx.strokeStyle = this.parent.color;
            let from = this.parent.element.getBoundingClientRect(); //gets x,y in viewport
            //cheap hack for filter to work
            if (from.x <= 0) return;
            let to = this.element.getBoundingClientRect();

            ctx.beginPath();
            ctx.moveTo(from.x + from.width / 2, from.y + from.height / 2 + window.pageYOffset); //center of parent
            ctx.lineTo(to.x + to.width / 2, to.y + to.height / 2 + window.pageYOffset); //center of self
            ctx.stroke();
        }
    }
}

export default Category;
