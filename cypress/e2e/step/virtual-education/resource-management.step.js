import dataCourse from "../../../fixtures/virtual-education/course.json"
import {When, Then} from '@badeball/cypress-cucumber-preprocessor'
import {ResourceManagementTask} from '@task/virtual-education/resource-management.task'
import {TableAction} from '@action/common/table.action'
import {CreatedResourceAssertion} from '@assertion/virtual-education/resource-management.assertion'

When('El usuario ingresar al curso virtual pulsando la acción {string}', (action) => {
    TableAction.clickAction(dataCourse.name, action)
})

When('El usuario presionar la acción para crear un nuevo recursos', () => {
    ResourceManagementTask.clickDropdownResource()
})

When('El usuario selecciona el tipo de recurso {word}', (resource) => {
    ResourceManagementTask.selectResource(resource)
})

When('El usuario asigna el título {string} al recurso', function(title) {
    this.resourceTitle = title
    ResourceManagementTask.typeTitleResource(title)
})

When('El usuario asigna la descripción {string} al recurso', function(description) {
    this.resourceDescription = description
    ResourceManagementTask.typeDescriptionResource(description)
})

When('El usuario configura las opciones del recurso', () => {
    ResourceManagementTask.takeOffRestriction()
})

When('El usuario presionar el boton para guardar el recurso', () => {
    ResourceManagementTask.createResource()
})

Then('El recurso de guarda de forma correcta en el curso virtual', function() {
    const title = this.resourceTitle
    const description = this.resourceDescription

    CreatedResourceAssertion.createdResource(title, description)
})