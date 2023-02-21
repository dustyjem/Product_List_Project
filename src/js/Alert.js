import { convertToJson } from "./utils.mjs";

class Alert {
  constructor() {
    this.path = `../json/alerts.json`;
    this.mainElement = document.querySelector("main");
    this.alerts = [];
    this.element = null;
    this.init();
  }

  async init() {
    await this.getData();
    this.insertAlertList();
    setTimeout(() => {
      this.renderAlertList();
    }, 2000);
  }

  async getData() {
    try {
      const response = await fetch(this.path);
      this.alerts = await response.json();
    } catch (error) {
      console.error(`Failed to fetch alerts: ${error}`);
    }
  }

  insertAlertList() {
    const section = document.createElement("section");
    section.classList.add("alert-list");
    this.mainElement.insertAdjacentElement(`beforebegin`, section);
    this.element = section;
  }

  renderAlertList() {
    const alertList = this.alerts.map((alert) => {
      const p = document.createElement("p");
      p.classList.add("alert");
      p.style.backgroundColor = alert.background;
      p.style.color = alert.color;
      p.textContent = alert.message;
      return p;
    });

    alertList.forEach((p) => {
      this.element.appendChild(p);
      setTimeout(() => {
        p.classList.add("alert-out");
      }, 9000);
      setTimeout(() => {
        this.element.removeChild(p);
      }, 10000);
    });
  }
}

export default Alert;
