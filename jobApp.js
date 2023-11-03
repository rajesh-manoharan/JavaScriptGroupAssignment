import {TestClass} from "./job-category/model/job-category-utility-test.js"

import {ResumeAppController} from './controller/resume-app-controller.js'

// const jobController = new TestClass();
// jobController.testGetAllJobItemsBasedOnJobCategory();

const resumeAppController = new ResumeAppController();
resumeAppController.init();