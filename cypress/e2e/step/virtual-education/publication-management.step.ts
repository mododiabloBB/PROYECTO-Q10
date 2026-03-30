import dataCourse from "@fixtures/virtual-education/course-management.json"
import {When, Then} from '@badeball/cypress-cucumber-preprocessor'
import {PublicationCourseTask} from "@task/virtual-education/publication-course.task"


When('El usuario ingresa a los ajustes del curso virtual', () => {
    PublicationCourseTask.openSideNav()
    
})