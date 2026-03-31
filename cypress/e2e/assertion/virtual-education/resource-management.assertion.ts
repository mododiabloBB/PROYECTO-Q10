import {ResourceManagementUI} from '@ui/virtual-course/resource.ui'
import {TextAssertion} from '@assertion/common/text.assertion'

export class CreatedResourceAssertion {

    static createdResource (title: string, description: string) {
        TextAssertion.haveText(ResourceManagementUI.titleResourceCreated, title)
        TextAssertion.haveText(ResourceManagementUI.descriptionResourceCreated, description)
    }
}