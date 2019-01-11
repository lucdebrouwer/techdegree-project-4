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
}

