import {TextQuestion} from '@questions/common/text.question'

export class TextAssertion {

    static haveText (element: string, textExpected: string) {
        TextQuestion.takeText(element).then(text => {
            expect(text).have.contain(textExpected)
        })
    }
}