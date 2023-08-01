<h1 align="center"> Programación Orientada a Objetos </h1>

<img src="https://www.freecodecamp.org/news/content/images/size/w1600/2022/09/OOP.png" />

<h2 align="center"> ¿Cómo surgió a POO? </h2>

Hace varias décadas atrás, el paradigma de programación predominante era el de la **programación estructurada**, que básicamente consistía en un montón de líneas de código unas seguidas de otras, que permitían describir todas las instrucciones que componían al programa. Se disponía de herramientas como **GOTO** o **GOSUB** para poder hacer saltos de línea a distintas partes del programa, entre otras. Esto, cómo se podrán imaginar, traía bastantes problemas, sobre todo cuando se trataba de aplicaciones complejas:

- Bloques de código muy largos.
- Código Spaghetti. Muy dificil rastrear errores.
- En caso de error, todo el programa se cae.
- Aplicaciones muy dificiles de mantener
- Aplicaciones en las que agregarle nuevas funcionalidades es muy dificl (escalabilidad).

Para solucionar estos problemas, se optó por un cambio radical, se desarrolló un nuevo paradigma de programación: **Programación Orientada a Objetos**, **POO** por sus siglas en español, y **OOP** en inglés (*Object-oriented programming*).
Como criterio para crear este nuevo paradigma, la comunidad de desarrolladores del momento decidió optar por una solución que sea lo más amigable y fácil de entender posible, es decir, trasladar lo que vemos en la vida real a código de programación: los **objetos** con los cuales interactuamos todos los días. 

<h2 align="center"> ¿Qué es la POO? </h2>

La **P**rogramación **O**rientada a **O**bjetos es un paradigma de programación que nos permite observar los problemas a resolver como objetos. Dicho de otra forma, nos permite pensar en las relaciones o interacciones de los diferentes componentes del sistema, y no centrarnos tanto en la lógica pura de los programas.

<h3>Pero... ¿Cómo hacer esto?</h3>

Cualquier objeto que referencie a un dato, va a tener propiedades y métodos. Las propiedades nos describen cómo es ese objeto, color, temperatura, cantidad, id, etc. Los métodos nos describen lo que el objeto puede hacer, imprimir en la terminal, sumar numeros, consultar datos a una API, etc.
Ahora bien, imaginemos que necesitamos crear muchos objetos, todos con características idénticas o similares, y nos importa mucho que la estructura de cada uno sea la misma, sin perder su forma ¿Existe alguna forma para determinar esa estructura, antes de crear cada objeto, y así poder crear automáticamente objetos en base a esas normas preestablecidas? ¡Claro que sí! Es acá dónde entra el concepto de **clases**. <br><br>

<img src="https://static.platzi.com/media/articlases/Images/image%28858%29.png"/>  <br><br>

Podemos ver a las clases como **fábricas de objetos**, en las que están detalladas todas las caracterísitcas que tendrán los objetos fabricados en ellas. <br><br>  

<p align="center"><img src="https://profile.es/wp-content/media/POO.jpg"/></p>

<h2 align="center"> Beneficios de la POO </h2>

- Reutilización de código.
- Posibilidad de convertir cosas complejas en estructuras simples reproducibles.
- Evita la duplicación del código.
- Permite trabajar en equipo gracias al **encapsulamiento**, ya que minimiza la posibilidad de duplicar funciones cuando varias personas trabajan sobre un mismo objeto al mismo tiempo.
- Al estar la clase bien estructurada, permite la fácil corrección de errores.
- Protege la información a través de la encapsulación.
- La abstracción nos permite construir sistemas más complejos y de una forma más sencilla y organizada.


<h2 align="center"> ¿Cómo implementar la POO en JS/TS? </h2>

**JavaScript** es un lenguaje multiparadigma, lo que nos permite trabajar con los paradigmas de la programación funcional y orientada a objetos.

A partir de la versión de **ECMAScript** 2015, **JavaScript** incorporó las clases al estándar, lo que nos permite usar las palabras reservadas `class`, `get`, `set`, `static`, `extends`, para distintos objetivos.   


Veamos un ejemplo de cómo crear una clase en **TypeScript**:

    class User {
        name: string;
        id: number;

        constructor(username: string, id: number) {
            this.name = username;
            this.id = id;
        }

        getId() {
            return this.id;
        }
    }

    const demian = new User('Demian', 369963);

Con la *keyword* `class` definimos la clase `User`. Esta clase creará objetos con dos propiedades: `name` de tipo string, y `id` de tipo number.


El método `constructor` que aparece en el ejemplo, es un tipo especial de método que se ejecuta automáticamente cuando instanciamos una clase usando la *keyword* `new`. Este método puede tener parámetros que podemos configurar como los valores iniciales del objeto creado. Éste método nos permite establecer ciertos datos mínimos necesarios para crear un objeto a partir de la clase en cuestión.

En el cuerpo de `constructor()` tenemos:

- `this.name = username`
- `this.id = id` 

¿Qué es lo que está pasando allí? La palabra reservada `this`, o `esto` por su significado en español, hace referencia al objeto instanciado. Es decir que cuando vemos `this.name = name` estamos simplemente diciéndole al intérprete `este` objeto que acabas de crear (el que se asocia a la constante demian), va a tener como valor de su propiedad `name`, el valor que pasaron como argumento al llamar a la función `new`, es decir, el valor de `username`, que en este caso es `'Demian'`. La misma lógica aplica para `this.id = id`.

`console.log(demian);` muestra `User { name: 'Demian', id: 369963 }` en la terminal.


Por último, tenemos el método `getId()` que lo único que hace es retornar el `id` del objeto creado. Recuerden que los métodos son, en el mundo de la programación en general, **funciones que pertenecen a una clase específica**. Esto es válido también para **JavaScript**, con el agregado de que también se consideran métodos a las funciones que son valores de propiedades de objetos. Qué, si lo piensan, es básicamente lo mismo.


<h2 align="center"> Buenas prácticas </h2>


- No conviene usar parametros opcionales en las funciones porque puede llevar a errores en nuestras aplicaciones: instancio un objeto sin el parámetro, por ser opcional, y trato de aplicarle el método `toLowerCase()` a un dato tipo `undefined`, lo que resulta en error.

- Para corroborar que un objeto haya sido creado por una clase en particular, existe el operador `instaceOf`, que nos devuelve `true` o `false` según el caso.

- Usar **sustantivos** y estándar de nomenclatura **PascaCase** para nombrar clases. Cuando hablamos de clases, hablamos de entidades que pueden ser del mundo real, como usuarios, canciones, o abstractas, como un router para manejar las rutas/endpoints de una app. Es decir, hablamos de cosas, y cuando nos referimos a ellas usamos sustantivos.

- Conviene usar a las clases cuando sea estrictamente necesario. Por ejemplo, cuando tenemos que agrupar ciertas funcionalidades que están muy relacionadas, que en conjunto, logran un objetivo de manera simple y elegante. O, por otra parte, cuando tenemos que crear varios objetos idénticos o similares, las clases nos ayudan a no repetir código y a agrupar lógica en común.

<h2 align="center"> LINKS </h2>

- [Clases vs. Fábricas](https://www.youtube.com/watch?v=Do81bfct_bk)
- [Clases en JavaScript](https://www.youtube.com/watch?v=R1LmvJ1_4QM)
- [Operador instanceOf](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/instanceof)
- [Orígen de la POO](https://www.youtube.com/watch?v=pHVdGbVK7Cw&list=PLU8oAlHdN5Bmfy5fL2-ByDUGa9cMagEXK&index=2)