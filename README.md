# Instalación

Clonar proyecto de forma local utilizando SSH

```bash
git@github.com:ArzCorp/harry-potter.git
```

Una vez clonado debemos ingresar a la carpeta del proyecto

```bash
cd harry-potter
```

Dentro del proyecto instalamos las dependencias usando npm

```bash
npm install
```

Debemos levantar el servidor local para poder ver la aplicación.

```bash
npm run server
```

Por último ejecutamos la aplicación con npm

```bash
npm run dev
```

¿Qué es lo que más te gustó de tu desarrollo?
R= La parte de utilizar Redux para administrar favoritos.

¿qué hubieras mejorado o qué más hubieras
hecho?
R= Una barra de búsqueda, administrar los fetch con redux, pruebas unitarias y poder editar un personaje

bug R= A la hora de hacer el despliegue a Vercel no estaba compilando las imágenes de sass, lo solucioné subiendo las imágenes a un servidor y consumir una url en lugar de un estático
