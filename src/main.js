import UserTemplate from "./view/user.js";
import getFilmsData from "./view/data.js";
import {render, RenderPosition} from "./view/utils.js";
import PopupTemplate from "./view/popup.js";
import Board from "./presenter/movieList.js";

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const FILMS = getFilmsData();
const TITLE = [`Top rated`, `Most commented`];

render(siteHeaderElement, new UserTemplate(), RenderPosition.BEFOREEND);

const boardPresenter = new Board(siteMainElement, TITLE, FILMS);
boardPresenter.init();

const siteFooter = document.querySelector(`.footer`);
const bodyElement = document.querySelector(`body`);

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

// const buttonWatchList = document.querySelector(`.film-card__controls-item--add-to-watchlist`);

// const buttonWatched = document.querySelector(`.film-card__controls-item--mark-as-watched`);

// const buttonFavorite = document.querySelector(`.film-card__controls-item:last-of-type`);
