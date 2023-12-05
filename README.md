# Tarea Técnica para Desarrollador - Ledge
Nombre: Yuwen Cheng
URL pagina: temporalmente no disponible aun.

### Supuestos
- El contador de visualizaciones aumentará en 1 si el video pasa el 60% de su duracion máxima, sin importar si realmente vió el 60%.
- Se reincia y se activa nuevamente para detectar la visualización si el video está en un tiempo inferior al 5% de su duración maxima, eso quiere decir que volverá a contar una visualización luego de llegar al 60%.
- El contador se actualizará para todos los que estén viendo en la pagina sin tener que recargar la página. Eso quiere decir que si otra persona aumentó en 1 la visualización, se verá reflejado en mi dispositivo de igual manera sin tener que recargar la página.
- La página cumple con los requisitos minimos pedidos, no se agregó nada extra.

### Requisitos Funcionales
1. ✅Reproducción de Video
2. ✅Contador de Visualizaciones
3. ✅Controles de Reproducción
4. ✅Responsividad

### Requisitos Técnicos
1. Frontend: Se utilizó Next.js 14
2. Base de Datos: Se está utilizando firebase para almacenar las visualizaciones
3. Buenas Prácticas

## Configuración Variable de entorno
Las siguientes variables son obtenidos desde el proyecto de firebase
```
NEXT_PUBLIC_FIREBASE_apiKey
NEXT_PUBLIC_FIREBASE_authDomain
NEXT_PUBLIC_FIREBASE_projectId
NEXT_PUBLIC_FIREBASE_storageBucket
NEXT_PUBLIC_FIREBASE_messagingSenderId
NEXT_PUBLIC_FIREBASE_appId
```

## Instalar las dependencias
Para instalar las dependencias use algunos de los siguientes comandos

```bash
npm install
# or
yarn install
```

## Inicializar página web
```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) con el navegador para ver la pagina.