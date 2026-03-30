import {EventuallyVisibleQuestion} from "@questions/common/eventually.question"
import {ClickAction} from "@action/click.action"
import {PublicationCourseUI} from "@ui/virtual-course/publication-course.ui"

export class PublicationCourseTask {

    static openSideNav() {
        EventuallyVisibleQuestion.isVisible(PublicationCourseUI.sideNavButton).then((isVisible) => {
            if (isVisible) {
                ClickAction.clickElement(PublicationCourseUI.sideNavButton)
            }
        })
    }
}