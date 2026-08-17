# Conectar el formulario "Súmate" a una hoja de Google

Sí, es posible y no necesita servidor propio ni costo. Google Apps Script publica
un endpoint al que el formulario envía los datos, y cada envío se agrega como una
fila en la hoja.

Toma unos 10 minutos. Son cuatro pasos.

---

## 1. Crea la hoja

1. Entra a [sheets.new](https://sheets.new) y nombra la hoja, por ejemplo
   **Solicitudes Súmate**.
2. En la primera fila escribe estos encabezados, en este orden exacto:

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Fecha | Nombre | Celular | Correo | Tipo de misión | Residencia | Idioma |

---

## 2. Pega el script

En la hoja: menú **Extensiones → Apps Script**. Borra lo que haya y pega esto:

```javascript
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
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

Guarda con el icono del disquete.

### Opcional: aviso por correo en cada solicitud

Si quieres recibir un correo cada vez que alguien se postula, agrega esta línea
justo antes de `return ContentService`:

```javascript
MailApp.sendEmail(
  'misionesecuador.fsj@gmail.com',
  'Nueva solicitud: ' + (d.nombre || ''),
  'Nombre: ' + d.nombre +
  '\nCelular: ' + d.celular +
  '\nCorreo: ' + d.correo +
  '\nTipo de misión: ' + d.tipoMision +
  '\nResidencia: ' + d.residencia
);
```

---

## 3. Publica el endpoint

1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. En el engranaje junto a "Seleccionar tipo", elige **Aplicación web**.
3. Configura así:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** **Cualquier persona** ← es indispensable, si no el
     formulario no podrá escribir
4. **Implementar**. Google pedirá autorización la primera vez: acepta. Si
   aparece la pantalla "Google no ha verificado esta aplicación", entra en
   **Configuración avanzada → Ir a (nombre del proyecto)**. Es tu propio script,
   es seguro.
5. Copia la **URL de la aplicación web**. Termina en `/exec` y se ve así:

   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## 4. Pega la URL en el sitio

En la página **Súmate**, abre el panel de **Tweaks** y pega la URL en el campo
**sheetEndpoint** (sección "Formulario"). Listo: los envíos empiezan a llegar.

O pásame la URL y la dejo fija en el código.

---

## Cómo se comporta el formulario

- **Sin URL configurada:** valida los campos y muestra la confirmación, pero no
  envía nada. Es el estado actual, útil para revisar el diseño.
- **Con URL configurada:** al enviar muestra "Enviando tu solicitud…", escribe la
  fila en la hoja y luego muestra la confirmación.
- **Si falla la conexión:** muestra un mensaje pidiendo escribir a
  misionesecuador.fsj@gmail.com, para que nadie se quede sin poder postularse.

## Dos cosas que conviene saber

**Cada nueva versión necesita reimplementarse.** Si editas el script después,
usa **Implementar → Gestionar implementaciones → editar (lápiz) → Versión: Nueva
versión**. La URL se mantiene igual.

**El envío no puede leer la respuesta del servidor.** El navegador bloquea la
lectura de respuestas entre dominios distintos, así que el formulario confirma en
cuanto el envío sale, sin esperar el "ok" de Google. En la práctica funciona bien,
pero conviene revisar la hoja las primeras veces para confirmar que las filas
llegan.

## Alternativas, si prefieres no usar Apps Script

- **Google Forms** con las mismas preguntas, incrustado o enlazado. Es lo más
  simple pero rompe el diseño de la página.
- **Servicios de formularios** como Formspree, Basin o Tally, que envían a correo
  y también a Sheets. Tienen plan gratuito y no requieren script, pero son un
  tercero más en el flujo.
