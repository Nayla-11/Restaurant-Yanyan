/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#nav-toggle'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// Function to handle keyboard events on the "About Us" menu item

const skipLink = document.getElementById('skip-to-main-content');

skipLink.addEventListener('mouseenter', () => {
  skipLink.classList.add('show');
});

skipLink.addEventListener('mouseleave', () => {
  skipLink.classList.remove('show');
});

document.querySelectorAll('a, button, input').forEach((e) => {
  if (e.offsetWidth < 44 || e.offsetHeight < 44) {
    console.log(e);
  }
});
