import {CreateResorceUI} from '@ui/virtual-course/create-resource.ui'
import {TextAssertion} from '@assertion/common/text.assertion'

export class CreatedResourceAssertion {

    static createdResource (title: string, description: string) {
        TextAssertion.haveText(CreateResorceUI.titleResourceCreated, title)
        TextAssertion.haveText(CreateResorceUI.descriptionResourceCreated, description)
    }
}