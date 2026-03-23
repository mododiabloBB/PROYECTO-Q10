import {ClickAction} from '@action/click.action'
import {CreateResorceUI} from '@ui/virtual-course/create-resource.ui'
import {VisibleAssertion} from '@assertion/common/visible.assetion'
import {TextAssertion} from '@assertion/common/text.assertion'
import {TypeAction} from '@action/type.action'
import {WaitAction} from '@action/request.action'

export class CreateResourceTask {

    static clickDropdownResource () {
        ClickAction.clickElement(CreateResorceUI.dropdownResource)
        VisibleAssertion.shouldBeVisible(CreateResorceUI.containerOfResorce)
    }

    static selectResource (resource: string) {
        ClickAction.clickElementByText(CreateResorceUI.listOfResource, resource)
        TextAssertion.haveText(CreateResorceUI.resourceLabel, resource)
    }

    static typeTitleResource (value: string){
        TypeAction.typeIn(CreateResorceUI.titleResource, value)
        TextAssertion.haveValue(CreateResorceUI.titleResource, value)
    }

    static typeDescriptionResource (text: string) {
        ClickAction.clickElement(CreateResorceUI.textAreaResource)
        TypeAction.typeIn(CreateResorceUI.textAreaFocusResource, text)
        TextAssertion.haveText(CreateResorceUI.textAreaP, text)
    }

    static takeOffRestriction () {
        cy.get(CreateResorceUI.restrictionOn).each(($switch) => {
            ClickAction.clickElementByEq($switch, 0)
        })
    }

    static createResource () {
        WaitAction.waitRequest('POST', '**/EducacionVirtual/v3/**/Actualizar', () => ClickAction.clickElement(CreateResorceUI.btnSubmit))
    }
}