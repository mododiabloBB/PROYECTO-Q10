import dataCourse from "@fixtures/virtual-education/course-management.json"
import {When} from "@badeball/cypress-cucumber-preprocessor"
import {MenuAction} from '@action/common/menu.action'
import {TableAction} from '@action/common/table.action'
import {ResourceManagementTask} from '@task/virtual-education/resource-management.task'

// Estos este se usa en la ruta '/virtual-education/course-management.feature'
When ('El usuario navega a la página de {string}', (page: string) => {
    MenuAction.openMenuOption(page)
})

When ('El usuario busca el curso virtual {string}', (course: string) => {
    // Aquí filtramos el nombre a buscar, en base al nombre que se asigna en el feature
    TableAction.search(dataCourse[course])
})

When('El usuario ingresar al curso virtual {string} pulsando la acción {string}', (course: string, action: string) => {
    TableAction.clickAction(dataCourse[course], action)
})

// Este este se usa en la ruta '/virtual-education/resource-management.feature'
When('El usuario ingresar al detallado del recurso {string}', function(resource: string) {
    this.nameResource = resource
    ResourceManagementTask.detailResource(resource)
})

When('El usuario presionar la acción para {string} el recurso', (action: string) => {
    ResourceManagementTask.pressAction(action)
})