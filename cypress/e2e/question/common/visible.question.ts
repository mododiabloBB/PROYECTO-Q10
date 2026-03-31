export class VisibleQuestion {
    //Aquí validamos si 
    static VisibilityOfElement(selector: string): Cypress.Chainable {
        return cy.get(selector)
    }
}