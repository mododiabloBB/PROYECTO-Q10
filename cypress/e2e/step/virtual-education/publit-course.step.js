import dataCourse from "../../../fixtures/virtual-education/course.json"
import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

When('El usuario ingresar al curso virtual pulsando la acción {string}', (action) => {
    TableAction.clickAction(dataCourse.name, action)
})

When('El usuario ingresa a los ajustes del curso virtual', () => {
    
})