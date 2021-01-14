import {
  createElement
} from "./utils";

 const createFilmListTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      
    </section>
  </section>`;
};

export default class FilmListTemplate {
  constructor() {
    this._element = null;
  }

  getFilmList() {
    return createFilmListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getFilmList());
    }
    return this._element;
  }

  removeElement() {
    this._element = null
  }
};
