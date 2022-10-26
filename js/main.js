function init() {

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#nav');
  const clicktoclose = document.querySelector('.click-to-close');
  const btnAccident = document.querySelector('.btn-accident')
  const counter = document.querySelector('.counter')

  function toggleNav(e) {
    e.preventDefault();
    navToggle.classList.toggle('open');
    nav.classList.toggle('open');
    clicktoclose.classList.toggle('open');
  }

  navToggle && navToggle.addEventListener('click', toggleNav);
  clicktoclose && clicktoclose.addEventListener('click', toggleNav);

  function accident() {
    counter.classList.add('accident');
    counter.setAttribute('aria-label', 'It has been zero days since last accident.');
  }

  btnAccident && btnAccident.addEventListener('click', accident);

}

document.addEventListener('DOMContentLoaded', init);