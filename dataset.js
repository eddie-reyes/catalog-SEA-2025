import Category from './category.js';
import Species from './species.js';

const luca = new Category('Last Universal Common Ancestor', null, [
    new Species(
        'LUCA',
        'https://images.newscientist.com/wp-content/uploads/2016/07/25150003/luca_1300716lato.jpg'
    ),
]);

const archaeaDomain = new Category('Archaea Domain', luca, []);

const bacteriaDomain = new Category('Bacteria Domain', luca, []);

const eukaryotes = new Category('Eukaryotes', archaeaDomain, []);

const cyanophytaphylum = new Category('Eukaryotes', bacteriaDomain, []);

const data = [[luca], [archaeaDomain, bacteriaDomain], [eukaryotes, cyanophytaphylum]];

export default data;
