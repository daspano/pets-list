# npm link

Para realizar un 'npm link' a una SPA, hay que situarse con el intérprete de comandos en la ruta de la carpeta de compilación de la librería (ej: {WorkSpace}/{nombreLibrería}/dist/{nombreLibrería}), a continuación escribir el comando 'npm link'. 

Una vez terminado el proceso, situarse en la ruta de la raíz SPA (ej: {WorkSpace}/{nombreSPA}) y escribir el compando 'npm link {nombreLibrería}'.

Si se produce el error 'Error: inject() must be called from an injection context', editar en la carpeta raíz de la SPA el archivo 'angular.json', añadiéndole "preserveSymlinks": true, en las opciones de 'build'.
