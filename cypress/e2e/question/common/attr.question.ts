export class AttrQuestion {

    static takeClass (element: string): Cypress.Chainable<string> {
        return cy.get(element).invoke('attr', 'class')
    }
}