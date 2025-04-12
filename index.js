/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

import data from './src/dataset.js';

const cardContainer = document.getElementById('card-container');

const templateCategory = document.querySelector('.category');
const templateSpecies = document.querySelector('.species');
const row = document.querySelector('.row');

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth * window.devicePixelRatio;
canvas.height = window.innerHeight * window.devicePixelRatio * 5;
const ctx = canvas.getContext('2d');
ctx.lineWidth = 10;
ctx.strokeStyle = '#a2b9bd';

// This function adds cards the page to display the data in the array
function showCards() {
    //each row is represented by an array in data
    data.forEach(categories => {
        //create new row
        const nextRow = row.cloneNode(true);
        cardContainer.appendChild(nextRow);

        //create category elements in current row
        categories.forEach(category => {
            const nextCategory = templateCategory.cloneNode(true);
            nextRow.appendChild(nextCategory);
            //bind element to object
            category.setElement(nextCategory);
            //render element
            category.renderSelf(templateSpecies);
        });
    });
    //render connections on canvas after creating elements, otherwise positions will be incorrect
    renderGraphics();
}

function renderGraphics() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    data.forEach(categories => {
        categories.forEach(category => {
            category.renderConnections(ctx);
        });
    });
}

// This calls the addCards() function when the page is first loaded
document.addEventListener('DOMContentLoaded', showCards);

window.addEventListener('resize', renderGraphics);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
