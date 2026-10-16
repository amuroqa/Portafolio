# TEST PLAN - PORTAFOLIO

## Casos de Uso
- UC-01: Portafolio
- UC:02: Proyectos
- UC:03: Contacto
- UC:04: Sobre mi

## TC-01: ver portafolio
**pasos:**
1. ingresa a https://amuroqa.github.io/Portafolio/
2. Espera a que la página cargue completamente
3. Desplázate hacia abajo hasta ver la sección "Proyectos" y el footer

**Resultado esperado:**
- Se visualiza la foto de perfil y el nombre "Alejandro Muro"
- Se visualiza la barra de navegación con los enlaces "proyectos" y "contacto"
- Se visualiza la sección "Sobre mí"
- Se visualiza la sección "Proyectos" con sus tarjetas
- Se visualiza el footer con el copyright

## TC-02: ver proyectos
**pasos:**
1. ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "proyectos" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Proyectos"

**Resultado esperado:**
- La página se desplaza automáticamente hasta la sección "Proyectos"
- Se visualizan las tarjetas de Weather App y TaskFlow
- Cada tarjeta muestra los botones "Demo" y "GitHub"

## TC-03: ver demo de proyecto weather app
**pasos:**
1. ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "proyectos" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Proyectos"
4. Haz clic en el botón "demo" del proyecto weather app
5. Espera a que cargue la nueva pagina

**Resultado esperado:**
- Se abre la demo weather app https://amuroqa.github.io/weather-app
- La weather app carga correctamente
- Se visualiza el buscador de ciudades

**Estado:** 🟡 Observación: actualmente la demo abre en la misma pestaña en lugar de una nueva. Pendiente ticket para agregar `target="_blank"` al enlace.

## TC-04: Ver GitHub del proyecto Weather App

**Pasos:**
1. Ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "proyectos" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Proyectos"
4. Haz clic en el botón "GitHub" de la tarjeta Weather App
5. Espera a que cargue la nueva página

**Resultado esperado:**
- Se abre la URL https://github.com/amuroqa/weather-app
- El repositorio muestra el código del proyecto y el README

**Estado:** 🟡 Observación: actualmente la demo abre en la misma pestaña en lugar de una nueva. Pendiente ticket para agregar `target="_blank"` al enlace.

## TC-05: ver demo de proyecto taskFlow
**pasos:**
1. ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "proyectos" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Proyectos"
4. Haz clic en el botón "demo" del proyecto taskFlow
5. Espera a que cargue la nueva pagina

**Resultado esperado:**
- Se abre abre la demo taskflow URL https://amuroqa.github.io/taskFlow/
- La app taskFlow se carga correctamente
- Se visualiza el formulario para agregar tareas

**Estado:** 🟡 Observación: actualmente la demo abre en la misma pestaña en lugar de una nueva. Pendiente ticket para agregar `target="_blank"` al enlace.

## TC-06: Ver GitHub del proyecto taskflow

**Pasos:**
1. Ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "proyectos" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Proyectos"
4. Haz clic en el botón "GitHub" de la tarjeta taskflow
5. Espera a que cargue la nueva página

**Resultado esperado:**
- Se abre la URL https://github.com/amuroqa/taskflow
- El repositorio muestra el código del proyecto y el README

**Estado:** 🟡 Observación: actualmente la demo abre en la misma pestaña en lugar de una nueva. Pendiente ticket para agregar `target="_blank"` al enlace.

## TC-07: Ver contacto

**pasos:**
1. ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "contacto" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Contacto"

**Resultado esperado:**
- La página se desplaza automáticamente hasta la sección "Contacto"
- Se visualiza el texto "¿Tienes un proyecto en mente? Hablemos."
- Se visualizan los botones "Correo", "GitHub" y "LinkedIn"
- Se visualiza el copyright "© 2026 Alejandro Muro | Desarrollador Frontend" al final de la página

## TC-08: Enviar email

**Pasos:**
1. Ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "contacto" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Contacto"
4. Haz clic en el botón "Correo" (amuro8623@gmail.com)
5. Espera a que se abra el cliente de correo predeterminado
6. Verifica que el campo "Para" tenga la dirección amuro8623@gmail.com
7. Escribe un asunto y un mensaje de prueba
8. Envía el correo
9. Revisa la bandeja de entrada de amuro8623@gmail.com (y la de spam si no aparece)

**Precondición:**
- Tener un cliente de correo configurado en el equipo, o sesión iniciada en Gmail web

**Resultado esperado:**
- Se abre el cliente de correo con el campo "Para" completado con amuro8623@gmail.com
- El correo se envía correctamente
- El correo se recibe en la bandeja de amuro8623@gmail.com

**Estado:** 🟡 Observación: en pruebas el correo llega a spam. El botón funciona, pero el filtrado del proveedor afecta la recepción.

## TC-09: Ver github personal

**pasos:**
1. ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "contacto" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Contacto"
4. Haz clic en el botón "GitHub"
5. Espera a que se abra el GitHub personal

**Resultado esperado:**
- Se abre la URL https://github.com/amuroqa
- El perfil de GitHub de amuroqa se visualiza correctamente
- Se visualizan los repositorios del usuario, incluyendo Portafolio y weather-app-react

**Estado:** 🟡 Observación: el botón abre en la misma pestaña en lugar de una nueva.

## TC-10: Ver LinkedIn

**Pasos:**
1. Ingresa a https://amuroqa.github.io/Portafolio/
2. Haz clic en "contacto" en la barra de navegación superior derecha
3. Verifica que la página se desplace hasta la sección "Contacto"
4. Haz clic en el botón "LinkedIn" de la sección "Contacto"
5. Espera a que se abra la nueva pestaña

**Resultado esperado:**
- Se abre en una nueva pestaña la URL https://www.linkedin.com/in/alejandro-muro-151422184/
- El perfil de LinkedIn de Alejandro Muro se visualiza correctamente

## TC-11: Ver sobre mí

**Pasos:**
1. Ingresa a https://amuroqa.github.io/Portafolio/
2. Espera a que la página cargue completamente
3. Desplázate hacia abajo desde el header hasta la sección "Sobre mí"

**Resultado esperado:**
- Se visualiza la sección "Sobre mí" con el título correspondiente
- Se visualiza el texto de presentación (dos párrafos sobre experiencia en QA y transición a frontend)
- Se visualizan las badges de habilidades: HTML, CSS, JavaScript, Git y QA Testing
