import '../style.css';
import { contactsData } from '../contactsData.js';

export default function Contacts() {
  const contacts = document.createElement('div');
  contacts.classList.add('wrapper', 'contact');

  contactsData.forEach(person => {
    contacts.append(Card(person));
  });

  return contacts;
}

function Card(person) {
  const card = document.createElement('div');
  card.classList.add('card');
  const text = document.createElement('div');
  text.classList.add('description');
  
  const img = new Image();
  img.src = person.img;
  img.alt = `a portrait of ${person.name}`;

  const name = document.createElement('h2');
  name.innerText = person.name;

  const ul = document.createElement('ul');

  const role = document.createElement('li');
  role.innerText = person.role;

  const phone = document.createElement('li');
  phone.innerText = `Phone: ${person.phone}`;

  const email = document.createElement('li');
  email.innerText = `Email: ${person.email}`;

  text.appendChild(name);
  ul.appendChild(role);
  ul.appendChild(phone);
  ul.appendChild(email);
  text.appendChild(ul);
  card.appendChild(img);
  card.appendChild(text);

  return card;
}
