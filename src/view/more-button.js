import Abstract from "./abstract";

const createMoreButton = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class MoreButtonTemplate extends Abstract {

  getTemplate() {
    return createMoreButton();
  }
}
