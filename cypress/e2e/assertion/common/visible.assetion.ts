import { VisibleQuestion } from '@questions/common/visible.question'

export class VisibleAssertion {

    static shouldBeVisible(element: string) {
        VisibleQuestion.isVisible(element).then(validation => {
            expect(validation).to.be.true
        })
    }

    static shouldNotBeVisible(element: string) {
        VisibleQuestion.isVisible(element).then(validation => {
            expect(validation).to.be.false
        })
    }
} 