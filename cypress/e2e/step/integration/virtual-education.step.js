import dataCourse from "@fixtures/virtual-education/course-management.json"
import {When} from "@badeball/cypress-cucumber-preprocessor"
import {MenuAction} from '@action/common/menu.action'
import {TableAction} from '@action/common/table.action' 


When ('El usuario navega a la página de {string}', (page) => {
    MenuAction.openMenuOption(page)
})

When ('El usuario busca el curso virtual {string}', (course) => {
    // Aquí filtramos el nombre a buscar, en base al nombre que se asigna en el feature
    TableAction.search(dataCourse[course])
})