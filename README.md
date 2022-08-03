# Install

npm install

# To build

npx webpack


# Probando con
* https://github.com/wagerfield/parallax
* https://github.com/ehzhang/sense-js
* https://github.com/dorukeker/gyronorm.js (DEPRECATED)

# Historia

La primera piedra la tiró Karen con la configuración inicial para usar
node y webpack. Además hizo el html/js para usar parallax y sense-js.
La forma de testeo era pusheando a master con lo que se hacía un deploy
a carpiano.github.io y así el navegador de celulares permitía acceder
al giróscopo.

Para no depender de ese deploy, Miguel agregó `https: true` en el config
de webpack. Ahora podemos testear localmente. En la rama `crudo` usamos
el objeto `Gyroscope` directamente para leer los valores de los tres ejes.
