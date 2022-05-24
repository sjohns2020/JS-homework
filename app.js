

document.addEventListener("DOMContentLoaded", () => {
    
    const container = document.querySelector('#container');

    // a <p> with red text that says “Hey I’m red!”
    // Create new p
    const newRedP = document.createElement('p');
    // Change P text
    newRedP.textContent = "Hey I'm red!";
    // Add an id: that connects the red CSS to the P
    newRedP.setAttribute('id', 'red')
    // adds new P with id: to the CONTAINER
    container.appendChild(newRedP)

    // an <h3> with blue text that says “I’m a blue h3!”
    // Create new h3
    const newBlueH3 = document.createElement('h3');
    // Change h3 text
    newBlueH3.textContent = "I’m a blue h3!";
    // Add an id: that connects the blue CSS to the h3
    newBlueH3.setAttribute('id', 'blue')
    // adds new h3 with id: to the CONTAINER
    container.appendChild(newBlueH3)

    // a <div> with a black border and pink background color with the following elements inside of it:
    // another <h1> that says “I’m in a div”
    // a <p> that says “ME TOO!”
    // Create new div
    const newPinkDiv = document.createElement('div');
    newPinkDiv.classList.add('pink-div');
    container.appendChild(newPinkDiv)

    const newH1 = document.createElement('div')
    newH1.textContent = 'I’m in a div';
    newPinkDiv.appendChild(newH1)

    const newP = document.createElement('p')
    newP.textContent = "ME TOO!";
    newPinkDiv.appendChild(newP)


    // EXTENSION 
    //Create an array of strings to detail your favourite foods.
    // Add a new div with a header of "My Favourite Foods".
    // Create a new list of your favourite foods
    // Append that list to the div.


    const favFoods = ["Tacos", "Margaritas", "Chocolate"];

    const newDivWithH1 = document.createElement('div')
    newDivWithH1.classList.add('extension')
    container.appendChild(newDivWithH1)

    const newH1InDiv = document.createElement('h1')
    newH1InDiv.textContent = "My Favourite Foods";
    newDivWithH1.appendChild(newH1InDiv)

    const favFoodsUl = document.createElement('ul')
      for (let food of favFoods) {
        const foodLi = document.createElement('li');
        foodLi.classList.add('extensionLi')
        foodLi.textContent = food;
        favFoodsUl.appendChild(foodLi)
    }
    newDivWithH1.appendChild(favFoodsUl)


})









// #red {
// }

// #blue {
// }

// .pink-div {
// }

// // EVENT LISTERNERS
// document.addEventListener("DOMContentLoaded", () => {
//     // query selector takes in CSS selector as an argument - h1 bold. # id class
//     // query selector only finds the first thing (like find) 
//     const title = document.querySelector("h1");
//     title.textContent = "Javascript says hello WD23!"

//     const welcomeParagraph = document.querySelector("#welcome-paragraph")
//     console.log(welcomeParagraph);

//     const firstRedElement = document.querySelector("ul>li.red")
//     firstRedElement.textContent = "JS changed this red element"
//     // Add a new class to an element
//     firstRedElement.classList.add("bold")
//     // NEVE USE firstRedElement.innerHTML as it overwrites the HTML
//     console.log(firstRedElement);

//     // HOW TO FIND ALL ELEMENTS
//     const allListItems = document.querySelectorAll("LI")
//     console.dir(allListItems)

//     // ADD NEW HTML - passes in an HTML tag name not SCC element (li)
//     const newListItem = document.createElement("li")
//     newListItem.textContent = "Purple - JS created this too";
//     newListItem.classList.add("purple")
//     const list = document.querySelector("ul")
//     list.appendChild(newListItem)
// });