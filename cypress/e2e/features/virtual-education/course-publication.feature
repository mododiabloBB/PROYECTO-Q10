Feature: Gestión de cde publicación de cursos virtuales

    Background: Login
        Given El usuario ha iniciado sesión en el sistema correctamente
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario buscar el curso

    Scenario: Publicar curso virtual
        When El usuario ingresar al curso virtual pulsando la acción "Ingresar al curso"
        And El usuario ingresa a los ajustes del curso virtual
        And El usuario publica el curso virtual
        Then La modificación de la publicidad del curso se realiza de forma correcta

    Scenario: Ver curso virtual como estudiante

    Scenario: Despublicar curso virtual