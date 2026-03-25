import {ClickAction} from '@action/click.action'
import {ResourceManagementUI} from '@ui/virtual-course/resource-management.ui'
import {VisibleAssertion} from '@assertion/common/visible.assetion'
import {TextAssertion} from '@assertion/common/text.assertion'
import {TypeAction} from '@action/type.action'
import {WaitAction} from '@action/request.action'

export class ResourceManagementTask {

    static clickDropdownResource () {
        ClickAction.clickElement(ResourceManagementUI.dropdownResource)
        VisibleAssertion.shouldBeVisible(ResourceManagementUI.containerOfResorce)
    }

    static selectResource (resource: string) {
        ClickAction.clickElementByText(ResourceManagementUI.listOfResource, resource)
        TextAssertion.haveText(ResourceManagementUI.resourceLabel, resource)
    }

    static typeTitleResource (value: string){
        TypeAction.typeIn(ResourceManagementUI.titleResource, value)
        TextAssertion.haveValue(ResourceManagementUI.titleResource, value)
    }

    static typeDescriptionResource (text: string) {
        ClickAction.clickElement(ResourceManagementUI.textAreaResource)
        TypeAction.typeIn(ResourceManagementUI.textAreaFocusResource, text)
        TextAssertion.haveText(ResourceManagementUI.textAreaP, text)
    }

    static takeOffRestriction () {
        cy.get(ResourceManagementUI.restrictionOn).each(($switch) => {
            ClickAction.clickElementByEq($switch, 0)
        })
    }

    static createResource () {
        WaitAction.waitRequest('POST', '**/EducacionVirtual/v3/**/Actualizar', () => ClickAction.clickElement(ResourceManagementUI.btnSubmit))
    }
}