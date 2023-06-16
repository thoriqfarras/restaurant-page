import './style.css';

export default function navbar() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.appendChild(btn);
    ul.appendChild(li);
  }
  nav.appendChild(ul);

  const btns = nav.querySelectorAll('button');
  btns.forEach((btn, index) => {
    switch (index) {
      case 0:
        btn.innerText = 'Home';
        break;
      case 1:
        btn.innerText = 'Menu';
        break;
      case 2:
        btn.innerText = 'Contact';
        break;
      default:
        break;
    }
  });

  return nav;
}