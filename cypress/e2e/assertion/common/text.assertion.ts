import {TextQuestion} from '@questions/common/text.question'

export class TextAssertion {

    static haveText (element: string, textExpected: string) {
        TextQuestion.takeText(element).then(text => {
            expect(text).have.contain(textExpected)
        })
    }

    static haveValue (element: string, valueExpected: string) {
        TextQuestion.takeValueInput(element).then(value => {
            expect(value).to.contains(valueExpected)
        })
    }
}