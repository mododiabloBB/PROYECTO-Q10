import dataCourse from "@fixtures/virtual-education/course-management.json"
import {When} from "@badeball/cypress-cucumber-preprocessor"
import {MenuAction} from '@action/common/menu.action'
import {TableAction} from '@action/common/table.action'
import {ResourceManagementTask} from '@task/virtual-education/resource-management.task'

// Estos este se usa en la ruta '/virtual-education/course-management.feature'
When ('El usuario navega a la página de {string}', (page) => {
    MenuAction.openMenuOption(page)
})

When ('El usuario busca el curso virtual {string}', (course) => {
    // Aquí filtramos el nombre a buscar, en base al nombre que se asigna en el feature
    TableAction.search(dataCourse[course])
})

// Este este se usa en la ruta '/virtual-education/resource-management.feature'
When('El usuario ingresar al detallado del recurso {string}', function(resource) {
    this.nameResource = resource
    ResourceManagementTask.detailResource(resource)
})

When('El usuario presionar la acción para {string} el recurso', (action) => {
    ResourceManagementTask.deleteResource(action)
})