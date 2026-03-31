import {AttrVirtualEducationQuestion} from "@questions/virtual-education/attr-virtual-education.question"
import {PublicationCourseUI} from "@ui/virtual-course/publication-course.ui"

export class PublicationManagementAssertion {

    static validateOriginalTitle (expectedTitle: string) {
        AttrVirtualEducationQuestion.takeOriginalTitle(PublicationCourseUI.sideNavButton).should('eq', expectedTitle)
    }
}