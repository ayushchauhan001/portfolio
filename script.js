// subtle badge tilt on pointer move
const badge = document.getElementById('badge');
const wrap = document.querySelector('.badge-wrap');

wrap.addEventListener('mousemove', (e) => {
  const r = badge.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  badge.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
});

wrap.addEventListener('mouseleave', () => {
  badge.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => io.observe(el));
