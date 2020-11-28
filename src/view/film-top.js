import {createFilmCardTemplate} from "./film-card";

const createCardsForTop = (count) => {
  let result = ``;
  for (let x = 0; x < count; x++) {
    result += createFilmCardTemplate();
  }
  return result;
};

export const createFilmTop = (count, title) => {
  return `<section class="films-list films-list--extra">
    <h2 class="films-list__title">${title}</h2>
    <div class="films-list__container"> ${createCardsForTop(count)} 
    </div>
  </section>`;
};
