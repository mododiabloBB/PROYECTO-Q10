import {ClickAction} from '@action/click.action'
import {CreateVirtualCourseUI} from '@ui/virtual-course/create-virtual-course.ui'

export class SelectVirtualCourseCreationTypeTask {

    static selectTemplate () {
        ClickAction.clickElement(CreateVirtualCourseUI.btnFromTemplate)
    }

    static selectNew () {
        ClickAction.clickElement(CreateVirtualCourseUI.btnNew)
    }
}