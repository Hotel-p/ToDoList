import './styles/style.css';
import './styles/reset.css';

import navbar from './modules/navbar.js';
import sidebar from './modules/sidebar.js';
import content from './modules/content.js';

const hero = document.createElement("div");
hero.classList.add("hero");

const mid = document.createElement("div");
mid.classList.add("mid");
mid.append(sidebar,content);

const footer = document.createElement("div");
footer.classList.add("footer");
footer.innerText = "Footer Here";

hero.append(navbar, mid, footer);

document.body.append(hero);