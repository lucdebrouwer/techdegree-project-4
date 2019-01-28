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
        phrases.push(new Phrase('Third phrase'));
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

        // Retrieve all active letters in phrase
        // If all letters are shown, checkForWin = true
        // else checkForWin = false
        let boardLetters = document.getElementsByClassName('letter');
        let hiddenLetters = document.getElementsByClassName('show');
        let spaces = document.getElementsByClassName('space');
        

        for(let i = 0; i < this.activePhrase.phrase.length; i+=1) {
            if(this.activePhrase.phrase.length === (hiddenLetters.length + spaces.length)) {
                // Uncomment this line to check if phrase length equals to hiddenletters shown length 
                //console.log(`activephrase length: ${this.activePhrase.phrase.length},  hiddenLetters length: ${hiddenLetters.length + spaces.length}`);

                // End the game, user won
                //this.gameOver(true);
                return true;
            } else {
                return false;
            }              
        }
    }


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        const scoreboard = Array.from(document.querySelectorAll('.tries'));
        scoreboard[scoreboard.length - 1].className = 'hidden';

        if(this.missed === 5) {
            this.gameOver(false); // GameOver(gameWon) => false
        }
    }
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let header = document.querySelector('#game-over-message');
        let overlay = document.querySelector('#overlay');
        const phraseDiv = document.querySelector('#phrase');
        const phraseList = document.getElementsByTagName('ul')[0];

        if(gameWon) {
            overlay.className = 'win';
            overlay.style.display = 'block';
            header.textContent = "Congratulations, you've won the game!"; 

            phraseList.innerHTML = '';
            phraseDiv.removeChild(phraseList);
        } else {
            overlay.className = 'lose';
            overlay.style.display = 'block';
            header.textContent = 'Game over! You ran out of lives, try again and give it your best shot!';
            phraseList.innerHTML = '';
            phraseDiv.removeChild(phraseList);
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - the clicked button element
     */
    handleInteraction(button) {
        let btnLetter = button.textContent;
        if(this.activePhrase.checkLetter(btnLetter)) {
            console.log(`Letter ${btnLetter} is within the phrase`);

            game.activePhrase.showMatchedLetter(btnLetter);
            button.disabled = true;
            button.className = 'chosen';
            if(game.checkForWin()) {
                game.gameOver(true);
            }
        } else {
            button.disabled = true;
            button.className = 'wrong';
            game.removeLife();
            console.log(`Letter ${btnLetter} is not within the phrase`);


        }
    }
}

