import {createUserTemplate} from "./view/user.js";
import {createMenuTemplate} from "./view/menu.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmListTemplate} from "./view/film-list.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createMoreButton} from "./view/more-button.js";
import {createFilmTop} from "./view/film-card.js";
import {createTotalFilmsTemplate} from "./view/total-films.js";
import getFilmsData from "./view/data.js";

const siteHeaderElement = document.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

const FILMS = getFilmsData();
const CARD_NUMBER = 1;
const TITLE = [`Top rated`, `Most commented`];

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// console.log(FILMS);
render(siteHeaderElement, createUserTemplate(), `afterend`);
render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmListTemplate(), `beforeend`);

const filmListContainer = document.querySelector(`.films-list__container`);
const siteFooterElement = document.querySelector(`.footer__statistics`);

render(filmListContainer, createFilmCardTemplate(FILMS), `beforeend`);

render(filmListContainer, createMoreButton(), `afterend`);

const filmsElement = document.querySelector(`.films`);

for (let j = 0; j < TITLE.length; j++) {
  render(filmsElement, createFilmTop(CARD_NUMBER, TITLE[j], FILMS.slice(1)), `beforeend`);
}

render(siteFooterElement, createTotalFilmsTemplate(), `beforeend`);
