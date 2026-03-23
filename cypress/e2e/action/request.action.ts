export class WaitAction {
    static waitRequest (method: string, request: string, action: () => void) {
        cy.intercept(method, request).as('Peticion')
        action()
        cy.wait('@Peticion')
    }
}