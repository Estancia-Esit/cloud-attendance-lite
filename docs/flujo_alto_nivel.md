```mermaid
flowchart TD
  U[Usuario] -->|Marca asistencia| UI[Frontend Web]
  UI -->|POST /asistencias| API[Apps Script Web App API]
  API -->|Validaciones + Idempotencia| GS[Google Sheets (BD)]
  API -->|Respuesta| UI
  GS -->|Datos| DASH[Dashboard (Sheets/Looker)]
```
