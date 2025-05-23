/*
Dataset complied from UsefulCharts:
    https://www.youtube.com/watch?v=ii4510LeRXo

*/

import Category from './category.js';
import Species from './species.js';

const light_blue = '#a2b9bd';
const dark_yellow = '#B7AD86';
const blue = '#7ABCDA';
const green = '#6ACC66';
const purple = '#AC81B0';
const red = '#FE7F5E';

const luca = new Category(
    'LUCA',
    null,
    [
        new Species(
            'Last Universal Common Ancestor',
            './src/images/luca.png',
            'the orgin of all life on earth'
        ),
    ],
    light_blue
);

const archaeaDomain = new Category(
    'ARCHAEA DOMAIN',
    luca,
    [new Species('Thermophiles', './src/images/thermophile.png', 'thermophilus')],
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
    green,
    'plantae'
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
    blue,
    'animalia'
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
        new Species('Earthworms, leeches', './src/images/earthworm.png', 'annelida'),
        new Species('Flatworms', './src/images/flatworm.png', 'platyhelminthes'),
        new Species('Roundworms', './src/images/roundworm.png', 'nematoda'),
    ],
    blue,
    'animalia'
);
const chordata = new Category(
    'CHORDATA PHYLUM',
    animaliaKingdom,
    [new Species('Lancelets', './src/images/lancelets.png', 'cephalochordata')],
    blue,
    'animalia'
);

const gymnosperms = new Category(
    'GYMNOSPERMS',
    plantaeKingdom,
    [
        new Species('Ginkos', './src/images/ginko.png', 'ginkgoales'),
        new Species('Monkey Puzzle Tree', './src/images/monkeypuzzle.png', 'araucariales'),
        new Species('Cypress Trees, Redwoods', './src/images/cupressales.png', 'cupressales'),
    ],
    green,
    'plantae'
);
const angiosperms = new Category('ANGIOSPERMS', plantaeKingdom, [], green, 'plantae');

const magnoliid = new Category(
    'MAGNOLIID DICOTS',
    angiosperms,
    [
        new Species('Radiator Plants', './src/images/radiatorplants.png', 'peperomia'),
        new Species('Black Pepper', './src/images/blackpepper.png', 'P. nigrum'),
        new Species('Bay Laurel', './src/images/baylaurel.png', 'L. nobilis'),
    ],
    green,
    'plantae'
);

const monocots = new Category(
    'MONOCOTS',
    angiosperms,
    [
        new Species('Coconut Palm Tree', './src/images/coconutpalm.png', 'arecales'),
        new Species('Lilies & Tulips', './src/images/tulips.png', 'liliales'),
    ],
    green,
    'plantae'
);

const vertebrates = new Category(
    'VERTEBRATES',
    chordata,
    [
        new Species('Rays', './src/images/ray.png', 'myliobatiformes'),
        new Species('Sharks', './src/images/shark.png', 'lamniformes'),
    ],
    blue,
    'animalia'
);

const insectClass = new Category(
    'INSECT CLASS',
    protostomes,
    [
        new Species('Dragonflies', './src/images/dragonfly.png', 'odonata'),
        new Species('Lice', './src/images/lice.png', 'psocodea'),
        new Species('Cockroaches', './src/images/cockroach.png', 'blattodea'),
        new Species('Mantises', './src/images/mantis.png', 'mantodea'),
    ],
    purple,
    'insect'
);

const agaricales = new Category(
    'AGARICALES',
    basidiomycota,
    [
        new Species('Magic Mushrooms', './src/images/magicmushrooms.png', 'P. semilanceata'),
        new Species('Button Mushrooms', './src/images/buttonmushroom.png', 'A. bisporus'),
        new Species('Shiitake Mushrooms', './src/images/shiitakemushroom.png', 'L. edodes'),
    ],
    dark_yellow,
    'fungi'
);

const holometabola = new Category(
    'HOLOMETABOLA',
    insectClass,
    [
        new Species('Beetles', './src/images/beetle.png', 'coleoptera'),
        new Species('Flies', './src/images/fly.png', 'diptera'),
        new Species('Butterflys, Moths', './src/images/butterfly.png', 'lepidoptera'),
        new Species('Fleas', './src/images/flea.png', 'siphonaptera'),
    ],
    purple,
    'insect'
);

