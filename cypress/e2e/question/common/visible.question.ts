export class VisibleQuestion {
    //Aquí validamos si 
    static isVisible(selector: string): Cypress.Chainable<boolean> {
        return cy.get('body').then($body => {
            const element = $body.find(selector)
            return element.length > 0 && element.is(':visible')
        });
    }

    // En este metodo los validamos que el valor del metodo isVisible no sea el esperado
    static isNotVisible(selector: string): Cypress.Chainable<boolean> {
        return this.isVisible(selector).then(v => !v)
    }
}