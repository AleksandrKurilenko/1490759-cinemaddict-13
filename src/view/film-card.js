import {createElement, render, RenderPosition} from "./utils";
import FilmSingleTemplate, {createFilmTemplate} from "./film-single";
import Abstract from "./abstract";

export const createFilmCardTemplate = (FILMS) => {
  return FILMS.map(createFilmTemplate).join(``);
};

export default class FilmCardComponent extends Abstract {
  constructor(films) {
    super();
    this._element = null;
    this._films = [];
    films.forEach((film) => {
      this._films.push(new FilmSingleTemplate(film));
    });
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(`<div class="films-list__container"></div>`);
      this._films.forEach((film) => {
        render(this._element, film.getElement(), RenderPosition.BEFOREEND);
      });
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
