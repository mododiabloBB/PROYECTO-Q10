import {CreateVirtualCourseUI} from '@ui/virtual-course/create-virtual-course.ui'
import {TextAssertion} from '@assertion/common/text.assertion'

export class CreateVirtualCourseAssertion {

    static createdCourse (courseName: string) {
        TextAssertion.haveText(CreateVirtualCourseUI.courseName, courseName)
    }
}