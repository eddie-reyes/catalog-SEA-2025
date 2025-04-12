import Category from './category.js';
import Species from './species.js';

const luca = new Category('LUCA', null, []);

const archaeaDomain = new Category('ARCHAEA DOMAIN', luca, [
    new Species('Thermophile', './src/images/thermophile.png', 'thermophilus'),
]);

const bacteriaDomain = new Category('BACTERIA DOMAIN', luca, []);

const eukaryotes = new Category('EUKARYOTES', archaeaDomain, []);

const cyanophyta = new Category('CYANO-PHYTA PHYLUM', bacteriaDomain, []);
const bacillota = new Category('BACILLOTA PHYLUM', bacteriaDomain, []);
const pseudomondota = new Category('PSEUDO-MONADOTA PHYLUM', bacteriaDomain, []);
const archaeplastida = new Category('Archaeplastida', eukaryotes, []);
// const cyanophytaphylum = new Category('CYANO-PHYTA PHYLUM', bacteriaDomain, []);
// const cyanophytaphylum = new Category('CYANO-PHYTA PHYLUM', bacteriaDomain, []);
// const cyanophytaphylum = new Category('CYANO-PHYTA PHYLUM', bacteriaDomain, []);

const data = [
    [luca],
    [archaeaDomain, bacteriaDomain],
    [eukaryotes, cyanophyta, bacillota, pseudomondota],
    [archaeplastida],
];

export default data;
