import { JobCategory } from '../job-category/model/job-category.js';
import { JobCategoryUtils } from '../job-category/model/job-category-utility.js'
import { JobItemView } from "../resume-item/view/resume-item-view.js";


class ResumeAppController {

    init() {
        console.log('In here');
        const searchBox = document.getElementById("searchbox");
        console.log(searchBox);

        searchBox.addEventListener("keypress", (event) => {
            console.log('Inside event listener');
            if (event.key === "Enter") {
                console.log(searchBox.value);
                const inputJobCategory = new JobCategory(searchBox.value);
                console.log(inputJobCategory);
                const allJobItems = JobCategoryUtils.getAllJobItems(inputJobCategory);
                console.log(allJobItems);

                if (allJobItems.length === 0) {
                    alert('No application');
                } else {
                    var jobItemView = new JobItemView("personal");
                    jobItemView.buildResume(allJobItems[0]["personal"]);

                    jobItemView = new JobItemView("education");
                    jobItemView.buildResume(allJobItems[0]["education"]);

                    jobItemView = new JobItemView("work");
                    jobItemView.buildResume(allJobItems[0]["work"]);

                    jobItemView = new JobItemView("projects");
                    jobItemView.buildResume(allJobItems[0]["projects"]);

                    jobItemView = new JobItemView("Internship");
                    jobItemView.buildResume(allJobItems[0]["internship"]);

                    jobItemView = new JobItemView("achievements");
                    jobItemView.buildResume(allJobItems[0]["achievements"]);

                    jobItemView = new JobItemView("basics");
                    jobItemView.buildResume(allJobItems[0]["basics"]);

                    jobItemView = new JobItemView("skills");
                    jobItemView.buildResume(allJobItems[0]["skills"]);

                    jobItemView = new JobItemView("interests");
                    jobItemView.buildResume(allJobItems[0]["interests"]);
                }
            }

        })
    }

    render(searchText) {
        console.log(searchText);

        const allJobCategories = JobCategoryUtils.getAllJobCategories();

        console.log(allJobCategories);

    }
}

export { ResumeAppController };