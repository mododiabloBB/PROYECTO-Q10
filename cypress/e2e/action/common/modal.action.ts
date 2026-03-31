import {ModalUI} from "@ui/common/modal.ui"
import { VisibleAssertion } from "@assertion/common/visible.assertion";

export class ModalAction {

    static sudmitModalForm () {
        cy.get(ModalUI.btnSubmit).parents('form').then($form => {
        const url = $form.attr('action')
        const metodo = ($form.attr('method') || 'GET').toUpperCase()

        if (url) {
            cy.intercept(metodo, url).as('peticionInterceptada')
        }

        cy.get(ModalUI.btnSubmit).click();

        if (url) {
            cy.wait('@peticionInterceptada')
        }

        if (metodo == 'POST') {
            // Esto con el fin de que en un futuro si se requiere obtener el consecutivo de algo creado se pueda hacer al momento de enviar el formulario : PENDIENTE VALIDAR
        }
    });
    }
    
}