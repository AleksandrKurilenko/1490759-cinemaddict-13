// import getFilmsData from "../view/data";
import FilmCardComponent from "../view/film-card";
import FilmCardTopComponent from "../view/films-top";
import MenuTemplate from "../view/menu";
import MoreButtonTemplate from "../view/more-button";
import SortMenu, {SortType} from "../view/sort";
import {render, RenderPosition} from "../view/utils";
import FilmListTemplate from "../view/film-list.js";
import TotalFilmsTemplate from "../view/total-films";

const FILMS_COUNT = 5;

// const FILMS = getFilmsData();
export default class Board {
  constructor(siteMainContainer, titles, films) {
    this._siteMainContainer = siteMainContainer;
    this._menuTemplate = new MenuTemplate();
    this._sortComponent = new SortMenu();
    this._filmListTemplate = new FilmListTemplate();
    this._moreButton = new MoreButtonTemplate();
    this._totalFilms = new TotalFilmsTemplate();
    this._titles = titles;
    this._films = films;
    this._renderedFilmCount = null;
    this._currentSortType = SortType.DEFAULT;
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }

  init(container = this._container) {
    this._container = container;
    this._siteMain = container;

    // this._renderUserTemplate();
    this._renderMenu();
    this._renderSort();
    this._renderfilmListTemplate();
    this._renderFilms();
    this._renderLoadMoreButton();
    this._renderFilmsTop();
    this._renderTotalFilms();
  }

  _renderUserTemplate() {
    this._siteHeaderElement = document.querySelector(`.header`);
    render(this._siteHeaderElement, this._userTemplate, RenderPosition.BEFOREEND);
  }

  _renderMenu() {
    this._siteMainElement = document.querySelector(`.main`);
    render(this._siteMainContainer, this._menuTemplate, RenderPosition.BEFOREEND);
  }

  _onSortTypeChange(type) {
    if (this._currentSortType === type) {
      return;
    }
    if (!this._sortButtons) {
      this._sortButtons = Array.from(this._sortComponent.getElement().querySelectorAll(`.sort__button`));
    }
    this._sortButtons.forEach((sortButton) => {
      if (sortButton.dataset.sortType === type) {
        sortButton.classList.add(`sort__button--active`);
        return;
      }
      sortButton.classList.remove(`sort__button--active`);
    });
    this._currentSortType = type;
  }

  _renderSort() {
    this._sortComponent = new SortMenu(this._currentSortType);
    render(this._siteMainContainer, this._sortComponent, RenderPosition.BEFOREEND);
    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
  }


  _renderfilmListTemplate() {
    render(this._siteMainContainer, this._filmListTemplate, RenderPosition.BEFOREEND);
  }

  _renderFilms() {
    this._filmsElement = this._siteMainContainer.querySelector(`.films`);
    this._filmListContainer = this._filmsElement.querySelector(`.films-list`);
    // const filmListContainer = this._filmsElement.querySelector(`.films-list__container`);
    render(this._filmListContainer, new FilmCardComponent(this._films), RenderPosition.BEFOREEND);
  }

  _renderLoadMoreButton() {
    // render(this._filmListContainer, this._moreButton, RenderPosition.BEFOREEND);
    if (this._films.length > FILMS_COUNT) {
      render(this._filmListContainer, this._moreButton, RenderPosition.BEFOREEND);

      this._moreButton.setClickHandler(() => {
        this._renderFilms();

        this._renderedFilmCount += FILMS_COUNT;

        if (this._renderedFilmCount >= this._films.length) {
          this._moreButton.getElement().remove();
          this._moreButton.removeElement();
        }
      });
    }
  }

  _renderFilmsTop() {
    for (let j = 0; j < this._titles.length; j++) {
      render(this._filmsElement, new FilmCardTopComponent(this._titles[j], this._films.slice(0, 2)), RenderPosition.BEFOREEND);
    }
  }

  _renderTotalFilms() {
    this._siteFooter = document.querySelector(`.footer`);
    render(this._siteFooter, this._totalFilms, RenderPosition.BEFOREEND);
  }

  // _renderBoard() {
  //   // Метод для инициализации (начала работы) модуля,
  //   // бОльшая часть текущей функции renderBoard в main.js
  // }
}
