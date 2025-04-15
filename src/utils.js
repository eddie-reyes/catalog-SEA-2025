import Category from './category.js';

//this file contains all of the utility functions that perform operations on the dataset (sort, filter, search, reset)

export function searchSpecies(data, keyword) {
    let speciesMatch;
    let currentCategory;

    //search all categories
    data.forEach(categories => {
        categories.forEach(category => {
            category.members.forEach(member => {
                if (
                    //compare search to common name & scientific name
                    member.title.toLowerCase().includes(keyword.toLowerCase()) ||
                    member.latinName.toLowerCase().includes(keyword.toLowerCase())
                ) {
                    speciesMatch = member;
                    currentCategory = category;
                }
            });
        });
    });

    //just return full dataset if no matches
    if (!speciesMatch) {
        return data;
    }

    //this will hold the categories which lead to target species
    let pathToSearch = [];

    //go back up tree starting from target species
    while (currentCategory) {
        pathToSearch.push([currentCategory]);
        currentCategory = currentCategory.parent;
    }

    //hide other species in target category
    pathToSearch[0][0].members.forEach(species => {
        if (species != speciesMatch) {
            species.visible = false;
        }
    });

    //reverse so that tree is top down
    return pathToSearch.reverse();
}

export function filterByKingdom(data, keyword) {
    let kingdom = [];

    data.forEach(categories => {
        let currentRow = [];
        categories.forEach(category => {
            if (category.kingdom == keyword) {
                //only append elements whose kingdom corresponds with selection
                currentRow.push(category);
            }
        });

        kingdom.push(currentRow);
    });

    //go to top of window
    scrollTo(0, 0);

    return kingdom;
}

export function sortAlphabetically(data, useSort) {
    if (!useSort) return data; //no sort, just use dataset

    //each category correlates to a letter of the alphabet
    let alphabetizedData = new Array(26).fill().map((val, idx) => {
        return [new Category(String.fromCharCode(65 + idx), null, [], '#808080')];
    });

    data.forEach(categories => {
        categories.forEach(category => {
            if (category.length != 0) {
                category.members.forEach(member => {
                    let idx = member.title.charCodeAt(0) - 65; //map char to index in alphabetized array

                    alphabetizedData[idx][0].members.push(member);
                });
            }
        });
    });

    //go to top of window
    scrollTo(0, 0);

    return alphabetizedData;
}
export function resetAll(data) {
    data.forEach(categories => {
        categories.forEach(category => {
            category.members.forEach(species => {
                species.visible = true; //set all species to visible
            });
        });
    });
}
