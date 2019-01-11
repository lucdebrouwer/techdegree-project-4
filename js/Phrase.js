class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const text = this.phrase;
        for(const c of text) {
            console.log(c);
        }
    }
}