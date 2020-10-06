---
title: Sets vs Array
date: "2020-05-10T22:12:03.284Z"
description: "Haz que tu código sea mas rápido usando set de javascript, Si solo usas matrices, te estas perdiendo un gran truco"
cover: ./speed.jpg
is_favorite: true
---

![](./speed.jpg)

En este artículo, hablaremos sobre cómo los Sets de JavaScript pueden hacer que su código sea más rápido, especialmente a medida que escala. Existe un cruce significativo entre lo que puede hacer una matriz y lo que puede hacer un Set. Pero el uso de Sets a menudo traerá beneficios de tiempo de ejecución que son imposibles de lograr con arreglos. En este artículo, exploraremos cómo.

### ¿En qué se diferencian los sets?

La diferencia más fundamental es que las matrices son una _colección indexada_ . Eso significa que el valor de los datos en una matriz está ordenado por el índice.

```javascript
const arr = [A, B, C, D];
console.log(arr.indexOf(A)); // Resultado: 0
console.log(arr.indexOf(C)); // Resultado: 2
```

Por el contrario, los sets son una _colección con llaves_ . En lugar de utilizar índices, los conjuntos ordenan sus datos mediante claves. Los elementos de un conjunto son iterables en el orden de inserción y no pueden contener datos duplicados. En otras palabras, cada elemento de un conjunto debe ser único.

### ¿Cuáles son los principales beneficios?

En una comparación directa, los conjuntos tienen varias ventajas sobre las matrices, especialmente cuando se trata de un tiempo de ejecución más rápido:

- **Buscar un elemento:** usar `indexOf()`o `includes()`comprobar si un elemento existe en una matriz es lento.
- **Eliminación de un elemento:** en un conjunto, puede eliminar un elemento por su valor. En una matriz, el equivalente se usa `splice()`según el índice de un elemento. Como en el punto anterior, la dependencia de índices es lenta.
- **Insertar un elemento:** es más rápido agregar un elemento a un conjunto que agregar un elemento a una matriz usando `push()`, `unshift()`o un método equivalente.
- **Almacenamiento de NaN:** No puede utilizar `indexOf()` o `includes()` para encontrar el valor `NaN` , mientras que un conjunto _es_ capaz de almacenar este valor.
- **Eliminación de duplicados: los** objetos de conjunto solo almacenan valores únicos. Si desea evitar almacenar duplicados, esta es una ventaja significativa sobre las matrices, donde se necesitaría código adicional para tratar los duplicados.

**\*Nota\*** _: Para obtener una lista completa de los métodos de Set integrados, el mejor lugar para ir es_ [_MDN Web Docs_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Methods) _._

### ¿Exactamente cuánto más rápido son los sets?

Aunque el tiempo de ejecución puede variar significativamente según el sistema que se utilice, el tamaño de los datos proporcionados y otras variables, espero que los resultados de mi prueba le den una idea práctica de lo rápido que _pueden_ ser los Sets . Compartiré tres pruebas simples que hice y los resultados que obtuve.

### Preparando las pruebas

Antes de ejecutar cualquier prueba, creemos una matriz y un conjunto con un millón de entradas cada uno. En aras de la simplicidad, comenzaré en 0 y contaré hasta 999,999.

```javascript
let arr = [],
  set = new Set(),
  n = 1000000;
for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}
```

## Prueba 1: buscar un artículo

Primero, busquemos el número `123123`, que sabemos que devolverá verdadero.

```javascript
let result;
console.time("Array");
result = arr.indexOf(123123) !== -1;
console.timeEnd("Array");
console.time("Set");
result = set.has(123123);
console.timeEnd("Set");
```

Dará como resultado:

```
Array: 0.493ms
Set: 0.024ms
```

El set fue más de 4 veces más rápido.

## Prueba 2: agregar un artículo

Ahora, agreguemos un nuevo elemento a cada colección.

```javascript
console.time("Array");
arr.push(n);
console.timeEnd("Array");

console.time("Set");
set.add(n);
console.timeEnd("Set");
```

Dará como resultado:

```
Array: 0.018ms
Set: 0.003ms
```

El set fue más de 6 veces más rápido.

## Prueba 3: eliminar un elemento

Por último, eliminemos un elemento de cada colección (podemos usar el que acabamos de agregar). No hay un método de matriz incorporado para esto, por lo que crearemos una función auxiliar para mantener todo limpio:

