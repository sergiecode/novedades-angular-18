# Novedades de Angular 18

### Signal INPUTS

Las signal inputs permiten enlazar valores desde componentes padres, similar a @Input. Sin embargo al ser signals pueden cambiar durante el ciclo de vida del componente. Angular admite dos variantes de entradas de señal:
Entradas opcionales: Son opcionales de forma predeterminada. Se puede especificar un valor inicial explícito, o Angular usará implícitamente 'undefined' como valor inicial.
Entradas requeridas: Siempre tienen un valor del tipo de entrada dado. No puede haber un valor inicial, y se declaran usando la función 'input.required'.

### Signal OUTPUTS

Nueva forma de declarar outputs (salidas) en Angular que proporciona una API más sencilla y segura para emitir valores desde componentes a componentes padre. 

Ofrece mejoras en la seguridad de tipos y la limpieza automática de outputs. Los Signal Outputs se pueden declarar mediante las funciones output() y outputFromObservable(), reduciendo la necesidad de código repetitivo y complejidades innecesarias.

### Signal QUERIES

Las consultas de señal son una forma de buscar elementos hijos y leer valores de sus inyectores dentro de un componente o directiva. Puedes utilizar las funciones viewChild y viewChildren para consultas de vista, y contentChild y contentChildren para consultas de contenido.

### MODEL INPUTS

Establecer conexiones de datos bidireccionales entre componentes padre e hijo, lo cual no era posible con las señales de solo lectura previamente disponibles. Esto se logra utilizando una sintaxis específica en el código, como se muestra en el ejemplo de un componente de casilla de verificación personalizado

### NG-CONTENT ACTUALIZADO

ng-content es una directiva que se utiliza para insertar contenido dentro de un componente desde fuera de este. Anteriormente, no era posible especificar un contenido por defecto y ahora es posible

### Propiedad events para formularios

Las clases FormControl, FormGroup y FormArray de los formularios de Angular ahora exponen una propiedad llamada eventos, que te permite suscribirte a un flujo de eventos para este control de formulario. 

### REDIRECCIÓN de rutas con funciones

La propiedad redirectTo en las rutas ahora puede aceptar una función que devuelve una cadena. Esto proporciona una mayor flexibilidad al redireccionar

### DEFER estable

Permite cargar estos recursos solo cuando se necesitan, lo que puede mejorar el rendimiento de la aplicación. Se puede configurar para cargar en diferentes condiciones, como cuando el navegador está en estado de reposo, cuando el elemento entra en la vista, cuando se produce una interacción con el elemento, entre otros. 

### NUEVA WEB OFICIAL

Si bien el lanzamiento de la versión 17 había introducido la plataforma web, ambas versiones coexistían temporalmente debido a la transición de características y asistencias migratorias pendientes. Actualmente, la web oficial se unifica en una única dirección: https://angular.dev/

### ANGULAR MATERIAL 3

Llega la nueva versión estable de Angular material para Angular 18 donde se han tomado en cuenta todos los feedbacks realizados por la comunidad de Angular. Nuevos temas y documentación que encontrarás en:
https://material.angular.io/
y https://m3.material.io/

### PUBLIC/ASSETS

En Angular veníamos acostumbrados a poder utilizar dentro de nuestra carpeta SRC archivos estáticos pero en Angular 18, este ya no es el caso. Para poder utilizar archivos estáticos hay que utlizar la carpeta public y las URLS deben apuntar hacia adentro de esta carpeta de forma “absoluta”