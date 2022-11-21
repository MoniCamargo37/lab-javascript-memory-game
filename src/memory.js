class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    if (this.cards === undefined) return undefined;
    this.cards = this.cards.sort(function () {
      return Math.random() - 0.5;
    });
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else{
      return false;
    }
  }

  checkIfFinished() {

    if(this.pairsGuessed * 2 === this.cards.length){
      return true;
    }
    return false;
    
/* second option to solve this problem: 

   if (this.pairsClicked === 0 && this.pairsGuessed === 0){
    return false;
   } 
   if (this.pairsGuessed * 2 !== this.cards.length) {
    return false;
   } else {
    return true;
  }*/
  }
}