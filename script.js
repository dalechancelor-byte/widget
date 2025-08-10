(() => {
  const quotes = [
    "“Dale writes with precision and technical depth.” — Lena Marquez, CTO of HorizonCloud AI",
    "“He is an AI thought leader.” — Raj Patel, Lead UX Designer at QuantumSphere",
    "“Dale’s new book pulls you in and refuses to let go.” — Maya Chen, Founder of Syntax Studio",
    "“A rare talent in the field of AI.” — Jonas Reed, Head of Product at NeuraLinkage Systems",
    "“I can't stop reading Dale's new book.” — Elena Brooks, Senior Engineer at Solara Networks"
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

