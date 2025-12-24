# 🚀 Instrucciones para Subir a Hostinger

## ✅ Build Completado

Tu sitio web está listo para subir a Hostinger. El build se ha generado en la carpeta `out/`.

## 📁 Archivos a Subir

Sube **TODOS** los archivos de la carpeta `out/` a la carpeta `public_html` de tu hosting en Hostinger.

### Estructura de archivos:
```
out/
├── index.html (página principal)
├── contacto/ (página de contacto)
├── _next/ (archivos de Next.js)
├── .htaccess (configuración del servidor)
├── LOGO FILCAM R.ico (favicon)
├── logo-filcam-distribuidora.png
├── logo-filcam.png
├── logo-filcam-cam.png
└── [otros archivos estáticos]
```

## 🔧 Pasos para Subir a Hostinger

### 1. Acceder al Panel de Control
- Ve a tu panel de control de Hostinger
- Accede al **File Manager** o **Administrador de Archivos**

### 2. Navegar a public_html
- Ve a la carpeta `public_html` (o `www` en algunos casos)
- **IMPORTANTE**: Si ya tienes archivos ahí, haz una copia de seguridad

### 3. Subir Archivos
- Sube **TODOS** los archivos de la carpeta `out/` a `public_html`
- Asegúrate de que el archivo `.htaccess` esté en la raíz

### 4. Verificar Permisos
- Los archivos deben tener permisos `644`
- Las carpetas deben tener permisos `755`

## 🌐 Configuración del Dominio

### Si usas un dominio personalizado:
1. Ve a **Dominios** en tu panel de Hostinger
2. Configura el dominio para que apunte a `public_html`
3. Espera 24-48 horas para la propagación del DNS

### Si usas un subdominio:
1. Crea el subdominio en tu panel de Hostinger
2. Apunta el subdominio a la carpeta donde subiste los archivos

## ✅ Verificación

Después de subir los archivos:

1. **Visita tu sitio web** en el navegador
2. **Verifica que el logo aparezca** en el navbar
3. **Verifica que el favicon aparezca** en la pestaña
4. **Prueba la navegación** entre páginas
5. **Verifica que el botón de WhatsApp funcione**

## 🔧 Solución de Problemas

### Si el sitio no carga:
- Verifica que todos los archivos estén en `public_html`
- Asegúrate de que el `.htaccess` esté presente
- Revisa los logs de error en el panel de Hostinger

### Si las imágenes no aparecen:
- Verifica que los archivos PNG estén en la carpeta correcta
- Asegúrate de que las rutas sean correctas

### Si hay errores 404:
- Verifica que el `.htaccess` esté configurado correctamente
- Asegúrate de que las rutas de Next.js funcionen

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de error en Hostinger
2. Verifica que todos los archivos estén subidos
3. Contacta al soporte de Hostinger si es necesario

---

**¡Tu sitio web de Distribuidora Filcam está listo para funcionar en producción!** 🎉 