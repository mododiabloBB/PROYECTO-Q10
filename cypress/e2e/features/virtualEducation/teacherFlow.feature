Feature: Gestión de cursos virtuales desde profesores

    Background: Login:
        Given El usuario ha iniciado sesión en el sistema correctamente

    Scenario: Crear curso virtual:
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario busca el curso para crear un nuevo curso virtual
        And El usuario hace clic en la acción "Crear curso virtual" del curso virtual
        And El usuario selecicona ekl tipo de curso virtual "Desde cero"
        And El usuario hace clic en el botón "Guardar"
        Then El curso virtual se crea exitosamente y su vista carga de forma correcta