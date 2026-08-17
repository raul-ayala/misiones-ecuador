function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var d = e.parameter;
    hoja.appendRow([
      d.enviado ? new Date(d.enviado) : new Date(),
      d.nombre || '',
      d.celular || '',
      d.correo || '',
      d.tipoMision || '',
      d.residencia || '',
      d.idioma || ''
    ]);
    MailApp.sendEmail(
      'misionesecuador.fsj@gmail.com',
      'Nueva solicitud: ' + (d.nombre || ''),
      'Nombre: ' + d.nombre +
      '\nCelular: ' + d.celular +
      '\nCorreo: ' + d.correo +
      '\nTipo de misión: ' + d.tipoMision +
      '\nResidencia: ' + d.residencia
    );
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
