import { TextQuestion } from '@questions/common/text.question'

export class TextAssertion {

    static haveText(element: string, textExpected: string) {
        TextQuestion.takeText(element).then(text => {
            expect(text).have.contain(textExpected)
        })
    }

    // NUNCA SALE DEL IF, VALIDAR MOTIVO

    static notContainTextInsideOptionalElements(element: string, textExpected: string) {
        cy.get('body').then(($body) => {
            const elements = $body.find(element)

            if (elements.length === 0) {
                expect(true).to.equal(true)
                cy.log(`ULTIMO INTENTO`)
                return
            }

            const text = Cypress.$(elements).text()
            expect(text).to.not.contain(textExpected)
        })
    }

    static haveValue(element: string, valueExpected: string) {
        TextQuestion.takeValueInput(element).then(value => {
            expect(value).to.contains(valueExpected)
        })
    }
}