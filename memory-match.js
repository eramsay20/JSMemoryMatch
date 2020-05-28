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

// RESOURCE: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript // 

//----------------------Random Number Generator (START)-------------------------------/
function randNum (numInput) {
    let num = Math.floor(Math.random() * (numInput));
    // console.log(num);
    return num;
};
//----------------------Random Number Generator (END)-------------------------------/

//----------------------Identify Objects & Parents (START)-------------------------------/
document.querySelector('body').addEventListener('click', (event) => {
    let clickTarget = event.target;
    let clickParent = clickTarget.parentNode;
    //  console.log(clickTarget);
    //  console.log(clickParent);
});
//----------------------Identify Objects & Parents (END)-------------------------------/

//----------------------STORE IMAGES IN ARRAY (START)-------------------------------/

let imageArr = [];

    let img0 ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/800px-01_of_spades_A.svg.png";
    imageArr.push(img0);

    let img1 ="https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/926/4H__83243.1440113515.1280.1280.png?c=2";
    imageArr.push(img1);

    let img2 = "https://theplayingcardfactory.com/wp-content/uploads/revslider/rev1/4cards.png";
    imageArr.push(img2);

    let img3 ="https://www.tripleclicks.com/images/site/games/cardking/i-kings.png";
    imageArr.push(img3);

console.log(imageArr);
// https://stackoverflow.com/questions/35397728/storing-images-in-javascript-variables
//----------------------STORE IMAGES IN ARRAY (END)-------------------------------/

// console.log(document.querySelectorAll("#card")); // WORKS, CREATES ARRAY

document.querySelector('.startButton').addEventListener('click', () => {
    let cardArr = document.querySelectorAll('#card');
    let initialCardCount = parseFloat(document.querySelector('.inputCardNum').value);
    let cardTable = document.querySelector('.cardTable');

    let maxImgCount = (initialCardCount/4); // since there are 4 types of images
    let img0Count = 0;
    let img1Count = 0;
    let img2Count = 0;
    let img3Count = 0;

        // console.log(cardArr);
        // console.log(initialCardCount);
        // console.log(cardTable.length);
        // console.log(cardTable);


    for (i=0; i < initialCardCount; i+=1){
        let cardImageNum = randNum(4);
        // console.log(cardImageNum);

        if (cardImageNum == 0){
            if(img0Count < maxImgCount){
                let newCard = document.createElement('div');
                let newCardImage = document.createElement('img');

                newCard.className = "cardBack";
                newCardImage.className = "cardImage";
                newCardImage.src = imageArr[0];
                console.log(newCardImage.src);

                newCard.appendChild(newCardImage);
                cardTable.appendChild(newCard);
                
                img0Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 1){
            if(img1Count < maxImgCount){
                let newCard = document.createElement('div');
                let newCardImage = document.createElement('img');

                newCard.className = "cardBack";
                newCardImage.className = "cardImage";
                newCardImage.src = imageArr[1];

                newCard.appendChild(newCardImage);
                cardTable.appendChild(newCard);
                img1Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 2){
            if(img2Count < maxImgCount){
                let newCard = document.createElement('div');
                let newCardImage = document.createElement('img');

                newCard.className = "cardBack";
                newCardImage.className = "cardImage";
                newCardImage.src = imageArr[2];

                newCard.appendChild(newCardImage);
                cardTable.appendChild(newCard);
                img2Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 3){
            if(img3Count < maxImgCount){
                let newCard = document.createElement('div');
                let newCardImage = document.createElement('img');

                newCard.className = "cardBack";
                newCardImage.className = "cardImage";
                newCardImage.src = imageArr["3"];

                newCard.appendChild(newCardImage);
                cardTable.appendChild(newCard);
                img3Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else {
           break;
        }
                       
    };
    // console.log(Object.keys(cardTable).length);

    
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