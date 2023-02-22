import { convertToJson } from "./utils.mjs";

export default class Alert {
  constructor() {
    this.path = `../json/alerts.json`;
    this.mainElement = document.querySelector("main");
    this.alerts = null;
    this.alertList = null;
    this.renderedAlerts = new Set();
    this.alertTimeoutId = null;
    this.init();
  }

  async init() {
    this.alerts = await this.fetchData();
    this.alertList = this.createAlertList();
    this.mainElement.insertAdjacentElement("afterbegin", this.alertList);
    this.startAlertTimeout();
  }

  async fetchData() {
    const response = await fetch(this.path);
    const data = await convertToJson(response);
    return data;
  }

  createAlertList() {
    const alertList = document.createElement("section");
    alertList.classList.add("alert-list");
    return alertList;
  }

  startAlertTimeout() {
    this.alertTimeoutId = setTimeout(() => {
      this.removeAlertList();
    }, 2000);
  }

  renderAlertList() {
    for (const alert of this.alerts) {
      if (!this.renderedAlerts.has(alert)) {
        const alertElement = this.createAlertElement(alert);
        this.alertList.appendChild(alertElement);
        this.renderedAlerts.add(alert);
      }
    }
  }

  createAlertElement(alert) {
    const alertElement = document.createElement("p");
    alertElement.classList.add("alert");
    alertElement.style.backgroundColor = alert.background;
    alertElement.style.color = alert.color;
    alertElement.textContent = alert.message;
    return alertElement;
  }

  removeAlertList() {
    for (const alertElement of this.alertList.children) {
      alertElement.classList.add("alert-out");
    }

    setTimeout(() => {
      this.alertList.innerHTML = "";
      this.renderedAlerts.clear();
      this.alertTimeoutId = null;
      this.init();
    }, 10000);
  }
}