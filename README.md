# Cloud Attendance Lite (Proyecto 21)

Repositorio inicial (estructura sugerida) para la **Plataforma de Registro y Asistencia Cloud**.

## Objetivo
Gestionar:
- Eventos
- Sesiones
- Participantes
- Asistencias (por sesión)

## Infraestructura propuesta (según sección 9.2.3)
- **Base de datos:** Google Sheets
- **Automatización/API:** Google Apps Script (Web App + onFormSubmit opcional)
- **Dashboard:** Tablas dinámicas/Looker Studio (posterior)

## Estructura
- `/frontend` -> UI web (prototipo)
- `/backend` -> Apps Script (API) + especificación de endpoints
- `/docs` -> Modelo de datos, diagramas y notas
- `/tests` -> casos de prueba (plantilla)
- `/scripts` -> utilidades (export/import, seed de datos)

## Variables de entorno (referencia)
- Ver `backend/.env.example` (si usas un proxy local) y `backend/appsscript.properties.example`

> Nota: este repo es un **avance temprano** para Fase 0/1. La implementación funcional completa se desarrolla en Fase 2.
