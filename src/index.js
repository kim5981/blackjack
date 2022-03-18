//test
console.log("hello i'm working :)");

const playerHand = "";
const dealerHand = "";

//establish royal cards
const k = 10;
const q = 10;
const j = 10;
const a = [1 || 11]



const suit = [1,2,3,4,5,6,7,8,9,k,q,j,a]


const stand = "stand"; //do nothing more with your hand
//randomize a card to give out 
const randomizer = () => suit[Math.floor(Math.random() * suit.length)];

// console.log("hit me:", hit);

card1 = randomizer();
    card2 = randomizer();

function cardRules(array, card1, card2) {
    
    const playerHand = card1 + card2;
    const dealerHand = card1 + card2;

    if(playerHand === 21) {
        console.log("you win");
    } else if (playerHand< 21) {
        const addlCard = randomizer();
        const newTotal = addlCard + playerHand;

    }
}

cardRules(suit, card1, card2)
// cardRules(suit, 1, "K" );

//later establish a wager w/ rules etc (min $5)

//dealer deals randomized cards to players 

//1) 
// one card (face up) to player
// one card (face down) to dealer
//2)
//another card (face up) to player
//another card (face up) to dealer
//... players have two face up cards , dealer has one face up one face down

