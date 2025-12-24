# Reglas de Seguridad de Firebase

## Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Colección de listas de precios
    match /priceLists/{document} {
      allow read: if true; // Cualquiera puede leer las listas de precios
      allow write: if request.auth != null; // Solo usuarios autenticados pueden escribir
    }
  }
}
```

## Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Archivos de listas de precios
    match /priceLists/{allPaths=**} {
      allow read: if true; // Cualquiera puede leer los archivos
      allow write: if request.auth != null; // Solo usuarios autenticados pueden escribir
    }
  }
}
```

## Pasos para configurar las reglas:

1. Ve a la consola de Firebase: https://console.firebase.google.com/
2. Selecciona tu proyecto: diariolacuenca-7d6b0
3. En el menú lateral, ve a "Firestore Database" > "Rules"
4. Copia y pega las reglas de Firestore
5. Haz clic en "Publish"
6. Ve a "Storage" > "Rules"
7. Copia y pega las reglas de Storage
8. Haz clic en "Publish"

## Notas importantes:

- Las reglas actuales permiten que cualquier persona lea las listas de precios
- Solo usuarios autenticados pueden subir o eliminar archivos
- Para mayor seguridad, podrías implementar autenticación real de Firebase
- Las reglas se aplican inmediatamente después de publicarlas

