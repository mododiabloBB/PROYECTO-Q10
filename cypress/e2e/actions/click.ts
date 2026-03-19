export default class Click {
    static (elemento: string) {
        cy.get(elemento).click();
    }
}