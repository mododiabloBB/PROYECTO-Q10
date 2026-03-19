export class click {
    static(elemento: string) {
        cy.get(elemento).click();
    }
}