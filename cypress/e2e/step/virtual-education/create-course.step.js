import dataCourse from "../../../fixtures/virtual-education/course.json"
import {When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {TableAction} from '@action/common/table.action' 
import {SelectVirtualCourseCreationTypeTask} from '@task/virtual-education/create-course.task'
import {CreateVirtualCourseAssertion} from '@assertion/virtual-education/create-virtual-course.assertion'


When('El usuario hace clic en la acción {string} del curso', (action) => {
    TableAction.clickAction(dataCourse.name, action)
})

When('El usuario selecicona el tipo de creación de curso desde cero', () => {
    SelectVirtualCourseCreationTypeTask.selectNew()
})

Then('El curso virtual se crea exitosamente y su vista carga de forma correcta', () => {
    CreateVirtualCourseAssertion.createdCourse(dataCourse.name)
})