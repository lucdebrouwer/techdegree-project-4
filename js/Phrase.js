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

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if(letter) {
            return true
        } else {
            return false;
        }
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {

        let letters = document.querySelectorAll('.letter');
        let result = [];
        for(let i = 0; i < letters.length; i+=1) {
            result.push(letters[i].textContent);

        }
        if(result.indexOf(letter)) {
            console.log('match');
        }
        //console.log(result);
        // for(const char of letters) {
        //     console.log(char, letter);
        //     if(letter === char) {

        //     }
        // }
        // return console.log(letters);
    }
    
}