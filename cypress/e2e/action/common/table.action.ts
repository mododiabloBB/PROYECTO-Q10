import { TableUI } from "@ui/common/table.ui"

export class TableAction {

    static search(text: string) {
        cy.get(TableUI.inputSearch).clear().type(text, { delay: 20 });
        cy.get("#filters_form input#texto")
            .siblings("span", { log: false })
            .get('button[type="submit"]', { log: false })
            .click();

        cy.get(TableUI.divLoader).should('not.be.visible')

        cy.get(TableUI.trList).first().should('contain', text);
    }

    static clickAction(register: string, action: string) {
        cy.get(TableUI.trList).as('registros');
        cy.get('@registros').should('contain', register)

        cy.get('@registros')
            .contains(register)
            .closest("tr")
            .find(`td.actions a[data-original-title="${action}"]`)
            .click({ force: true });

        if (action == 'Detalle') cy.get('#itemDetails').should('be.visible')
    }

    static validateActionNotExist(register: string, action: string) {
        cy.contains(TableUI.trList, register)
            .closest('tr')
            .find(`td.actions a[data-original-title="${action}"]`)
            .should('not.exist');
    }
}