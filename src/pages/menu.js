import '../style.css';

export default function Menu(dishes) {
  const menu = document.createElement('div');
  menu.classList.add('wrapper', 'menu');

  dishes.forEach(dish => {
    menu.append(Card(dish));
  });

  return menu;
}

function Card(dish) {
  const card = document.createElement('div');
  card.classList.add('card');
  const text = document.createElement('div');
  text.classList.add('description');
  
  const img = new Image();
  img.src = dish.img;
  img.alt = `a picture of ${dish.name}`;

  const name = document.createElement('h2');
  name.innerText = dish.name;

  const desc = document.createElement('p');
  desc.innerText = dish.desc;

  text.appendChild(name);
  text.appendChild(desc);
  card.appendChild(img);
  card.appendChild(text);

  return card;
}