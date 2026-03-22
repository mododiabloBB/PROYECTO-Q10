export class TextQuestion {

    static takeText (element: string): Cypress.Chainable<string> {
        return cy.get(element).invoke('text').then(texto => texto.trim())
    }
}