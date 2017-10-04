**API REST**
========================
- NODE.JS
- EXPRESS
- MONGODB/MYSQL/OTRA

*Instalación*
------------------------------
- npm install 

*Arrancar servidor*
--------------------------------
- Arrancar servidor: En la raíz del proyecto ejecutar: 
    - node app.js

*Rutas*
----------------------------
* Cada ruta extiende de localhost:3030/
----------------------------
*Usuarios*
- /users    = Petición GET Todos los usuarios del sistema
- /user/:id = Petición GET Lista usuario particular según id
- /user     = Petición POST Añade un nuevo usuario
- /user/:id = Petición PUT Actualiza registro de usuario existente referenciado por el id
- /user/:id = Petición DELETE
