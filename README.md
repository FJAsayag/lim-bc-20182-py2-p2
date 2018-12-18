# Data Lovers - Harry Potter

## Historias de usuario

- El usuario necesita poder ver los nombres de los personajes de Harry Potter siempre en mayúsculas.

- El usuario requiere poder visualizar la imagen de la insignia de c/u de los estudiantes de Hogwarts. Para ello, voy agregar la propiedad insignia a todos los estudiantes de hogwarts teniendo en cuenta la casa a la cual pertenecen.

- El usuario requiere poder saber la edad de todos los personajes de Harry Potter, para ello voy agregar la propiedad `age` a todos los elementos y su valor respectivo lo voy a calcular con el valor de la propiedad `yearOfBirth` que viene en la data.

- El usuario quiere visualizar todas las casas de la escuela de Hogwarts, para ello quiero un array cuyos elementos sean las casas y se muestren de manera única.

- Quiero poder agrupar y filtrar por casas a los personajes de HarryPotter.

## Preparando el entorno

### Primero lo primero : eslintrc

1.- Instalar eslint de manera global

```batch
npm install -g eslint
```

2.- Nos ubicamos en el archivo `.eslintrc` y vamos a indicar las siguientes `rules`

```js
"rules": {
    "allowTernary": true,
    "linebreak-style": 0,
    "global-require": 0,
    "keyword-spacing": 1,
    "space-before-function-paren": [1, "never"],
    "arrow-spacing":  ["error", { "before": true, "after": true }],
    "eqeqeq": 1,
    "space-infix-ops": 1,
    "comma-spacing": 1,
    "brace-style": 1,
    "no-multiple-empty-lines": 1,
    "camelcase": 1,
    "func-call-spacing": 1,
    "key-spacing": 1,
    "semi": 1,
    "no-floating-decimal": 1,
    "no-multi-spaces": 1,
    "padded-blocks": [1, "never"],
    "space-before-blocks": 1,
    "space-in-parens": 1,
    "spaced-comment": 1,
    "quotes": [1, "single"],
    "id-length": [1, { "exceptions": ["i", "j", "x"] }],
    "indent": [1, 2],
    "no-array-constructor": 1,
    "no-const-assign": "error",
    "no-var": "error"
 },

```

## Qué se de la data

- Mi data esta representada en una estructura de array de objetos.
- Cada elemento de mi array es un objeto que tiene propiedades y valores.
- Cada objeto representa un personaje de Harry Potter

## Cual es la arquitectura (estructura de carpetas y archivos)

- Tengo un archivo de la data : src/data/harryPotter/potter.js

- Tengo un archivo para la lógica : data.js

- Tengo un archivo para representar la interacción del usuario con la aplicación DOM : main.js

  ```js
    window.cipher = {
        encode : () => {
          // escribes todo lo que hace la función
        },
        decode : () =>{
          // escribes todo lo que hace la función
        },
    }
    ```

    ```js
    const encode = () => {
       //escribes todo lo que hace la función
    }

    const decode = () => {
        //escribes todo lo que hace la función
    }

    //Evitemos
    window.cipher = {
        encode : encode,
        decode : decode
    }

    // Hagamoslo siempre!
    window.cipher = {
        encode,
        decode,
    }

    ````

## Recuerda

- Clona el repositorio
- Instala las dependencias del proyecto

```bash

npm install

````