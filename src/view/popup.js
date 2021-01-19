import Abstract from "./abstract";

const detailsTable = [{
  term: `Director`,
  cell: `Anthony Mann`
},
{
  term: `Writers`,
  cell: `Anne Wigton, Heinz Herald, Richard Weil`,
},
{
  term: `Actors`,
  cell: `Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
},
{
  term: `Release Date`,
  cell: `30 March 1945`,
},
{
  term: `Runtime`,
  cell: `1h 18m`,
},
{
  term: `Country`,
  cell: `USA`,
},
];


const detailsСheckbox = [{
  id: `watchlist`,
  name: `watchlist`,
  forLabel: `watchlist`,
  classLabel: `film-details__control-label--watchlist`,
  text: `Add to watchlist`
},
{
  id: `watched`,
  name: `watched`,
  forLabel: `watched`,
  classLabel: `film-details__control-label--watched`,
  text: `Already watched`
},
{
  id: `favorite`,
  name: `favorite`,
  forLabel: `watchlist`,
  classLabel: `film-details__control-label--favorite`,
  text: `Add to favorites`
}
];


const detailsEmoji = [{
  id: `emoji-smile`,
  value: `smile`,
  check: `checked`,
  forLabel: `emoji-smile`,
  img: `smile.png`
},
{
  id: `emoji-sleeping`,
  value: `sleeping`,
  check: ``,
  forLabel: `emoji-sleeping`,
  img: `sleeping.png`
},
{
  id: `emoji-puke`,
  value: `puke`,
  check: ``,
  forLabel: `emoji-puke`,
  img: `puke.png`
},
{
  id: `emoji-angry`,
  value: `angry`,
  check: ``,
  forLabel: `emoji-angry`,
  img: `angry.png`
}
];


const createPopupTable = ({
  term,
  cell
}) => {
  return `<tr class="film-details__row">
<td class="film-details__term">${term}</td>
<td class="film-details__cell">${cell}</td>
</tr>`;
};


const createPopupСheckbox = ({
  id,
  name,
  forLabel,
  classLabel,
  text
}) => {
  return `<input type="checkbox" class="film-details__control-input visually-hidden" id="${id}" name="${name}">
  <label for="${forLabel}" class="film-details__control-label ${classLabel}">${text}</label>`;
};


const createPopupEmoji = ({
  id,
  value,
  check,
  forLabel,
  img
}) => {
  return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="${id}" value="${value}" ${check}>
  <label class="film-details__emoji-label" for="${forLabel}">
    <img src="./images/emoji/${img}" width="30" height="30" alt="emoji">
  </label>`;
};


export const createPopTemplate = () => {
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">

          <p class="film-details__age">18+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">The Great Flamarion</h3>
              <p class="film-details__title-original">Original: The Great Flamarion</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">8.9</p>
            </div>
          </div>

          <table class="film-details__table">
          ${detailsTable.map((detail) => {
    return createPopupTable(detail);
  })}
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                <span class="film-details__genre">Drama</span>
                <span class="film-details__genre">Film-Noir</span>
                <span class="film-details__genre">Mystery</span></td>
            </tr>
          </table>

          <p class="film-details__film-description">
            The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion's other assistant. Flamarion falls in love with Connie, the movie's femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
          </p>
        </div>
      </div>

      <section class="film-details__controls">
      ${detailsСheckbox.map((detail) => {
    return createPopupСheckbox(detail);
  })}
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">0</span></h3>

        <ul class="film-details__comments-list"></ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
            <img src="images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
          </div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
          </label>

          <div class="film-details__emoji-list">
          ${detailsEmoji.map((detail) => {
    return createPopupEmoji(detail);
  })}
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

export default class PopupTemplate extends Abstract {
  constructor() {
    super();
    this._editClickHandler = this._editClickHandler.bind(this);
  }

  getTemplate() {
    return createPopTemplate(this._detailsSort);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._editClickHandler);
  }
}
