import Abstract from "./abstract";

const createTotalFilmsTemplate = () => {
  return `<p>130 291 movies inside</p>`;
};

export default class TotalFilmsTemplate extends Abstract {

  getTemplate() {
    return createTotalFilmsTemplate();
  }

}
