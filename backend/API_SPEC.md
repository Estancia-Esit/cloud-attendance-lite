# Especificación rápida de API (borrador)

Base URL (ejemplo): `https://script.google.com/macros/s/<DEPLOY_ID>/exec`

## Eventos
- `GET /eventos`
- `POST /eventos`
- `PUT /eventos/{id_evento}`
- `DELETE /eventos/{id_evento}`

## Sesiones
- `GET /eventos/{id_evento}/sesiones`
- `POST /eventos/{id_evento}/sesiones`

## Participantes
- `GET /participantes`
- `POST /participantes`
- `PUT /participantes/{id_participante}`

## Asistencias
- `POST /asistencias`
  - Regla idempotente: si ya existe (id_sesion + id_participante), responder:
    - `200 { "msg": "asistencia ya registrada" }`
  - Si no existe, crear y responder confirmación.

## Reportes (fase 3)
- `GET /reportes/asistentes?evento=...&sesion=...`
- `GET /reportes/porcentaje?evento=...`
