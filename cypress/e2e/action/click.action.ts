export class ClickAction {
    
    static clickElement(elemento: string) {
        cy.get(elemento).click()
    }
}