import { convertToJson } from "./utils.mjs";
export default class Alert {
  constructor() {
    this.path = `../json/alerts.json`;
    this.mainElement = document.querySelector("main");
    this.init();
  }

  async init() {
    this.alerts = await this.getData();
    this.mainElement.insertAdjacentHTML(`beforebegin`, this.alertTemplate());
    this.renderAlertList();
  }

  // get alerts.json data
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  // alert template
  alertTemplate() {
    return `<section class="alert-list">
    </section>`;
  }

  renderAlertList() {
    const alertList = this.alerts.map(
      (alert) =>
        `<p class="alert" style="background-color:${alert.background};color:${alert.color};">${alert.message}</p>`
    );
    const element = document.querySelector(`.alert-list`);
    // send alerts after 2 seconds
    setTimeout(() => {
      element.innerHTML = alertList.join(``);
      this.removeAlertList();
    }, 2000);
  }

  removeAlertList() {
    const parent = document.querySelector(`.alert-list`);
    const elements = document.querySelectorAll(`.alert`);
    elements.forEach((item) => {
      // add class for animation at the last second
      setTimeout(() => {
        item.setAttribute(`class`, `alert alert-out`);
      }, 9000);
      setTimeout(() => {
        parent.removeChild(item);
      }, 10000);
    });
  }
}