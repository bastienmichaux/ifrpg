class StartView {
  static render() {
    const niy = () => console.warn('niy');
    const app = document.getElementById('app');
    const frg = new DocumentFragment();
    const newGameBtn = document.createElement('button');
    newGameBtn.textContent = 'new game';
    newGameBtn.addEventListener('mouseup', niy);
    newGameBtn.style.display = 'block';
    const continueGameBtn = document.createElement('button');
    continueGameBtn.textContent = 'continue game';
    continueGameBtn.addEventListener('mouseup', niy);
    newGameBtn.style.display = 'block';
    const title = document.createElement('p');
    title.textContent = 'ifprg';
    frg.appendChild(title);
    frg.appendChild(newGameBtn);
    frg.appendChild(continueGameBtn);
    app.appendChild(frg);
  }
}

StartView.render();
