import Abstract from './abstract';
import dayjs from "dayjs";
import he from "he";
import relativeTime from "dayjs/plugin/relativeTime";

const createCommentTemplate = (comment) => {
  const {
    text,
    author,
    date,
    emotion
  } = comment;

  dayjs.extend(relativeTime);
  const formatDate = dayjs(date).format(`YYYY-MM-DD`);
  const dateFromNow = dayjs(`${formatDate}`).fromNow();

  return `<li class="film-details__comment">
<span class="film-details__comment-emoji">
  <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
</span>
<div>
<p class="film-details__comment-text">${he.encode(text)}</p>
  <p class="film-details__comment-info">
    <span class="film-details__comment-author">${he.encode(author)}</span>
    <span class="film-details__comment-day">${dateFromNow}}</span>
    <button class="film-details__comment-delete">Delete</button>
  </p>
</div>
</li>`;
};


export default class CommentTemplate extends Abstract {
  constructor(comment) {
    super();
    this._comment = comment;

    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
  }

  getTemplate() {
    return createCommentTemplate(this._comment);
  }

  _onDeleteButtonClick(evt) {
    evt.preventDefault();
    this._callback.deleteClick(evt);
  }

  setDeleteButtonClickHandler(cb) {
    this._callback.deleteClick = cb;
    this.getElement().querySelector(`.film-details__comment-delete`).addEventListener(`click`, this._onDeleteButtonClick);
  }
}
