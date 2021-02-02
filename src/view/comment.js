import Abstract from './abstract';
import dayjs from "dayjs";
import he from "he";
import {DigitalValues} from '../data';

const createCommentTemplate = (comment) => {
  const {
    text,
    author,
    date: commentDate,
    emotion
  } = comment;

  const getFormattedTime = (date) => {

    const difference = (+new Date() - +new Date(date)) / DigitalValues.ESCSIXTY_THOUSANDAPE;

    const hoursDiff = difference / DigitalValues.SIXTY;

    const daysDiff = hoursDiff / DigitalValues.TWENTY_FOUR;

    const monthDiff = daysDiff / DigitalValues.THIRTY;

    if (difference < DigitalValues.ONE) {
      return `now`;

    } else if (difference >= DigitalValues.ONE && difference < DigitalValues.FIVE) {
      return `a few minutes ago`;

    } else if (difference >= DigitalValues.FIVE && difference < DigitalValues.SIXTY) {
      return `${Math.floor(difference)} minutes ago`;

    } else if (difference > DigitalValues.SIXTY && difference < DigitalValues.SIXTY_ONE) {
      return `1 hour ago`;

    } else if (difference >= DigitalValues.SIXTY_ONE && hoursDiff < DigitalValues.TWENTY_FOUR) {
      return `${Math.floor(hoursDiff)} hours ago`;

    } else if (hoursDiff > DigitalValues.TWENTY_FOUR && hoursDiff < DigitalValues.FORTY_EIGHT) {
      return `1 day ago`;

    } else if (hoursDiff >= DigitalValues.FORTY_EIGHT && daysDiff < DigitalValues.THIRTY) {
      return `${Math.floor(daysDiff)} days ago`;

    } else if (daysDiff >= DigitalValues.THIRTY && daysDiff < DigitalValues.SIXTY) {
      return `1 month ago`;

    } else if (daysDiff >= DigitalValues.SIXTY && monthDiff < DigitalValues.TWELVE) {
      return `${Math.floor(monthDiff)} month ago`;

    } else if (monthDiff >= DigitalValues.TWELVE && monthDiff < DigitalValues.TWENTY_FOUR) {
      return `1 year ago`;

    } else if (monthDiff > DigitalValues.TWENTY_FOUR) {
      return `${Math.floor(monthDiff / DigitalValues.TWELVE)} years ago`;

    } else {
      return dayjs(commentDate).format(`YYYY/MM/DD HH:mm`);
    }
  };

  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
  </span>
  <div>
<p class="film-details__comment-text">${he.encode(text)}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${he.encode(author)}</span>
      <span class="film-details__comment-day">${getFormattedTime(commentDate)}</span>
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
