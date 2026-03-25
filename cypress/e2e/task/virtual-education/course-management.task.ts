import {ClickAction} from '@action/click.action'
import {CreateVirtualCourseUI} from '@ui/virtual-course/virtual-course-management.ui'

export class CourseManagementTask {

    static selectTemplate () {
        ClickAction.clickElement(CreateVirtualCourseUI.btnFromTemplate)
    }

    static selectNew () {
        ClickAction.clickElement(CreateVirtualCourseUI.btnNew)
    }
}