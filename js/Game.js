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
        phrases.push(new Phrase('First play a game'));
        phrases.push(new Phrase('Three strikes ur out'));
        phrases.push(new Phrase('Thirthy seconds'));
        phrases.push(new Phrase('Fourth of july'));
        phrases.push(new Phrase('Fifth amendment'));
        phrases.push(new Phrase('Know your meme'));
        phrases.push(new Phrase('You have been gnomed'));
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
        // Convert nodeList to array and add class hidden to itl
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
        const phraseUL = document.querySelector('#phrase ul');

        if(gameWon) {
            overlay.className = 'win';
            overlay.style.display = 'block';
            header.textContent = "Congratulations, you've won the game!"; 

            // Reset game if won
            this.resetGame();
        } else {
            overlay.className = 'lose';
            overlay.style.display = 'block';
            header.textContent = 'Game over! You ran out of lives, try again and give it your best shot!';

            // Reset game if lost
            this.resetGame(); 
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - the clicked button element
     */
    handleInteraction(button) {
        let btnLetter = button.textContent;

        // If letter is in phrase, show it to the user
        // disable the onscreen letter button
        // mark as chosen or wrong
        // End game or remove life
        if(this.activePhrase.checkLetter(btnLetter)) {
            // Log to console if letter is in the phrase
            //console.log(`Letter ${btnLetter} is within the phrase`);
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
            // Log to console if letter is not in the phrase
            //console.log(`Letter ${btnLetter} is not within the phrase`);
        }
    }
    resetGame() {
        const phraseUL = document.querySelector('#phrase ul');
        // Remove all LI elements from the phrase UL
        while(phraseUL.hasChildNodes()) {
            phraseUL.removeChild(phraseUL.lastChild);
        }
        // Get all buttons, convert nodelist to array and use foreach to access classList
        // reset class to 'key'
        const btnLetters = Array.from(document.querySelectorAll('#qwerty button'));
        btnLetters.forEach(function(button) {
            button.disabled = false;
            button.classList.remove('chosen');
            button.classList.remove('wrong');
            button.classList.add('key');
        })

        // Reset lives
        this.missed = 0;
        const scoreboard = Array.from(document.querySelectorAll('.hidden'));
        scoreboard.forEach(function(heart) {
            heart.className = 'tries';
        })
    }
}

