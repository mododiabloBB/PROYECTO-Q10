export class Type {
    static typeIn (elemento: string, texto: string) {
        cy.get(elemento).type(texto)
    }
}