import {TextAssertion} from '@assertion/common/text.assertion'
import {CreateVirtualCourseUI} from '@ui/virtual-course/create-virtual-course.ui'

export class CreateVirtualCourseAssertion {

    static createdCourse (courseName: string) {
        TextAssertion.haveText(CreateVirtualCourseUI.courseName, courseName)
    }
}