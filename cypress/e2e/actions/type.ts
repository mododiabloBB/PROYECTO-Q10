export class type {
    static (elemento: string, texto: string) {
        cy.get(elemento).type(texto);
    }
}