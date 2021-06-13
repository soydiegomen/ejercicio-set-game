# Prueba de Algoritmia - Bedu
## Overview
NodeJs API con la que se simula la aplicación de las reglas del juego “Set Game”, para identificar los sets válidos, tomando datos de prueba un arreglo estático de cartas

## Información técnica

### Requisitos para su setup (local y producción)
* NodeJS
* Npm


### Guía de setup 

1. Clone el proyecto del repositorio de Github.
Para un ambiente de desarrollo utiliza la rama de develop_nuevo_enfoque
 y la rama main para producción.

2. Instalar las dependencias de NPM
$ npm install

3. Levantar el servidor web 
$ node server.js



## Pruebas de la solución
Posterior a haber levantado el ambiente local

1. Abrir la aplicación de postman
Abrir en un navegador la URL http://localhost:3000/games/get_valid_sets  
Se obtendrá como respuesta un JSON con el número de sets validos y un arreglo con la información de estos sets.

**Ejemplo del resultado:**  
https://drive.google.com/file/d/1eHMnJ_Mwy6fH6idyF51CXMvpGloYtB_W/view?usp=sharing



## Explicación general del proceso
1. La primer vez pense que la clave estaba en ordenar las cartas por tipo de feature (No funcionó y revertí)
2. La segunda lo busque resolver iterando el arreglo de cartas y determinando los posibles arreglos válidos. (Funcionó más o menos, ya que si mostraba sets que cumplian con las reglas, pero el código no era mantenible y no se alcanzó a completar la solución)
3. Solución final. Primero obtuve todo los set de tres cartas posibles y a partir de este universo, solo aplique las validaciones para cada feature y de esta forma obtuve los sets que cumplian con las reglas de los cuatro features.
