import { createElement, renderElement, RenderPosition } from "./utils";
import FilmSingleTemplate from "./film-single";
const createFilmTemplate = ({title, rating, year, duration, genre, img, description, comments, classEmpty}) => {
  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${year}</span>
    <span class="film-card__duration">${duration}</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src="./images/posters/${img}" alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <a class="film-card__comments">${comments}</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${classEmpty}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${classEmpty}" type="button">Mark as watched</button>
    <button class="film-card__controls-item button film-card__controls-item--favorite ${classEmpty}" type="button">Mark as favorite</button>
  </div>
</article>`;
};

// const deCard = detailsCard.map((detail) => {
//   return createFilmTemplate(detail);
// }).join(``);

 export const createFilmCardTemplate = (FILMS) => {
  return FILMS.map(createFilmTemplate).join(``);
};

export default class FilmCardComponent {
  constructor(films) {
    this._element = null;
    this._films = [];
    films.forEach(film => {
      this._films.push(new FilmSingleTemplate(film))
    });
  }

  // getFilmCard() {
  //   return this._films.map(film => film.getElement());
  // }

  getElement() {
    // if (!this._element) {
    //   this._element = createElement(`<div></div>`);
    //   console.log(this._element);
    //   this._films.forEach(film => {
    //     renderElement(this._element, film.getElement(), RenderPosition.BEFOREEND)
    //   })
    // }
    console.log(this._films.map(film => film.getElement()));
    return this._films.map(film => film.getElement()).join(``);
  }

  removeElement() {
    this._element = null
  }
};
