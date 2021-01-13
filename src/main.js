import UserTemplate from "./view/user.js";

import MenuTemplate from "./view/menu.js";

import SortMenu from "./view/sort.js";

import FilmListTemplate from "./view/film-list.js";

import FilmCardComponent from "./view/film-card.js";

import MoreButtonTemplate from "./view/more-button.js";

import FilmCardTopComponent from "./view/films-top.js";

import TotalFilmsTemplate from "./view/total-films.js";

import getFilmsData from "./view/data.js";

import {
  renderElement,
  RenderPosition
} from "./view/utils.js";

const siteHeaderElement = document.querySelector(`.header__logo`);
const siteMainElement = document.querySelector(`.main`);

const FILMS = getFilmsData();
// const CARD_NUMBER = 1;
const TITLE = [`Top rated`, `Most commented`];

// console.log(FILMS);
renderElement(siteHeaderElement, new UserTemplate().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new MenuTemplate().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new SortMenu().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new FilmListTemplate().getElement(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector(`.films-list__container`);
const siteFooterElement = document.querySelector(`.footer__statistics`);

renderElement(filmListContainer, new FilmCardComponent(FILMS).getElement(), RenderPosition.BEFOREEND);

renderElement(filmListContainer, new MoreButtonTemplate().getElement(), RenderPosition.BEFOREEND);

const filmsElement = document.querySelector(`.films`);

for (let j = 0; j < TITLE.length; j++) {
  renderElement(filmsElement, new FilmCardTopComponent(TITLE[j], FILMS.slice(0, 2)).getElement(), RenderPosition.BEFOREEND);
}

renderElement(siteFooterElement, new TotalFilmsTemplate().getElement(), RenderPosition.BEFOREEND);
