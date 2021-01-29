import {render, remove, replace} from '../utils.js';
import UserTemplate from '../view/user';
import {ModelMethod} from '../data';

export default class UserPresenter {
  constructor(userModel) {
    this._userModel = userModel;

    this._onUserRaitingChange = this._onUserRaitingChange.bind(this);

    this._userModel.addObserver(ModelMethod.UPDATE_USER_RAITING, this._onUserRaitingChange);
  }

  init(container = this._container) {
    this._container = container;
    const prevUserView = this._userView;

    this._userView = new UserTemplate(this._userModel.getRaiting());

    if (!prevUserView) {
      render(this._container, this._userView);
      return;
    }

    replace(this._userView, prevUserView);
    remove(prevUserView);
  }

  _getWatchedFilmsNumber(films) {
    return films.reduce((acc, currentFilm) => acc + currentFilm.isInHistory, 0);
  }

  _onUserRaitingChange() {
    this.init();
  }
}

// export const replace = (newElement, oldElement) => {
//   if (newElement instanceof Abstract) {
//     newElement = newElement.getElement();
//   }
//   if (oldElement instanceof Abstract) {
//     oldElement = oldElement.getElement();
//   }

//   const parentElement = oldElement.parentElement;

//   if (parentElement === null || newElement === null || oldElement === null) {
//     throw new Error(`One of elements doesn't exist in case of replacement`);
//   }

//   parentElement.replaceChild(newElement, oldElement);
// };

// export const remove = (element) => {
//   if (element === null) {
//     return;
//   }

//   if (!(element instanceof Abstract)) {
//     throw new Error(`Can remove view components only`);
//   }
//   element.getElement().remove();
//   element.removeElement();
// };
