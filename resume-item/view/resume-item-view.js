import { resumeItem } from "../model/resume-item.js";

class JobItemView {

    constructor(item) {
        this.item = item;
        this.object = document.getElementById(this.item);
    }
    buildResume(jsonObj) {
        for (let jsonLoop in jsonObj) {
            if (!!jsonObj[jsonLoop] && typeof (jsonObj[jsonLoop]) == "object") {
                const element = document.createElement("p");
                element.innerHTML = `        <u><b>${jsonLoop} </b></u>`;
                this.object.appendChild(element);
                this.buildResume(jsonObj[jsonLoop]);
            }
            else {
                if (jsonObj[jsonLoop] !== null) {
                    const element = document.createElement("p");
                    element.innerHTML = `        <b> ${jsonLoop} </b>: ${jsonObj[jsonLoop]}`;
                    this.object.appendChild(element);
                }
            }
        }
    }
}

export { JobItemView };