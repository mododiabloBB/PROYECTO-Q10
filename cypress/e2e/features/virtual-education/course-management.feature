Feature: Gestión de cursos virtuales

    Background: Login
        Given El usuario ha iniciado sesión en el sistema correctamente
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario buscar el curso


    Scenario: Crear curso virtual
        When El usuario hace clic en la acción "Crear curso virtual" del curso
        And El usuario selecicona el tipo de creación de curso desde cero
        Then El curso virtual se crea exitosamente y su vista carga de forma correcta

    Scenario: Eliminar curso virtual
        When El usuario hace clic en la acción "Eliminar" del curso virtual
        And El usuario confirma la eliminación del curso virtual
        Then El curso virtual se elimina exitosamente y su registro no se muestra.