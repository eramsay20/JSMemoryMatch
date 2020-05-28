/*-----------------------------------------------------------------------/
Exercise Instructions:
You will create a web application for a card matching game according to the 
Memory Game requirements below. This exercise is intended to be a matching 
game web application that allows a player to match pairs of face down cards 
by revealing them two at a time. The player wins when all cards have been matched. 
Use HTML, CSS, and JavaScript in order to accomplish all of the minimum requirements.

Technical Requirements:
● All event listeners should be defined in “window.onload” with named functions
● The timer and images (if uploading custom images) can be global variables. N​o other
variables can be global variables
● All styling in CSS file
● All events and functionality in JavaScript file
● Multiple functions This
● Comments in the code explaining each section

Requirements:
1. App should utilize at a minimum: JavaScript, HTML, and CSS (√)
2. The game should have 16 cards minimum
3. Allow users to flip two cards. If they do not match, flip over. If they do, keep up.
4. Display win message and clicks/attempts in the event that the player wins
5. Include a button to start a new game at any time

Stretch Requirements:
1. User can choose number of cards
2. User can upload/choose images on the card faces
3. The game is timed, with the player’s final time displayed at the end 
-----------------------------------------------------------------------*/

//----------------------Random Number Generator (START)-------------------------------/
function randNum (numInput) {
    let num = Math.floor(Math.random() * (numInput+1));
    console.log(num);
    return num;
};
//----------------------Random Number Generator (END)-------------------------------/

//----------------------Identify Objects & Parents (START)-------------------------------/
// document.querySelector('body').addEventListener('click', (event) => {
//     let clickTarget = event.target;
//     let clickParent = clickTarget.parentNode;
//      console.log(clickTarget);
//      console.log(clickParent);
// });
//----------------------Identify Objects & Parents (END)-------------------------------/

//----------------------Generate Cards Array for Game (START)-------------------------------/

// console.log(document.querySelectorAll("#card")); // WORKS, CREATES ARRAY

document.querySelector('.startButton').addEventListener('click', () => {
    let cardArr = document.querySelectorAll('#card');
    let cardCount = parseFloat(document.querySelector('.inputCardNum').value);
    let cardTable = document.querySelector('.cardTable');

        console.log(cardArr);
        console.log(cardArr.length);
        console.log(cardCount);
        console.log(cardTable);


    for (i=cardArr.length; i<cardCount; i+=1){
        let newCard = document.createElement('div');
        newCard.className = "cardBack";
        cardTable.appendChild(newCard);
    }



    
    // let newCard = document.createElement('li');
    
    // let dueDate = document.createElement('input');
    // let deleteButton = document.createElement('button');
    // let descriptLi = document.createElement('li');

    // dueDate.type = "date";

    // dueDate.className= "dueDate";
    // saveButton.className = "saveButton";
    // deleteButton.className = "deleteButton";
    // descriptLi.className = "descriptLi";

    // dueDate.value = document.querySelector('.dueDateSelector').value;
    // listItem.value = document.querySelector('.addItemInput').value;
    // descriptLi.textContent = document.querySelector('.addItemDescript').value;
    // saveButton.textContent = "Save";
    // deleteButton.textContent = "Delete";

    // li.appendChild(dueDate);
    // li.appendChild(listItem);
    // li.appendChild(saveButton);
    // li.appendChild(deleteButton);

    // ul.appendChild(li);
    // ul.appendChild(descriptLi);

    // document.querySelector('.addItemInput').value = '';
    // document.querySelector('.addItemDescript').value = '';
    // document.querySelector('.dueDateSelector').value = '';
});