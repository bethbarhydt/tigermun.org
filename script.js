// TigerMUN 2026 site interactions
(function(){
  // Mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Countdown
  const target = new Date('March 21, 2026 09:00:00 GMT-0400'); // adjust time zone if needed
  const cd = document.getElementById('countdown');
  function tick(){
    const now = new Date();
    const diff = target - now;
    if (diff <= 0){
      cd.textContent = 'Conference in progress';
      return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    cd.textContent = `${d} days ${h} hours ${m} minutes`;
    requestAnimationFrame(()=>setTimeout(tick,60000));
  }
  if (cd) tick();

  // Replace registration link with your form URL here
  const REG_FORM_URL = '#'; // e.g., 'https://forms.gle/your-google-form-id'
  const regLink = document.getElementById('registerLink');
  if (regLink && REG_FORM_URL && REG_FORM_URL !== '#'){
    regLink.href = REG_FORM_URL;
  }
})();