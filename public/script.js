const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "What you do speaks so loudly that I cannot hear what you say.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "Be yourself; everyone else is already taken."
];
const newquote = document.getElementById('quote')
const quotebtn = document.getElementById('new-quote')

function generate(){
    const randomi = Math.floor(Math.random()*quotes.length);
    newquote.textContent = quotes[randomi]
}
quotebtn.addEventListener("click",generate)
