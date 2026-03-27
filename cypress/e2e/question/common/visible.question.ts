export class VisibleQuestion {
    //Aquí validamos si 
    static VisibilityOfElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(selector)
    }
}