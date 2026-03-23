import dataCourse from "../../../fixtures/virtual-education/course.json"
import {When} from "@badeball/cypress-cucumber-preprocessor"
import {MenuAction} from '@action/common/menu.action'
import {TableAction} from '@action/common/table.action' 


When ('El usuario navega a la página de {string}', (page) => {
    MenuAction.openMenuOption(page)
})

When ('El usuario buscar el curso', () => {
    TableAction.search(dataCourse.name)
})