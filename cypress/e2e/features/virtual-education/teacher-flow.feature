Feature: Gestión de cursos virtuales

    Background: Login
        Given El usuario ha iniciado sesión en el sistema correctamente
        When El usuario navega a la página de "Cursos virtuales"
        And El usuario buscar el curso


    Scenario: Crear curso virtual
        When El usuario hace clic en la acción "Crear curso virtual" del curso
        And El usuario selecicona el tipo de creación de curso desde cero
        Then El curso virtual se crea exitosamente y su vista carga de forma correcta

    Scenario Outline: Crear recursos <nombreRecurso>
        When El usuario ingresar al curso virtual pulsando la acción "Ingresar al curso"
        And El usuario presionar la acción para crear un nuevo recursos
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

    Scenario: Publicar curso virtual
    When El usuario ingresar al curso virtual pulsando la acción "Ingresar al curso"
    And El usuario ingresa a los ajustes del curso virtual
    And El usuario publica el curso virtual
    Then La modificación de la publicidad del curso se realiza de forma correcta