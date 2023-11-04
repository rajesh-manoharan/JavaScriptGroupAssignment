import { ResumeAppView } from "../view/resume-app-view.js";
class ResumeAppController {

    init() {
        const resumeAppView = new ResumeAppView();
        resumeAppView.displaySearchResume();
    }

}

export { ResumeAppController };