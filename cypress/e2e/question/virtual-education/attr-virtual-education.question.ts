export class AttrVirtualEducationQuestion {

    static takeOriginalTitle (element: string): Cypress.Chainable<string> {
        return cy.get(element).invoke('attr', 'data-original-title')
    }

    
}