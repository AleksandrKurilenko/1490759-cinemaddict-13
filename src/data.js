
export const ModelMethod = {
  UPDATE_FILM: `updateFilm`,
  UPDATE_FILM_WITH_RERENDER: `updateFilmWithRerender`,
  UPDATE_FILTER: `updateFilter`,
  ADD_COMMENT: `addComment`,
  DELETE_COMMENT: `deleteComment`,
  SET_FILMS: `setFilms`,
  UPDATE_USER_RAITING: `updateRaiting`
};

export const UserRaiting = {
  NOVICE: `novice`,
  FAN: `fan`,
  MOVIE_BUFF: `movie buff`
};

export const SiteState = {
  TO_MOVIES: `TO_MOVIES`,
  TO_STATS: `TO_STATS`
};

export const StatsPeriod = {
  ALL: `all-time`,
  TODAY: `day`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};

// const getDescriptionData = () => {
//   const descriptionList = [
//     `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
//     `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
//     `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
//     `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
//     `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`
//   ];
//   const randomDescription = getRandomInteger(0, descriptionList.length - 1);

//   return descriptionList[randomDescription];
// };


export const EMOTIONS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`
];

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RAITING: `raiting`,
  COMMENTS: `comments`
};

export const Category = {
  All: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVOURITES: `favourites`
};


export const FilmCardContainer = {
  RAITED: `raited`,
  COMMENTED: `commented`
};

export const RenderPosition = {
  BEFOREEND: `beforeend`,
  AFTERBEGIN: `afterbegin`
};

export const UserAction = {
  DELETE_COMMENT: `DELETE_COMMENT`,
  ADD_COMMENT: `ADD_COMMENT`,
  UPDATE_FILM_CATEGORY: `UPDATE_FILM_CATEGORY`,
  REPLACE_FILM: `REPLACE_FILM`,
  UPDATE_FILM_CATEGORY_WITH_RERENDER: `UPDATE_FILM_CATEGORY_WITH_RERENDER`,
  UPDATE_FILTER: `UPDATE_FILTER`
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};

// const POSTERS = [
//   `made-for-each-other.png`,
//   `popeye-meets-sinbad.png`,
//   `sagebrush-trail.jpg`,
//   `santa-claus-conquers-the-martians.jpg`,
//   `the-dance-of-life.jpg`,
//   `the-great-flamarion.jpg`,
//   `the-man-with-the-golden-arm.jpg`,
// ];
