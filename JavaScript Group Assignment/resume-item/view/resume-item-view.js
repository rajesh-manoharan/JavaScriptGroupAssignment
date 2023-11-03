import { resumeItem } from "../model/resume-item.js";

class JobItemView {
    constructor(resumeItem) {
        this.resumeItem = resumeItem;
    }

    process(key, value) {
        if (value !== null && typeof (value) !== "object"){
            const element = document.createElement("p");
            element.innerHTML = `<b> ${key} </b>: ${value}`;
            console.log(element);
        }
    }

    traverse(o, process) {
        console.log("o",o);
        for (var i in o) {
            process.apply(this, [i, o[i]]);
            if (o[i] !== null && typeof (o[i]) == "object") {
                //going one step down in the object tree!!
                this.traverse(o[i], process);
            }
    
        }
    }

    getValue = (key, user) => {
        console.log("key", key);
        console.log("user", user);
        const { [key]: returnValue } = user;
        console.log("Return", returnValue);
        return returnValue;
    }

    buildResume() {
        console.log("In here");
        const element = this.traverse(this.resumeItem.internship, process);
        // console.log(element);
    }
}

export {JobItemView};