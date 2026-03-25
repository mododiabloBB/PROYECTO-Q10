Feature: Gestion de recursos en los cursos virtuales

    Background: Login y busqueda de curso
        Given El usuario ha iniciado sesión en el sistema correctamente
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario busca el curso virtual "nameCourseResource"
        And El usuario ingresar al curso virtual "nameCourseResource" pulsando la acción "Ingresar al curso"

    Scenario Outline: Crear recursos <nombreRecurso>
        When El usuario presionar la acción para crear un nuevo recursos
        And El usuario selecciona el tipo de recurso <nombreRecurso>
        And El usuario asigna el título "<tituloRecurso>" al recurso
        And El usuario asigna la descripción "<textoRecurso>" al recurso
        And El usuario configura las opciones del recurso
        And El usuario presionar el boton para guardar el recurso
        Then El recurso de guarda de forma correcta en el curso virtual

        Examples:
            | nombreRecurso | tituloRecurso                      | textoRecurso                                                    |
            | Tarea         | Tarea automatizacion prueba        | Esta es una tarea creada desde la automatizacion de pruebas     |
            | Cuestionario  | Cuestionario automatizacion prueba | Este es un cuetionario creado desde la automatizacion de prueba |
            | Foro          | Foro automatizacion prueba         | Este es un foro creado desde la automatizacion de pruebas       |



    Scenario: Eliminar recursos <nombreRecursoEliminar>
        When El usuario ingresar al detallado del recurso "<tituloRecursoEliminar>"
        And El usuario hace clic en la acción "Eliminar" del recurso
        And El usuario confirma la eliminación del recurso de tipo
        Then El recurso se elimina del curso virtual

        Examples:
            | tituloRecursoEliminar              |
            | Tarea automatizacion prueba        |
            | Cuestionario automatizacion prueba |
            | Foro automatizacion prueba         |