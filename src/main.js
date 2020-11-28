import { createUserTemplate } from "./view/user.js";
import { createMenuTemplate } from "./view/menu.js";
import { createSortTemplate } from "./view/sort.js";
import { createFilmListTemplate } from "./view/film-list.js";
import { createFilmCardTemplate } from "./view/film-card.js";
import { createMoreButton } from "./view/more-button.js";
import { createFilmTop } from "./view/film-top.js";
import { createTotalFilmsTemplate } from "./view/total-films.js";

const siteHeaderElement = document.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

const FILMS = 5;
const LIMIT = 2;
const TITLE = [`Top rated`, `Most commented`];

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, createUserTemplate(), `afterend`);
render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createSortTemplate(), `beforeend`);
render(siteMainElement, createFilmListTemplate(), `beforeend`);

const filmListContainer = document.querySelector(".films-list__container");
const siteFooterElement = document.querySelector(`.footer__statistics`);

for (let i = 0; i < FILMS; i++) {
    render(filmListContainer, createFilmCardTemplate(), "beforeend");
};

render(filmListContainer, createMoreButton(), "afterend");

const filmsElement = document.querySelector(".films");

for (let j = 0; j < LIMIT; j++) {
    render(filmsElement, createFilmTop(LIMIT, TITLE[j]), "beforeend");
}

render(siteFooterElement, createTotalFilmsTemplate(), "beforeend");
