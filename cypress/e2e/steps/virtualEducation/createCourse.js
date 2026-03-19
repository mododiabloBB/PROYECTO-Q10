import dataCourse from "../../../fixtures/virtualEducation/course.json";
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('El usuario ha iniciado sesión en el sistema correctamente', () => {
    cy.login("ordenesPago", 0);
});

When('El usuario busca el curso para crear un nuevo curso virtual', () => {
    cy.buscarRegistroTabla(dataCourse.nombre);
});

When('El usuario navega a la página de {string}', (pagina) => {
    cy.ingresarMenu(pagina);
});

When('El usuario hace clic en la acción {string} del curso virtual', (boton) => {

});