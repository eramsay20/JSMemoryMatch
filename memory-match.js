/*-----------------------------------------------------------------------/
Exercise Instructions:
You will create a web application for a card matching game according to the 
Memory Game requirements below. This exercise is intended to be a matching 
game web application that allows a player to match pairs of face down cards 
by revealing them two at a time. The player wins when all cards have been matched. 

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

//-----------------------------------------------------------------------------------/
//----------------------Random Number Generator (START)------------------------------/
//-----------------------------------------------------------------------------------/
function randNum (numInput) {
    let num = Math.floor(Math.random() * (numInput));
    // console.log(num);
    return num;
};
        //-----------------------------------------------------------------------------------/
        //----------------------Random Number Generator (END)--------------------------------/
        //-----------------------------------------------------------------------------------/

//----------------------------------------------------------------------------------/
//----------------------STORE GLOBAL IMAGES IN ARRAY & TIME VARIABLES (START)-------/
//----------------------------------------------------------------------------------/
let t0; // start time
let t1; // end time   

let imageArr = []; // array of image URLs to store over img.src

    let img0 ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/800px-01_of_spades_A.svg.png";
    imageArr.push(img0); // add URL to imgArr

    let img1 ="https://cdn2.bigcommerce.com/n-d57o0b/1kujmu/products/297/images/926/4H__83243.1440113515.1280.1280.png?c=2";
    imageArr.push(img1);

    let img2 = "https://theplayingcardfactory.com/wp-content/uploads/revslider/rev1/4cards.png";
    imageArr.push(img2);

    let img3 ="https://www.tripleclicks.com/images/site/games/cardking/i-kings.png";
    imageArr.push(img3);
        //----------------------------------------------------------------------------------/
        //----------------------STORE GLOBAL IMAGES IN ARRAY & TIME VARIABLES (START)-------/
        //----------------------------------------------------------------------------------/


//----------------------------------------------------------------------------------/
//----------------------INITIALIZE GAME (START)-------------------------------------/
//----------------------------------------------------------------------------------/
document.querySelector('.startButton').addEventListener('click', () => {
    let initialCardCount = parseFloat(document.querySelector('.inputCardNum').value); // store # of cards selection from user input
    let cardTable = document.querySelector('.cardTable'); // define object array that holds all card divs
    let maxImgCount = (initialCardCount/imageArr.length); // takes user input for even # of cards, divides by # images to ensure there's always an equal number of each type of image on board
    let img0Count = 0; // initialize image count variables to count the number of each type of card on the board
    let img1Count = 0; 
    let img2Count = 0; 
    let img3Count = 0; 

    function createCard(imageArrLocation) { // create a function to make card <div>s with 1 .img child element; images pull src data from imgArr[]
        let newCard = document.createElement('div'); // create a new card
        let newCardImage = document.createElement('img'); // create new img

        newCard.className = "cardBack"; // add default class to new card, hides image
        newCardImage.className = "cardImage"; // add default image class to new card image (used later when determining matches)
        newCardImage.src = imageArr[imageArrLocation]; // add URL from randomly selected imgArr[#]

        newCard.appendChild(newCardImage);  // add card to cardTable object array
        cardTable.appendChild(newCard);
    };

    for (i=0; i < initialCardCount; i+=1){  // for loop to create number of cards == user input # of cards
        let cardImageNum = randNum(imageArr.length); // generate random number equal to length of image array (0, 1, 2, 3)

        if (cardImageNum == 0){             //create card with image that matches imgArray location = 0
            if(img0Count < maxImgCount){
                createCard(cardImageNum);
                img0Count++;}
            else {
                initialCardCount = initialCardCount+1; //if cardtype0 already has the max on board, add +1 to loop length to get another random #
            }
        }
        else if (cardImageNum == 1){        //create card with image that matches imgArray location = 1
            if(img1Count < maxImgCount){
                createCard(cardImageNum);
                img1Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 2){        //create card with image that matches imgArray location = 2
            if(img2Count < maxImgCount){
                createCard(cardImageNum);
                img2Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else if (cardImageNum == 3){        //create card with image that matches imgArray location = 3
            if(img3Count < maxImgCount){
                createCard(cardImageNum);
                img3Count++;}
            else {
                initialCardCount = initialCardCount+1;
            }
        }
        else {
           break; // once all have maxed out, exit the loop
        }
    }           
    t0= performance.now(); // store start time of the game
    document.querySelector('.message').innerHTML = "<strong>Begin!</strong>"; // replace message to say "Begin!"
});
        //----------------------------------------------------------------------------------/
        //----------------------INITIALIZE GAME (END)---------------------------------------/
        //----------------------------------------------------------------------------------/


// RESOURCE: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript // 
// RESOURCE: https://teamtreehouse.com/library/getting-all-children-of-a-node-with-children

//----------------------------------------------------------------------------------------------------/
//----------------------HIDE/SHOW, MATCH LOGIC, and SCORE COUNT (START)-------------------------------/
//----------------------------------------------------------------------------------------------------/
let clickMemCount = 0;      // store click count for a single guess cycle (i.e. 2 card clicks, "0" and "1")
let totalClickCount = 0;    // keep running tally of total clicks required for the game

// NOTE: ^^ these are the only global variable used (not allowed). Only being used globally because the click 
// functions would re-write over the accumulated click counts if defined inside the event listener function

document.querySelector('.cardTable').addEventListener('click', (event) => {
    let clickTarget = event.target; // define where the player clicked in the cardTable <div>
    function flipReset () {         // function used to make sure any unmatched guesses are re-hidden again at the start of the next guess cycle
        for (j = 0; j < document.querySelectorAll('.cardBack').length; j++) {
            if(document.querySelectorAll(".cardBack")[j].firstElementChild.className !== "revealed") {
                document.querySelectorAll(".cardBack")[j].firstElementChild.className = "cardImage"; 
            }
        }
    }

    if(clickMemCount == 0) { // if click 1 of 2 in guess cycle...
        flipReset(); // make sure all unmatched from prior guess cycle are flipped back over
        document.querySelector('.guessCount').innerHTML = totalClickCount+1; // add the new click to the click counter shown in window

        if (clickTarget.firstElementChild.className == "cardImage"){ // if img class is default (hidden)...
            click0Target = clickTarget.firstElementChild; // store clicked card as initial card 1 of 2 in guess cycle
            click0Target.className = "show-img"; // replace class with show-img (i.e. visible)
            click0src = click0Target.src; // store clicked card's img URL as img 1 of 2 in guess cycle
                clickMemCount++; 
                totalClickCount++;
        }
    }
    else if (clickMemCount == 1) {// if click 2 of 2 in guess cycle...
        document.querySelector('.guessCount').innerHTML = totalClickCount+1; // add the new click to the click counter shown in window
       
        if (clickTarget.firstElementChild.className == "cardImage"){ // if img class is default (hidden)...
            click1Target = clickTarget.firstElementChild; // store clicked card as initial card 2 of 2 in guess cycle
            click1Target.className = "show-img"; // replace class with show-img (i.e. visible)
            click1src = click1Target.src; // store clicked card's img URL as img 1 of 2 in guess cycle
            clickMemCount++;
        }        
        // BELOW IS LOGIC USED TO EVALUATE WHETHER A MATCH EXISTS //
        if (click0src == click1src && click0Target.className !== "revealed" && click1Target.className !== "revealed") { // URL matches, and cards 1&2 are not already revealed...
            click0Target.className = "revealed"; // set class to revealed to permenantly leave as visible
            click1Target.className = "revealed"; // set class to revealed to permenantly leave as visible

            clickMemCount = 0; // reset the guess cycle count to 0
            totalClickCount++;
        }
        else if (click0src !== click1src) { // No match found...
            clickMemCount = 0; // reset the guess cycle count to 0
            totalClickCount++;
        }
    }
});
        //----------------------------------------------------------------------------------------------------/
        //----------------------HIDE/SHOW, MATCH LOGIC, and SCORE COUNT (END)---------------------------------/
        //----------------------------------------------------------------------------------------------------/


//----------------------------------------------------------------------------------/
//----------------------DETERMINE END OF GAME (START)-------------------------------/
//----------------------------------------------------------------------------------/
document.querySelector('body').addEventListener('click', (event) => {
    let clickTarget = event.target;
    let clickParent = clickTarget.parentNode;
    let cardsRevealed = document.querySelectorAll('.revealed');
    let timeLapse = 0;

    if(cardsRevealed.length === imageArr.length*4) { // If all cards flipped over... 

       t1 = performance.now(); // record win time
       timeLapse = (t1-t0)/1000; // calc time lapse
       document.querySelector('.message').innerHTML = `<strong>You won! </strong> <br> Time = ${timeLapse.toFixed(2)} secs, Clicks = ${totalClickCount}`;
       console.log(`Congrats! You've completed the game in ${timeLapse.toFixed(2)} seconds!`)

    }
});
        //----------------------------------------------------------------------------------/
        //----------------------DETERMINE END OF GAME (END)---------------------------------/
        //----------------------------------------------------------------------------------/


//----------------------------------------------------------------------------------/
//----------------------RESET GAME BUTTON (START)-----------------------------------/
//----------------------------------------------------------------------------------/
document.querySelector('.resetButton').addEventListener('click', () => {
    location.reload();
});
        //----------------------------------------------------------------------------------/
        //----------------------RESET GAME BUTTON (END)-----------------------------------/
        //----------------------------------------------------------------------------------/