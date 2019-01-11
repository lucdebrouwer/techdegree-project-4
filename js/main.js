
//const phrase = new Phrase();
//console.log(`Phrase - phrase: ${phrase.phrase}`);
const game = new Game();
//game.createPhase();

game.phrases = game.createPhrase();
game.getRandomPhrase().addPhraseToDisplay();
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

