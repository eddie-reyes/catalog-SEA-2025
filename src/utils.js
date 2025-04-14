export function searchSpecies(data, keyword) {
    let speciesMatch;
    let currentCategory;

    //search all categories
    for (let categories of data) {
        for (let category of categories) {
            for (let species of category.members) {
                if (
                    species.title.toLowerCase().includes(keyword) ||
                    species.latinName.toLowerCase().includes(keyword)
                ) {
                    speciesMatch = species;
                    currentCategory = category;
                }
            }
        }
    }

    //just return full dataset if no matches
    if (!speciesMatch) {
        return data;
    }

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

    return pathToSearch.reverse();
}

export function filterByKingdom(data, keyword) {
    let kingdom = [];

    data.forEach(categories => {
        let currentRow = [];
        categories.forEach(category => {
            if (category.kingdom == keyword) {
                currentRow.push(category);
            }
        });

        kingdom.push(currentRow);
    });

    return kingdom;
}

export function resetAll(data) {
    data.forEach(categories => {
        categories.forEach(category => {
            category.members.forEach(species => {
                species.visible = true;
            });
        });
    });
}
