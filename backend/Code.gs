/**
 * Apps Script - Web App (skeleton)
 * - doGet(e) / doPost(e) como router simple por parámetro "path"
 * - Conecta a Google Sheets como BD
 *
 * NOTA: Este es un esqueleto para avance temprano (Fase 0/1).
 */

const SHEET_ID = PropertiesService.getScriptProperties().getProperty('SHEET_ID');

function doGet(e) {
  return route_(e, 'GET');
}

function doPost(e) {
  return route_(e, 'POST');
}

function route_(e, method) {
  const path = (e && e.parameter && e.parameter.path) ? e.parameter.path : '';
  // TODO: implementar router: eventos, participantes, sesiones, asistencias
  const payload = {
    ok: true,
    method,
    path,
    msg: 'API skeleton activo (avance temprano)'
  };
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