```
const deleteFromArr = (arr, item) => {
  let index = arr.indexOf (item);
  return index! == -1 && arr.splice (index, 1);
};
```

Y aquí está el código para la prueba:

```
console.time ('Array');
deleteFromArr (arr, n);
console.timeEnd ('Array');console.time ('Establecer');
set.delete (n);
console.timeEnd ('Establecer');
```

Dará como resultado:

```
Array: 1.122ms
Set: 0.015ms
```

**¡el set fue 74,13 veces más rápido!**

En general, podemos ver que se pueden realizar mejoras muy significativas en el tiempo de ejecución utilizando un conjunto en lugar de una matriz. Ahora veamos algunos ejemplos prácticos en los que los conjuntos pueden resultar útiles.

### Caso 1: eliminar valores duplicados de una matriz

Si desea eliminar rápidamente valores duplicados de una matriz, puede convertirla en un conjunto. Esta es, con mucho, la forma más concisa de filtrar valores únicos:

```javascript
const duplicateCollection = ["A", "B", "B", "C", "D", "B", "C"];
// Si desea convertir la matriz en un Conjunto

let uniqueCollection = new Set(duplicateCollection);
console.log(uniqueCollection); // Resultado: Conjunto (4) {"A", "B", "C", "D"}

// Si desea mantener sus valores en una matriz,
let uniqueCollection = [...new Set(duplicateCollection)];
console.log(uniqueCollection); // Resultado: ["A", "B", "C", "D"]
```

### Caso 2: una pregunta de una entrevista de Google

En otro artículo, analicé [cuatro soluciones a una pregunta formulada por un entrevistador de Google](https://medium.com/@bretcameron/4-ways-to-solve-a-google-interview-question-in-javascript-12e6eec87576) . La entrevista se realizó usando C ++, pero si fuera en JavaScript, un Set sería una parte necesaria de la solución final.

Si desea ver la solución con mayor profundidad, le recomiendo [leer el artículo](https://medium.com/@bretcameron/4-ways-to-solve-a-google-interview-question-in-javascript-12e6eec87576) , pero aquí hay un resumen rápido de la solución final.

## Pregunta

Dada una matriz desordenada de números enteros y un valor `sum`, devuelva `true`si se pueden agregar dos elementos cualesquiera que sean iguales al valor de `sum`. De lo contrario, regrese `false`.

Entonces, si nos dieran la matriz `[3, 5, 1, 4]`y el valor `9`, nuestra función debería regresar `true`, porque `4 + 5 = 9`.

## Solución

Un gran enfoque para esta pregunta es iterar a través de la matriz, creando un conjunto de cumplidos a medida que avanzamos.

Apliquemos este pensamiento al ejemplo anterior. Cuando nos encontremos `3`podemos agregar `6`a nuestro conjunto de cumplidos porque sabemos que necesitamos encontrar un `sum`de `9`. Luego, cada vez que entremos en contacto con un nuevo valor en la matriz, podemos verificar si está en nuestro Conjunto de complementos. Cuando lleguemos `5`, agregaremos `4`a nuestro conjunto de cumplidos. Luego, cuando finalmente nos encontremos `4`, también lo encontraremos en nuestro Set y así podremos regresar `true`.

Así es como podría verse esa solución:

```
const findSum = (arr, val) => {
  let searchValues = new Set ();
  searchValues.add (val - arr [0]);
  for (sea i = 1, length = arr.length; i <length; i ++) {
    let searchVal = val - arr [i];
    if (searchValues.has (arr [i])) {
      devuelve verdadero;
    } else {
      searchValues.add (searchVal);
    }
  };
  falso retorno;
};
```

Y aquí hay una versión más concisa:

```
const findSum = (arr, sum) =>
  arr.some ((set => n => set.has (n) ||! set.add (sum - n)) (new Set));
```

Debido a que `Set.prototype.has()`tiene una complejidad de tiempo de solo O (1), usar un Conjunto para almacenar cumplidos en lugar de una matriz ayuda a que nuestra solución general tenga un tiempo de ejecución lineal de O (N).

Si, en cambio, dependiéramos de `Array.prototype.indexOf()`o `Array.prototype.includes()`, los cuales tienen una complejidad de tiempo de O (N), el tiempo de ejecución total sería O (N²). ¡Mucho más lento!

Si no se ha sumergido antes en conjuntos de JavaScript, ¡espero haber demostrado lo útiles que pueden ser!
