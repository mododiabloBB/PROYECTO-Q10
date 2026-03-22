import {Given} from "@badeball/cypress-cucumber-preprocessor"

Given('El usuario ha iniciado sesión en el sistema correctamente', () => {
    cy.login("ordenesPago", 0)
});