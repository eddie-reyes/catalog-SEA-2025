import Category from './category.js';
import Species from './species.js';

const light_blue = '#a2b9bd';
const dark_yellow = '#B7AD86';
const blue = '#7ABCDA';
const green = '#6ACC66';

const luca = new Category(
    'LUCA',
    null,
    [
        new Species(
            '"Last Universal Common Ancestor"',
            './src/images/luca.png',
            'the orgin of all life on earth'
        ),
    ],
    light_blue
);

const archaeaDomain = new Category(
    'ARCHAEA DOMAIN',
    luca,
    [new Species('Thermophile', './src/images/thermophile.png', 'thermophilus')],
    light_blue
);

const bacteriaDomain = new Category('BACTERIA DOMAIN', luca, [], light_blue);

const eukaryotes = new Category(
    'EUKARYOTES',
    archaeaDomain,
    [
        new Species('Supergroup SAR', './src/images/supergroupSAR.png', 'stramenopiles'),
        new Species('Amoeba', './src/images/amoeba.png', 'amoeba proteus'),
    ],
    light_blue
);

const bacillota = new Category(
    'BACILLOTA PHYLUM',
    bacteriaDomain,
    [new Species('Staphylococus Genus', './src/images/staphylococcus.png', 'staphylococcus')],
    light_blue
);
const pseudomondota = new Category(
    'PSEUDO-MONADOTA PHYLUM',
    bacteriaDomain,
    [new Species('E. coli', './src/images/ecoili.png', 'escherichia coli')],
    light_blue,
    'row'
);
const archaeplastida = new Category(
    'ARCHAEPLASTIDA',
    eukaryotes,
    [new Species('Red Algae', './src/images/redalgae.png', 'rhodophyta')],
    light_blue
);
const opisothokonts = new Category(
    'OPISTHOKONTS',
    eukaryotes,
    [new Species('Choanoflagellate', './src/images/choano.png', 'choanoflagellatea')],
    light_blue
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
    green
);
const fungiKingdom = new Category(
    'FUNGI KINGDOM',
    opisothokonts,
    [
        new Species('Aquatic Fungi', './src/images/aquaticfungi.png', 'chytridiomycota'),
        new Species('Bread Mold', './src/images/breadmold.png', 'rhizopus stolonifer'),
    ],
    dark_yellow,
    'fungi'
);
const animaliaKingdom = new Category(
    'ANIMALIA KINGDOM',
    opisothokonts,
    [
        new Species('Sea Sponges', './src/images/seasponge.png', 'porifera phylum'),
        new Species('Comb Jelly', './src/images/combjelly.png', 'ctenophora'),
    ],
    blue
);

const basidiomycota = new Category(
    'BASIDIO-MYCOTA DIVISION',
    fungiKingdom,
    [],
    dark_yellow,
    'fungi'
);
const ascomycota = new Category(
    'ASCO-MYCOTA DIVISION',
    fungiKingdom,
    [
        new Species('Common Mold', './src/images/commonmold.png', 'cladosporium'),
        new Species('Lichenized Fungi', './src/images/lichenizedfungi.png', 'lecanoromycetes'),
        new Species('Truffles', './src/images/truffles.png', 'tuber macrosporum'),
    ],
    dark_yellow,
    'fungi'
);

const protostomes = new Category(
    'PROTOSTOMES',
    animaliaKingdom,
    [
        new Species('earthworms, leeches', './src/images/earthworm.png', 'annelida'),
        new Species('flatworms', './src/images/flatworm.png', 'platyhelminthes'),
        new Species('roundworms', './src/images/roundworm.png', 'nematoda'),
    ],
    blue
);
const chordata = new Category(
    'CHORDATA PHYLUM',
    animaliaKingdom,
    [new Species('lancelets', './src/images/lancelets.png', 'cephalochordata')],
    blue
);

const gymnosperms = new Category(
    'GYMNOSPERMS',
    plantaeKingdom,
    [
        new Species('Ginkos', './src/images/ginko.png', 'ginkgoales'),
        new Species('Monkey Puzzle Tree', './src/images/monkeypuzzle.png', 'araucariales'),
        new Species('Cypress Trees, Redwoods', './src/images/cupressales.png', 'cupressales'),
    ],
    green
);
const angiosperms = new Category('ANGIOSPERMS', plantaeKingdom, [], green);

const data = [
    [luca],
    [archaeaDomain, bacteriaDomain],
    [eukaryotes, bacillota, pseudomondota],
    [opisothokonts, archaeplastida],
    [fungiKingdom, animaliaKingdom, plantaeKingdom],
    [ascomycota, basidiomycota, protostomes, chordata, angiosperms, gymnosperms],
];

export default data;
