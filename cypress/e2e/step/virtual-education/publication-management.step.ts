import {When, Then} from '@badeball/cypress-cucumber-preprocessor'
import {PublicationCourseTask} from "@task/virtual-education/publication-course.task"


When('El usuario ingresa a los ajustes del curso virtual', () => {
    PublicationCourseTask.goToSettings()

})

When('El usuario publica el curso virtual', () => {
PublicationCourseTask.switchPublication()
})

Then('La modificación de la publicidad del curso se realiza de forma correcta', () => {
    
})