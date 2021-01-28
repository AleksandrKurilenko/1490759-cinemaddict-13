import Abstract from './abstract';

const createFilmTop = () => {
  return `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2><div class="films-list__container"></div></section>`;
};

export default class FilmCardTopComponent extends Abstract {
  getTemplate() {
    return createFilmTop();
  }
}
