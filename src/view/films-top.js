import {createFilmCardTemplate} from "./film-card";
import Abstract from "./abstract";

const createFilmTop = (title, FILMS) => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">${title}</h2>
    <div class="films-list__container"> ${createFilmCardTemplate(FILMS)}
    </div>
  </section>`;
};

export default class FilmCardTopComponent extends Abstract {
  constructor(title, films) {
    super();
    this._title = title;
    this._films = films;
  }

  getTemplate() {
    return createFilmTop(this._title, this._films);
  }
}
