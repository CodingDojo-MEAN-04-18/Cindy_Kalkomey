// Assignment: Deck of Cards: Create a Deck class. A deck should have the following functionality:
//     The Deck should contain the 52 standard cards
//     The Deck should be able to shuffle
//     The Deck should be able to reset
//     The Deck should be able to deal a random card
// Deal should return the card that was dealt and remove it from the deck

// New ES6 way
// parent Deck class

class Deck{
    constructor() {
        this.deck = this.defineDeck();
        console.log("\n***** out-of-the-box deck \n");
        this.displayDeck();
    }

    defineDeck() {
        let deck = [];
        let suits = ["heart", "diamond", "club", "spade"];
        for (let suit of suits) { 
            for (let j = 1; j < 14; j++){
                deck.push({suit: suit, card:j});
            }
        }
        return deck;
    }

    displayDeck() {
        for (let i = 0; i < this.deck.length; i++) { 
            console.log( i + ': ', this.deck[i] );
        };
        return this;
    }

    resetDeck() {
        this.deck = this.defineDeck();
        return this;
    }
 
    dealCard() {
       
        // draw top (first) card
        let cardDrawn = this.deck[0];
        console.log("\n***** card drawn is: ", cardDrawn);

        // Then remove cardDrawn from this.deck by shifting 1 element to left
        this.deck.shift();

        // return card drawn object
        return cardDrawn;
        }

    chooseRandomCard() {
        // generate random integer between 0 and number-of-cards-less-1, inclusive
        let deckSize = this.deck.length;
        let rdmDraw = Math.floor(Math.random() * deckSize);
        console.log('rdmDraw  = ', rdmDraw);

        // set cardDrawn to the element in this.deck array at random integer index 
        let cardDrawn = this.deck[rdmDraw];

        // Then remove cardDrawn from this.deck with splice:
        if (rdmDraw >= 0  && rdmDraw <= deckSize) {
            console.log("removed card:", this.deck[rdmDraw]);this.deck.splice(rdmDraw, 1);
        }

        // return card drawn object
        return cardDrawn;
    }

    swapCardPositions(pos1, pos2) {
        //check that pos1 and pos2 fall within the array
        if ( ( pos1 >= 0  && pos1 <= this.deck.length-1 ) &&       ( pos2 >= 0  && pos2 <= this.deck.length-1 ) ) {
            let temp = this.deck[pos1];
            this.deck[pos1] = this.deck[pos2];
            this.deck[pos2] = temp;
        } else {
            console.log("error: Trying to swap with a position outside of range:", pos1, pos2);
        }
        return this.deck;
    }

    shuffleCards() {
        // simulate a shuffle by making pass thru deck and at each index, swap with another randomly chosen index

        for (let i = 0; i < this.deck.length; i+=1) {

            //find random swap position
            let rdm = Math.floor(Math.random() * (this.deck.length-1));
            // console.log("swapping positions i=", i, "and rdm =", rdm);
            // swap postions i and rdm in deck
            this.swapCardPositions(i, rdm);
        }
        return this;
     }
}


const deck1 = new Deck();

console.log("\n***** Dealing Card *****");
cardDealt1 = deck1.dealCard();
deck1.displayDeck();

console.log("\n***** Shuffling Deck *****");
deck1.shuffleCards().displayDeck();;

console.log("\n***** Dealing Card *****");
cardDealt2 = deck1.dealCard();
deck1.displayDeck();

console.log("\n***** Shuffling Deck *****");deck1.shuffleCards().displayDeck();

console.log("\n***** Shuffling Deck *****");deck1.shuffleCards().displayDeck();

console.log("\n***** Shuffling Deck *****");deck1.shuffleCards().displayDeck();

console.log("\n***** Restting Deck *****");
// deck1.resetDeck().displayDeck();



// Now create a Player class. A Player should have the following functionality:
//     The Player should have a name
//     The Player should have a hand
//     The Player should be able to take a card (use the deck.deal method)
//     The Player should be able to discard a card

class Player{
    constructor(name, hand) {
        this.name = name;
        this.hand = [];
    }

    takeCard(deck) {
        this.hand.push( deck.dealCard() );
        return this;
    }

    displayHand() {
        console.log('***** hand is *****')
        for (let i = 0; i < this.hand.length; i++) { 
            console.log( i + ': ', this.hand[i] );
        };
    }

    discardCard(card) {
        let idx = this.hand.indexOf(card);
        if(idx > 0) {
          this.hand.splice(idx, 1);
        } else {
            console.log('error: trying to discard card that is not in hand');
        }
        return this;
    }
}

const player1 = new Player();

console.log("\n***** Shuffling Deck *****");deck1.shuffleCards().displayDeck();

console.log("\n***** Shuffling Deck *****");deck1.shuffleCards().displayDeck();

// draw 5 cards for player1's hand
player1.takeCard(deck1).takeCard(deck1).takeCard(deck1).takeCard(deck1).takeCard(deck1);

console.log("\n***** Player1's Hand *****");
player1.displayHand();

console.log("\n***** Deck1 After Drawing Hand *****");
deck1.displayDeck();

//discard a card from player1's hand
console.log("\n***** Discarding Card from Hand *****");
player1.discardCard( player1.hand[3] );

console.log("\n***** Player1's Hand *****");
player1.displayHand();

// why can't it find card in hand when described this way????
let card = { suit: 'heart', card: 2 };
player1.discardCard( card);
player1.displayHand();


// Optional:Create a blackjack game with your deck of cards!

