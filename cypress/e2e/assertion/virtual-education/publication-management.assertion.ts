import { AttrVirtualEducationQuestion } from "@questions/virtual-education/attr-virtual-education.question"
import { AttrQuestion } from '@questions/common/attr.question'
import { PublicationCourseUI } from "@ui/virtual-course/publication-course.ui"

export class PublicationManagementAssertion {

    static validateOriginalTitle(expectedTitle: string) {
        AttrVirtualEducationQuestion.takeOriginalTitle(PublicationCourseUI.sideNavButton).should('eq', expectedTitle)
    }

    static shouldBePublished() {
        AttrQuestion.takeClass(PublicationCourseUI.switchPublication).then(($switch) => {
            cy.wrap($switch).should('include', 'bootstrap-switch-on')
        })
    }

    static shouldBeUnpublished() {
        AttrQuestion.takeClass(PublicationCourseUI.switchPublication).then(($switch) => {
            cy.wrap($switch).should('include', 'bootstrap-switch-off')
        })
    }
}