const actinopterygii = new Category(
    'ACTINOPTERYGII',
    vertebrates,
    [
        new Species('Catfish', './src/images/catfish.png', 'siluriformes'),
        new Species('Herring, Sardines', './src/images/herring.png', 'clupeiformes'),
        new Species('Tetras, Piranhas', './src/images/tetras.png', 'characiformes'),
    ],
    blue,
    'animalia'
);

const sarcopterygii = new Category(
    'SARCOPTERYGII',
    vertebrates,
    [
        new Species('Lungfish', './src/images/lungfish.png', 'dipnoi'),
        new Species('Coelacanths', './src/images/coelacanth.png', 'actinistia'),
    ],
    blue,
    'animalia'
);

const eudicots = new Category(
    'EUDICOTS',
    monocots,
    [
        new Species('Lotuses', './src/images/lotus.png', 'nelumbonaceae'),
        new Species('Poppies, Buttercups', './src/images/poppies.png', 'ranunculaceae'),
    ],
    green,
    'plantae'
);

const rosids = new Category(
    'ROSIDS',
    eudicots,
    [
        new Species('Maple Trees', './src/images/mapletree.png', 'sapindaceae'),
        new Species('Cabbage, Broccoli', './src/images/broccoli.png', 'brassicales'),
        new Species('Popular, Aspens', './src/images/salicaceae.png', 'saliceae'),
    ],
    green,
    'plantae'
);

const asterids = new Category(
    'ASTERIDS',
    eudicots,
    [
        new Species('Dandelions', './src/images/dandelion.png', 'taraxacum'),
        new Species('Daisies', './src/images/daisy.png', 'bellis'),
        new Species('Sunflowers', './src/images/sunflower.png', 'helianthus'),
    ],
    green,
    'plantae'
);

const percomorpha = new Category(
    'PEROMORPHA',
    actinopterygii,
    [
        new Species('Seahorses', './src/images/seahorse.png', 'syngnathiformes'),
        new Species('Halibut, Sole', './src/images/halibut.png', 'pleuronectiformes'),
        new Species('Guppies', './src/images/guppy.png', 'cyprinodontiformes'),
        new Species('Betta, Gouramies', './src/images/betta.png', 'anabantiformes'),
    ],
    blue,
    'animalia'
);

const reptileClass = new Category(
    'REPTILE CLASS',
    sarcopterygii,
    [
        new Species('Fish-Like "Dinosaurs"', './src/images/fishdino.png', 'ichthyosauria'),
        new Species('Marine "Dinosaurs"', './src/images/marinedino.png', 'plesiosauria'),
        new Species('Turtles', './src/images/turtle.png', 'testudines'),
    ],
    red,
    'reptiles'
);

const hymenoptera = new Category(
    'HYMENOPTERA',
    holometabola,
    [
        new Species('Ants', './src/images/ant.png', 'formicidae'),
        new Species('Bees', './src/images/bee.png', 'apidae'),
        new Species('Hornets, Wasps', './src/images/wasp.png', 'vespidae'),
    ],
    purple,
    'insect'
);

const dinosauria = new Category(
    'DINOSAURIA',
    reptileClass,
    [
        new Species('Armoured Dinosaurs', './src/images/ankylosauridae.png', 'ankylosauridae'),
        new Species('Duck-billed Dinosaurs', './src/images/stegosaruidae.png', 'hadrosauridae'),
        new Species('Stegosaurus', './src/images/stegosaurus.png', 'stegosaruidae'),
        new Species('Triceratops', './src/images/triceratops.png', 'ceratopsidae'),
    ],
    red,
    'reptiles'
);

const squamata = new Category(
    'SQUAMATA',
    reptileClass,
    [
        new Species('Geckoes', './src/images/gecko.png', 'gekkonidae'),
        new Species('Chameleons', './src/images/chameleon.png', 'chamaeleonidae'),
        new Species('Iguanas', './src/images/iguana.png', 'iquanidae'),
    ],
    red,
    'reptiles'
);

const data = [
    [luca],
    [archaeaDomain, bacteriaDomain],
    [eukaryotes, bacillota, pseudomondota],
    [opisothokonts, archaeplastida],
    [fungiKingdom, animaliaKingdom, plantaeKingdom],
    [ascomycota, basidiomycota, protostomes, chordata, angiosperms, gymnosperms],
    [agaricales, insectClass, vertebrates, magnoliid, monocots],
    [holometabola, actinopterygii, sarcopterygii, eudicots],
    [hymenoptera, percomorpha, reptileClass, rosids, asterids],
    [dinosauria, squamata],
];

export default data;
