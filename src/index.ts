const niy = () => console.warn('niy');

class StartView {
  static newGame(): void {
    niy();
  }
  static continueGame(): void {
    niy();
  }
  static render(): void {
    const savedGameExists = false; // #%
    // new game button
    const newGameBtn = document.createElement('button');
    newGameBtn.textContent = 'new game';
    newGameBtn.addEventListener('mouseup', StartView.newGame);
    newGameBtn.style.display = 'block';
    // continue game button
    const continueGameBtn = document.createElement('button');
    continueGameBtn.textContent = 'continue game';
    continueGameBtn.addEventListener('mouseup', StartView.continueGame);
    continueGameBtn.disabled = savedGameExists;
    newGameBtn.style.display = 'block';
    // start screen title
    const title = document.createElement('p');
    title.textContent = 'ifprg';
    // assembly
    const frg = new DocumentFragment();
    frg.appendChild(title);
    frg.appendChild(newGameBtn);
    frg.appendChild(continueGameBtn);
    document.getElementById('app').appendChild(frg);
  }
}

StartView.render();
