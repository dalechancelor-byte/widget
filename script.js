const quotes = [
  "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“Simplicity is the soul of efficiency.” – Austin Freeman"
];
const elQuote = document.getElementById('quote');
const btn     = document.getElementById('new-quote');
function showRandom() {
  const q = quotes[Math.floor(Math.random()*quotes.length)];
  elQuote.textContent = q;
}
btn.addEventListener('click', showRandom);
window.addEventListener('load', showRandom);


Add script.js
