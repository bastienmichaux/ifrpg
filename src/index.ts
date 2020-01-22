const niy = () => console.warn('niy');
const app = document.getElementById('app');
const frg = new DocumentFragment();
const newGameBtn = document.createElement('button');
newGameBtn.textContent = 'new game';
newGameBtn.addEventListener('mouseup', niy);
const continueGameBtn = document.createElement('button');
continueGameBtn.textContent = 'continue game';
continueGameBtn.addEventListener('mouseup', niy);
const title = document.createElement('p');
title.textContent = 'ifprg'
frg.appendChild(title);
frg.appendChild(newGameBtn);
frg.appendChild(continueGameBtn);
app.appendChild(frg);
