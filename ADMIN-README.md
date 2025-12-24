# Sistema de Administración FILCAM

## Funcionalidades

### 🎯 Panel de Administrador
- **Acceso**: `/admin`
- **Credenciales**:
  - Email: `admin@filcam.com`
  - Contraseña: `filcam`

### 📋 Funciones del Administrador
1. **Subir Listas de Precios**:
   - Seleccionar fecha de la lista
   - Subir archivo PDF
   - Los archivos se almacenan en Firebase Storage
   - La información se guarda en Firestore

2. **Gestionar Listas Existentes**:
   - Ver todas las listas subidas
   - Descargar archivos
   - Eliminar listas obsoletas

### 🔐 Acceso para Clientes
- **Ruta**: `/lista-precios`
- **Contraseña**: `filmar2025`
- **Funcionalidades**:
  - Ver listas de precios disponibles
  - Descargar PDFs
  - Contactar por WhatsApp o Email

## Configuración de Firebase

### 1. Habilitar Servicios
En la consola de Firebase (https://console.firebase.google.com/):

- **Firestore Database**: Crear base de datos en modo de prueba
- **Storage**: Crear bucket de almacenamiento
- **Authentication**: Habilitar (opcional, para mayor seguridad)

### 2. Configurar Reglas de Seguridad
Ver archivo `firebase-rules.md` para las reglas recomendadas.

### 3. Estructura de Datos
```
Colección: priceLists
Documento: {
  date: "2024-01-15",
  fileName: "lista_precios_enero_2024.pdf",
  downloadURL: "https://...",
  uploadDate: Timestamp
}
```

## Uso del Sistema

### Para el Administrador:
1. Ir a `/admin`
2. Iniciar sesión con las credenciales
3. Subir nueva lista:
   - Seleccionar fecha
   - Elegir archivo PDF
   - Hacer clic en "Subir Lista de Precios"
4. Gestionar listas existentes

### Para los Clientes:
1. Ir a `/lista-precios`
2. Ingresar contraseña: `filmar2025`
3. Ver listas disponibles
4. Descargar PDFs según necesiten

## Navegación

### En el Navbar:
- Se agregó "Lista Precios Clientes" entre Productos y Contacto

### En el Footer:
- Se agregó botón "Admin" destacado en verde

## Archivos Creados/Modificados

### Nuevos Archivos:
- `lib/firebase.ts` - Configuración de Firebase
- `components/admin-panel.tsx` - Panel de administración
- `app/admin/page.tsx` - Página del administrador
- `app/lista-precios/page.tsx` - Página para clientes
- `firebase-rules.md` - Reglas de seguridad
- `ADMIN-README.md` - Este archivo

### Archivos Modificados:
- `components/navbar.tsx` - Agregado enlace a lista de precios
- `components/footer.tsx` - Agregado botón de admin

## Dependencias Agregadas
- `firebase` - Para integración con Firebase

## Notas de Seguridad

### Autenticación Actual:
- **Admin**: Hardcodeada (admin@filcam.com / filcam)
- **Clientes**: Contraseña simple (filmar2025)

### Recomendaciones de Seguridad:
1. Implementar autenticación real de Firebase
2. Usar variables de entorno para credenciales
3. Implementar rate limiting
4. Validar tipos de archivo (solo PDFs)
5. Limitar tamaño de archivos

## Solución de Problemas

### Error de Firebase:
- Verificar que las reglas estén configuradas
- Confirmar que los servicios estén habilitados
- Revisar la consola del navegador para errores

### Archivos no se suben:
- Verificar permisos de Storage
- Confirmar que el archivo sea PDF
- Revisar conexión a internet

### Listas no se cargan:
- Verificar reglas de Firestore
- Confirmar que la colección exista
- Revisar estructura de datos

## Contacto
Para soporte técnico o consultas sobre el sistema de administración.

