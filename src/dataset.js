import Category from './category.js';
import Species from './species.js';

const luca = new Category('LUCA', null, [], '#a2b9bd');

const archaeaDomain = new Category(
    'ARCHAEA DOMAIN',
    luca,
    [new Species('Thermophile', './src/images/thermophile.png', 'thermophilus')],
    '#a2b9bd'
);

const bacteriaDomain = new Category('BACTERIA DOMAIN', luca, [], '#a2b9bd');

const eukaryotes = new Category(
    'EUKARYOTES',
    archaeaDomain,
    [
        new Species('Supergroup SAR', './src/images/supergroupSAR.png', 'stramenopiles'),
        new Species('Amoeba', './src/images/amoeba.png', 'amoeba proteus'),
    ],
    '#a2b9bd'
);

const bacillota = new Category(
    'BACILLOTA PHYLUM',
    bacteriaDomain,
    [new Species('Staphylococus Genus', './src/images/staphylococcus.png', 'staphylococcus')],
    '#a2b9bd'
);
const pseudomondota = new Category(
    'PSEUDO-MONADOTA PHYLUM',
    bacteriaDomain,
    [new Species('E. coli', './src/images/ecoili.png', 'escherichia coli')],
    '#a2b9bd',
    'row'
);
const archaeplastida = new Category(
    'ARCHAEPLASTIDA',
    eukaryotes,
    [new Species('Red Algae', './src/images/redalgae.png', 'rhodophyta')],
    '#a2b9bd'
);
const opisothokonts = new Category(
    'OPISTHOKONTS',
    eukaryotes,
    [new Species('Choanoflagellate', './src/images/choano.png', 'choanoflagellatea')],
    '#a2b9bd'
);

const plantaeKingdom = new Category(
    'PLANTAE KINGDOM',
    archaeplastida,
    [
        new Species(
            'Ferns, horsetails, clubmosses',
            './src/images/pteridophyta.png',
            'pteridophyta'
        ),
        new Species('Mosses, liverworts, hornworts', './src/images/byrophyta.png', 'bryophyta'),
    ],
    '#6ACC66'
);
const fungiKingdom = new Category(
    'FUNGI KINGDOM',
    opisothokonts,
    [
        new Species('Aquatic Fungi', './src/images/aquaticfungi.png', 'chytridiomycota'),
        new Species('Bread Mold', './src/images/breadmold.png', 'rhizopus stolonifer'),
    ],
    '#B7AD86'
);
const animaliaKingdom = new Category(
    'ANIMALIA KINGDOM',
    opisothokonts,
    [
        new Species('Sea Sponges', './src/images/seasponge.png', 'porifera phylum'),
        new Species('Comb Jelly', './src/images/combjelly.png', 'ctenophora'),
    ],
    '#7ABCDA'
);

const data = [
    [luca],
    [archaeaDomain, bacteriaDomain],
    [eukaryotes, bacillota, pseudomondota],
    [opisothokonts, archaeplastida],
    [fungiKingdom, animaliaKingdom, plantaeKingdom],
];

export default data;
