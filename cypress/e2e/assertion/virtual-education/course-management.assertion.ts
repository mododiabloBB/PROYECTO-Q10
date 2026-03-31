import {CreateVirtualCourseUI} from '@ui/virtual-course/virtual-course.ui'
import {TextAssertion} from '@assertion/common/text.assertion'

export class CourseManagementAssertion {

    static createdCourse (courseName: string) {
        TextAssertion.haveText(CreateVirtualCourseUI.courseName, courseName)
    }
}