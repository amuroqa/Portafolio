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
