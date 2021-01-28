import Abstract from './abstract';

const createUserTemplate = (userRaiting) => {

  return `<section class="header__profile profile">
  ${userRaiting ? `<p class="profile__rating">${userRaiting}</p>` : ``}
  <img class="profile__avatar" src="./images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

export default class UserTemplate extends Abstract {
  constructor(userRaiting) {
    super();
    this._userRaiting = userRaiting;
  }

  getTemplate() {
    return createUserTemplate(this._userRaiting);
  }
}
