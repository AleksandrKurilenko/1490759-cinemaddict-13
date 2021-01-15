import {createElement} from "./utils";
import {createFilmCardTemplate} from "./film-card";

const createFilmTop = (title, FILMS) => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">${title}</h2>
    <div class="films-list__container"> ${createFilmCardTemplate(FILMS)} 
    </div>
  </section>`;
};

export default class FilmCardTopComponent {
  constructor(title, films) {
    this._element = null;
    this._title = title;
    this._films = films;
  }

  getFilmCard() {
    return createFilmTop(this._title, this._films);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getFilmCard());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
