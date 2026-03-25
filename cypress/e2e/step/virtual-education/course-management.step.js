import dataCourse from "@fixtures/virtual-education/course-management.json"
import {When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {TableAction} from '@action/common/table.action' 
import {CourseManagementTask} from '@task/virtual-education/course-management.task'
import {CourseManagementAssertion} from '@assertion/virtual-education/course-management.assertion'
import {ModalAction} from '@action/common/modal.action'

// Escenario: Crear curso virtual

When('El usuario hace clic en la acción {string} del curso', (action) => {
    TableAction.clickAction(dataCourse.nameCourse, action)
})

When('El usuario selecicona el tipo de creación de curso desde cero', () => {
    CourseManagementTask.selectNew()
})

Then('El curso virtual se crea exitosamente y su vista carga de forma correcta', () => {
    CourseManagementAssertion.createdCourse(dataCourse.nameCourse)
})

// Escenario: Eliminar curso virtual

When('El usuario hace clic en la acción {string} del curso virtual', function(action) {
    this.actionDelete = action
    TableAction.clickAction(dataCourse.nameCourse, action)
})

When('El usuario confirma la eliminación del curso virtual', () => {
    ModalAction.sudmitModalForm()
})

When('El curso virtual se elimina exitosamente y su registro no se muestra.', function() {
    const action = this.actionDelete

    TableAction.validateActionNotExist(dataCourse.nameCourse, action)
})