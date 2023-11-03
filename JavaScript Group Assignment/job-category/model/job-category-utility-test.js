import { JobCategoryUtils } from "./job-category-utility.js";
import { JobCategory } from "./job-category.js";
import {JobItemView} from "../../resume-item/view/resume-item-view.js";

function testgetAllJobCategories() {

    const allJobCategories = JobCategoryUtils.getAllJobCategories();

    console.log("Length is " + allJobCategories.length);
    console.log(allJobCategories);
}

function testGetAllJobItemsBasedOnJobCategory() {
    const managerJobCategory = new JobCategory("HR");
    const allJobItems = JobCategoryUtils.getAllJobItems(managerJobCategory);
    console.log(allJobItems);
    const intern = "education";
    console.log(allJobItems[0][`${intern}`]);
    // const jobItemView = new JobItemView(allJobItems[0]);
    // jobItemView.buildResume();

}
// testgetAllJobCategories();
testGetAllJobItemsBasedOnJobCategory();