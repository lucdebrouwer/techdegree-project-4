
//const phrase = new Phrase();
//console.log(`Phrase - phrase: ${phrase.phrase}`);
let game; 
const btnStart = document.querySelector("#btn__reset");
btnStart.addEventListener('click', function() {
    game = new Game();
    game.phrases = game.createPhrase();
    game.startGame();
});










































//game.createPhase();

// game.phrases = game.createPhrase();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
//game.getRandomPhrase().addPhraseToDisplay();
// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase ${phrase.phrase}`);
// })
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());



// let text = game.getRandomPhrase();
// for(const c of text.phrase) {
//     console.log(c);
// }

