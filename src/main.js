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
  render,
  RenderPosition
} from "./view/utils.js";
import PopupTemplate from "./view/popup.js";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const FILMS = getFilmsData();

const TITLE = [`Top rated`, `Most commented`];

render(siteHeaderElement, new UserTemplate(), RenderPosition.BEFOREEND);
render(siteMainElement, new MenuTemplate(), RenderPosition.BEFOREEND);
render(siteMainElement, new SortMenu(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmListTemplate(), RenderPosition.BEFOREEND);

const filmListContainer = document.querySelector(`.films-list`);
const siteFooterElement = document.querySelector(`.footer__statistics`);

render(filmListContainer, new FilmCardComponent(FILMS), RenderPosition.BEFOREEND);

render(filmListContainer, new MoreButtonTemplate(), RenderPosition.BEFOREEND);

const filmsElement = document.querySelector(`.films`);

for (let j = 0; j < TITLE.length; j++) {
  render(filmsElement, new FilmCardTopComponent(TITLE[j], FILMS.slice(0, 2)), RenderPosition.BEFOREEND);
}

render(siteFooterElement, new TotalFilmsTemplate(), RenderPosition.BEFOREEND);

const siteFooter = document.querySelector(`.footer`);
const bodyElement = document.querySelector(`body`);
// const sitePopupElement = document.querySelector(`.film-details`);
const popup = new PopupTemplate();

const listenerCard = () => {
  const as = Array.from(document.querySelectorAll(`.film-card__title, .film-card__poster, .film-card__description`));

  for (const a of as) {
    a.addEventListener(`click`, () => {
      siteFooter.appendChild(popup.getElement());
      bodyElement.classList.add(`hide-overflow`);
      document.addEventListener(`keydown`, onEsc);
    });
  }
};

listenerCard();

const onEsc = (evt) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    evt.preventDefault();
    removeCard();
    document.removeEventListener(`keydown`, onEsc);
  }
};

const removeCard = () => {
  siteFooter.removeChild(popup.getElement());
  bodyElement.classList.remove(`hide-overflow`);
};


popup.setEditClickHandler(() => {
  removeCard();
});


