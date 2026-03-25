import {CreateVirtualCourseUI} from '@ui/virtual-course/virtual-course-management.ui'
import {TextAssertion} from '@assertion/common/text.assertion'

export class CourseManagementAssertion {

    static createdCourse (courseName: string) {
        TextAssertion.haveText(CreateVirtualCourseUI.courseName, courseName)
    }
}