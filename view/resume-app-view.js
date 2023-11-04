import { JobCategory } from '../job-category/model/job-category.js';
import { JobCategoryUtils } from '../job-category/model/job-category-utility.js'
import { JobItemView } from "../resume-item/view/resume-item-view.js";

class ResumeAppView {
    constructor() {
        this.prevBtn = document.getElementById("prevBtn");
        this.searchBox = document.getElementById("searchbox");
        this.nextBtn = document.getElementById("nextBtn");
        this.resetBtn = document.getElementById("resetBtn");
        this.jobItemView = new JobItemView();
        this.allJobItems = null;
    }

    displaySearchResume() {
        this.searchBox.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const inputJobCategory = new JobCategory(this.searchBox.value);
                this.allJobItems = JobCategoryUtils.getAllJobItems(inputJobCategory);

                if (this.allJobItems.length === 0) {
                    alert('No application');
                } else {
                    this.searchBox.disabled = true;
                    this.jobItemView.displayResumeDetails(this.allJobItems);
                    this.jobItemView.displayPrevButton(this.prevBtn, this.allJobItems.length);
                    this.jobItemView.displayNextButton(this.nextBtn, this.allJobItems.length);
                }
            }
        })


        this.prevBtn.addEventListener("click", (event) => {
            this.jobItemView.clickPrevButton();
            this.jobItemView.resetResume();
            this.jobItemView.displayResumeDetails(this.allJobItems);
            this.jobItemView.displayPrevButton(this.prevBtn, this.allJobItems.length);
            this.jobItemView.displayNextButton(this.nextBtn, this.allJobItems.length);
        })

        this.nextBtn.addEventListener("click", (event) => {
            this.jobItemView.clickNextButton();
            this.jobItemView.resetResume();
            this.jobItemView.displayResumeDetails(this.allJobItems);
            this.jobItemView.displayPrevButton(this.prevBtn, this.allJobItems.length);
            this.jobItemView.displayNextButton(this.nextBtn, this.allJobItems.length);
        })

        this.resetBtn.addEventListener("click", (event) => {
            this.jobItemView.resetResumeCounter();
            this.jobItemView.resetResume();
            this.searchBox.disabled = false;
            this.searchBox.value = '';
        })
    }
}
export { ResumeAppView };