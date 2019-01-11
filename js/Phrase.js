class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const text = this.phrase;
        const phraseDiv = document.querySelector('#phrase');
        const phraseList = document.createElement('ul');

        // Uses an ES6 method to iterate over an array to find each character of the phrase
        // Returns a list of characters which will be appended to the phrase div
        for(const character of text) {
            const phraseLI = document.createElement('li');
            phraseLI.classList.add('letter');
            if(character === ' ') {
                phraseLI.classList.remove('letter');
                phraseLI.classList.add('space');
            }
            phraseLI.textContent = character;
            phraseList.appendChild(phraseLI);
        }

        phraseDiv.appendChild(phraseList);
        return phraseDiv;
    }
    
}