export class WaitRequest {
    static waitRequest (type: string, method: string, request: () => Cypress.Chainable) {
        cy.intercept(type, method).as('Peticion')
        request()
        cy.wait('@Peticion')
    }
}