import Observer from './observer-model';
import {ModelMethod, UserRating} from "../data";

export default class UserModel extends Observer {
  constructor(filmsModel) {
    super();
    this._filmsModel = filmsModel;
    this._userRating = UserRating.NOVICE;
    this._observers = {
      updateRaiting: []
    };

    this.updateRaiting = this.updateRaiting.bind(this);

    this._filmsModel.addObserver(ModelMethod.SET_FILMS, this.updateRaiting);
    this._filmsModel.addObserver(ModelMethod.UPDATE_FILM, this.updateRaiting);
    this._filmsModel.addObserver(ModelMethod.UPDATE_FILM_WITH_RERENDER, this.updateRaiting);
  }

  getRating() {
    return this._userRating;
  }

  updateRaiting() {
    const watchedFilms = this._getWatchedFilmsNumber(this._filmsModel.getFilms());
    const userRaiting = this._getUserRaiting(watchedFilms);

    if (this._userRating === userRaiting) {
      return;
    }
    this._userRating = userRaiting;

    this.notify(ModelMethod.UPDATE_USER_RAITING, this._userRating);
  }

  _getWatchedFilmsNumber(films) {
    return films.reduce((acc, currentFilm) => acc + currentFilm.isInHistory, 0);
  }

  _getUserRaiting(watchedFilms) {
    if (watchedFilms > 20) {
      return UserRating.MOVIE_BUFF;
    } else if (watchedFilms > 10 && watchedFilms <= 20) {
      return UserRating.FAN;
    } else if (watchedFilms > 0 && watchedFilms <= 10) {
      return UserRating.NOVICE;
    }
    return null;
  }
}
