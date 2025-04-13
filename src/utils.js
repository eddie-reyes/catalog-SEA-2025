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
        currentCategory.members = [];
        pathToSearch.push([currentCategory]);
        currentCategory = currentCategory.parent;
    }

    //append target species to first category
    pathToSearch[0][0].members = [speciesMatch];

    return pathToSearch.reverse();
}

export function filterByKingdom(data) {}
