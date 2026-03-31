import { VisibleQuestion } from '@questions/common/visible.question'

export class VisibleAssertion {

    static shouldBeVisible(element: string) {
        VisibleQuestion.VisibilityOfElement(element).should('be.visible')
    }

    static shouldNotBeVisible(element: string) {
        VisibleQuestion.VisibilityOfElement(element).should('not.be.visible')
    }
}