(() => {
  const quotes = [
    "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
    "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
    "“Simplicity is the soul of efficiency.” – Austin Freeman"
  ];

  const elQuote = document.getElementById('quote');
  const btn     = document.getElementById('new-quote');

  // SR-friendly announcements
  elQuote.setAttribute('role', 'status');
  elQuote.setAttribute('aria-live', 'polite');

  let last = -1;
  const pickIndex = () => {
    let i;
    do { i = Math.floor(Math.random() * quotes.length); }
    while (quotes.length > 1 && i === last);
    return (last = i);
  };

  function showRandom() {
    const next = quotes[pickIndex()];

    // simple micro-interaction: fade out → swap text → fade in
    btn.disabled = true;
    const fadeOut = elQuote.animate(
      [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(4px)' }],
      { duration: 120, easing: 'ease-out' }
    );

    fadeOut.onfinish = () => {
      elQuote.textContent = next;
      const fadeIn = elQuote.animate(
        [{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 160, easing: 'ease-out' }
      );
      fadeIn.onfinish = () => { btn.disabled = false; };
    };
  }

  btn.addEventListener('click', showRandom);
  window.addEventListener('load', showRandom);

  // Space / Enter anywhere (but not inside inputs/buttons)
  window.addEventListener('keydown', (e) => {
    if (!e.repeat && (e.key === ' ' || e.key === 'Enter')) {
      const tag = (e.target && e.target.tagName) || '';
      if (!['INPUT','TEXTAREA','BUTTON','A','SELECT'].includes(tag)) {
        e.preventDefault();
        showRandom();
      }
    }
  });
})();

