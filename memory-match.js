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
● Multiple functions 
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
    let num = Math.floor(Math.random() * (numInput));
    // console.log(num);
    return num;
};
//----------------------Random Number Generator (END)-------------------------------/



//----------------------Identify Objects & Parents (START)-------------------------------/
// document.querySelector('body').addEventListener('click', (event) => {
//     let clickTarget = event.target;
//     let clickParent = clickTarget.parentNode;
//     //  console.log(clickTarget);
//     //  console.log(clickParent);
// });
// //----------------------Identify Objects & Parents (END)-------------------------------/



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

// console.log(imageArr);
// https://stackoverflow.com/questions/35397728/storing-images-in-javascript-variables
//----------------------STORE GLOBAL IMAGES IN ARRAY (END)-------------------------------/



//----------------------STORE GLOBAL TIME VARIABLES (START)-------------------------------/

let t0;
let t1;

// https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
//----------------------STORE TIME VARIABLES (END)-------------------------------/



//----------------------INITIALIZE GAME (START)-------------------------------/
document.querySelector('.startButton').addEventListener('click', () => {
    let initialCardCount = parseFloat(document.querySelector('.inputCardNum').value);
    let cardTable = document.querySelector('.cardTable');

    let maxImgCount = (initialCardCount/imageArr.length); // takes user input for even # of cards, divides by # images
    let img0Count = 0; // initialize image variables
    let img1Count = 0; // initialize image variables
    let img2Count = 0; // initialize image variables
    let img3Count = 0; // initialize image variables

    function createCard(imageArrLocation) {
        let newCard = document.createElement('div');
        let newCardImage = document.createElement('img');

        newCard.className = "cardBack";
        newCardImage.className = "cardImage";
        newCardImage.src = imageArr[imageArrLocation];

        newCard.appendChild(newCardImage);
        cardTable.appendChild(newCard);
    };

    for (i=0; i < initialCardCount; i+=1){ // for loop to create number of cards == user input # of cards
        let cardImageNum = randNum(imageArr.length); // generate random number equal to length of image array (0, 1, 2, 3)

        if (cardImageNum == 0){
            if(img0Count < maxImgCount){
                createCard(cardImageNum);
                img0Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 1){
            if(img1Count < maxImgCount){
                createCard(cardImageNum);
                img1Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 2){
            if(img2Count < maxImgCount){
                createCard(cardImageNum);
                img2Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 3){
            if(img3Count < maxImgCount){
                createCard(cardImageNum);
                img3Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else {
            
           break;
        }
                       
    };
    t0= performance.now();
    document.querySelector('.message').innerHTML = "<strong>Begin!</strong>";
});
//----------------------INITIALIZE GAME (END)-------------------------------/


// RESOURCE: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript // 
// RESOURCE: https://teamtreehouse.com/library/getting-all-children-of-a-node-with-children

//----------------------CLICKS ARRAY, REVEALS & SCORE COUNT (START)-------------------------------/
let clickMemCount = 0; 
let totalClickCount = 0;
// ^^^ this is the only global variable not allowed, and its only being used because the click 
//functions would rewrite over the click count if left inside

document.querySelector('.cardTable').addEventListener('click', (event) => {
    let clickTarget = event.target;
    let targetParent = clickTarget.parentNode;
    let targetChild = clickTarget.children[0];
    let click0Target;
    let click1Target;
    let click0src;
    let click1src;
   
    function flipReset () {

        for (j = 0; j < document.querySelectorAll('.cardBack').length; j++) {
            if(document.querySelectorAll(".cardBack")[j].firstElementChild.className !== "revealed") {
                document.querySelectorAll(".cardBack")[j].firstElementChild.className = "cardImage"; 
                // console.log(document.querySelectorAll(".cardBack")[j].firstElementChild.className);
            }
        }
    }

    // console.log(clickTarget);
    // console.log(targetParent);
    // console.log(targetChild);

    if(clickMemCount == 0) {
        flipReset();
        document.querySelector('.guessCount').innerHTML = totalClickCount+1;

        if (clickTarget.children[0].className = "cardImage"){
            clickTarget.children[0].className="show-img";
            click0 = clickTarget.children[0]
            click0Img = clickTarget.children[0].src;
                clickMemCount++;
                totalClickCount++;
                console.log(`totalClickCount = `+totalClickCount);

        }
    }

    else if (clickMemCount == 1) {
        document.querySelector('.guessCount').innerHTML = totalClickCount+1;
        if (clickTarget.children[0].className = "cardImage"){
            click1 = clickTarget.children[0]
            click1.className = "show-img";
            click1Img = click1.src;
            clickMemCount++;
        }        
        
        if (click0Img == click1Img && click0.className !== "revealed" && click1.className!=="revealed") {
            click0.className = "revealed";
            click1.className = "revealed";

            clickMemCount = 0;
            totalClickCount++;
            console.log(`totalClickCount = `+totalClickCount);
            console.log("It's a match!");
        }
        
        else if (click0Img !== click1Img) {
            clickMemCount = 0;
            totalClickCount++;

            console.log(`totalClickCount = `+totalClickCount);
            console.log("No match! try again");  
        }
        
    }
});



//----------------------COUNT CLICKS ARRAY (END)-------------------------------/

//----------------------DETERMINE END OF GAME (START)-------------------------------/
document.querySelector('body').addEventListener('click', (event) => {
    let clickTarget = event.target;
    let clickParent = clickTarget.parentNode;
    let cardsRevealed = document.querySelectorAll('.revealed');
    let timeLapse = 0;

    if(cardsRevealed.length === imageArr.length*4) {

       t1 = performance.now();
       timeLapse = (t1-t0)/1000;
       document.querySelector('.message').innerHTML = `<strong>You won! </strong> <br> Time = ${timeLapse.toFixed(2)} secs, Clicks = ${totalClickCount}`;
       console.log(`Congrats! You've completed the game in ${timeLapse.toFixed(2)} seconds!`)

    }
});

//----------------------DETERMINE END OF GAME (END)-------------------------------/

//----------------------RESET GAME BUTTON (START)-------------------------------/
document.querySelector('.resetButton').addEventListener('click', () => {
    
    location.reload();
});

//----------------------RESET GAME BUTTON (END)-------------------------------/