import { createElement, renderElement, RenderPosition } from "./utils";
import FilmSingleTemplate from "./film-single";

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

  getElement() {
    if (!this._element) {
      this._element = createElement(`<div class="films-list__container"></div>`);
      console.log(this._element);
      this._films.forEach(film => {
        renderElement(this._element, film.getElement(), RenderPosition.BEFOREEND)
      })
    }
    
    return this._element;
  }

  removeElement() {
    this._element = null
  }
};
