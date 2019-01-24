class Game {
    constructor() {
         this.missed = 0;
         this.phrases = [];
         this.activePhrase = null;         
    }

    /**
     *  Creates phrases for use in game 
     * @return {array} An array of phrases that could be used in the game 
     */ 

    createPhrase() {
        const phrases = [];
        phrases.push(new Phrase('First phrase'));
        phrases.push(new Phrase('Second phrase'));
        phrases.push(new Phrase("Third phrase"));
        phrases.push(new Phrase('Fourth phrase'));
        phrases.push(new Phrase('Fifth phrase'));
        return phrases;
 
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randNum = Math.floor(Math.random() * this.phrases.length); 
        const randPhrase = this.phrases[randNum];
        return randPhrase;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase(); 
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {

    }


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

    }
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

    }

    /**
     * Handles game interaction 
     */
    handleInteraction() {
        // Call each function
        //checkLetter()
        //showMatchedLetter()
        //checkForWin()
        //removeLife()
        //gameOver()
    }
}

