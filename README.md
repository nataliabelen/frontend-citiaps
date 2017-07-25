# Capacitación FrontEnd + UX

En este repositorio se va a ir subiendo material para el curso de tecnologías de FrontEnd y UX.


## Unidad 1. Html + CSS

### Lecturas
1. [Principios de HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5)
2. [Layouts en CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)
3. [Layouts con Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
4. [Tansiciones](https://www.w3schools.com/css/css3_transitions.asp) y [Animaciones](https://css-tricks.com/almanac/properties/a/animation/)
5. En [CSS Avanzado](http://www.htmldog.com/guides/css/advanced/) hay información sobre otros temas como sombreado, bordes redondeados, transformaciones, gradientes y más.

6. Preprocesamiento con [SASS](http://sass-lang.com/guide), de manera opcional pueden ver esta lectura con varias otras [técnicas avanzadas](https://m.alphasights.com/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)

## Unidad 2. Javascript
### Lecturas
#### Variables
* Declaración de variables con [var](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/var), [let](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let) y [const](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const)

#### Programación funcional
* Este enlace sobre [programación funcional en Javascript](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) explica el uso de funciones como `map()`, `reduce()` y `filter()` en contraste con el enfoque imperativo.

#### Javascript Asíncrono

* Se deben entender las  [promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise), este patrón se usa en frameworks de aplicaciones como Angular.
* Otro patrón común es el de [Callbacks](http://recurial.com/programming/understanding-callback-functions-in-javascript/) que involucra llamadas a funciones dentro de otras funciones cuando termine una llamada asíncrona. Hay que tener atención con evitar el [Callback Hell](http://callbackhell.com/)

#### EcmaScript 6

Funcionalidades nuevas del lenguaje.

* Se recomienda entender principalmente las [funciones flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions)

* [Function spreading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

* [Resumen](https://carlosazaustre.es/blog/ecmascript-6-el-nuevo-estandar-de-javascript/) de funcionalidades nuevas de Ecma6

 __Opcional__: [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes) en javascript

#### Empaquetamiento de Aplicaciones JavaScript

En el empaquetamiento de aplicaciones JS se han utilizado herramientas como [Grunt](https://gruntjs.com/), [Gulp](http://gulpjs.com/). La herramienta que utilizaremos en los proyectos es [Webpack](https://webpack.github.io/docs/tutorials/getting-started/).
* [Tutorial de Webpack 2 en español](https://medium.com/@lehiarteaga/tutorial-webpack-2-f4a1e8b3473c)

#### Frameworks para aplicaciones JavaScript

##### Vue.js
* [Vue JS the simple revolution](https://www.slideshare.net/RafaelCasusoRomate/vuejs-the-simple-revolution)
* [Documentación oficial](https://vuejs.org/v2/guide/)

## Unidad 3. Visualizaciones con D3.js
### Conceptos de D3.
* Tutorial general [Dashing D3](https://www.dashingd3js.com/table-of-contents)
* [Proceso de visualización](https://www.dashingd3js.com/the-data-visualization-process) general de Ben Fry explicado en Dashing D3.
* Patrón general de [update](https://bl.ocks.org/mbostock/3808234), del creador de D3.
* [Explicación](https://bost.ocks.org/mike/join/) del creador de D3 sobre los eventos enter, exit y update.
* [Explicación](http://animateddata.co.uk/lab/d3enterexit/) alternativa sobre las funciones anteriormente mencionadas.
* [Curso de D3 en castellano](http://gcoch.github.io/D3-tutorial/).
* [Paper](https://www.autodeskresearch.com/publications/samestats) y datos con la explicación de la "Docena del Datasaurio", utilizados para el ejemplo de transiciones en D3.
* [Cambios entre D3 versión 3 y versión 4](https://github.com/d3/d3/blob/master/CHANGES.md). La principal diferencia consiste en que el espacio de nombre ahora es plano, esto significa que en el código en versión 3 `d3.scale.linear` pasó a ser `d3.scaleLinear`en la versión 4.

### Códigos de ejemplo
* Enlace a [Codepen](https://codepen.io/dfavila/pens/public/) con ejemplos vistos en clase.
