# Relación por colaboración entre clases
Si dos objetos colaboran, a través del paso de mensajes, sus respectivas clases están relacionadas.

## Relación de Composición/Agregación

Es la relación que se constituye entre el todo y la parte. Se puede determinar que existe una relación de composición entre la clase A (el todo) y la clase B (la parte), si un objeto de la clase A “tiene un” objeto de la clase B.

La relación de composición no abarca simplemente cuestiones físicas (libro y páginas), como “contiene un” (aparato digestivo y bolo alimenticio). <br>
Sino también, a relaciones lógicas que respondan adecuadamente al todo y a la parte
como “posee un” (propietario y propiedades).


### Composición
- Es una composición donde la vida del objetos de la clase contenida debe coincidir con la vida de la clase contenedor.
- Los componentes constituyen una parte del objeto compuesto.
- La supresión del objeto compuesto conlleva la supresión de los componentes.
- Los componentes no pueden ser compartidos por varios objetos compuestos.
- Composición fuerte

Clases persona y cabeza: una cabeza solo puede pertenecer a una persona y no puede existir una cabeza sin su persona.

    class Todo {
        private Parte parte;

        public Todo(){
            this.parte = new Parte();
        }
    }

    class Parte {
    }

![](/posts/post1/composicion.svg)

### Agregación
- Es una composición donde la vida del objetos de la clase contenida no debe coincidir con la vida de la clase contenedor.
- Los componentes constituyen opcionalmente una parte del objeto compuesto.
- La destrucción del compuesto no conlleva la destrucción de los componentes.
- Los componentes pueden ser compartidos por varios compuestos.
- Composición débil

Clases persona y familia: un persona puede pertenecer a la familia en que nació y a las que posteriormente formó y seguir vivo aunque ya no existan dichas familias.

    class Agregación {
        private List<Agregado> agregados;

        public Agregación(){
            this.agregados = new List<Agregado>();
        }

        public void Add(Agregado agregado){
            this.agregados.Add(agregado);
        }

        public void Remove(Agregado agregado){
            this.agregados.Remove(agregado);
        }
    }

    class Agregado {
    }

![](/posts/post1/agregacion.svg)


## Relación de Asociación
Es la relación que perdura entre un cliente y un servidor determinado.

Existe una relación de asociación entre la clase A, el cliente, y la clase B, el servidor, si un objeto de la clase A disfruta de los servicios de un objeto determinado de la clase B (mensajes lanzados) para llevar a cabo la responsabilidad del objeto de la clase A en diversos momentos creándose una dependencia del objeto servidor.

    class Asociación {
        private Asociado asociado;

        public Asociación(Asociado asociado){
            this.Set(asociado);
        }

        public void Set(Asociado asociado){
            this.asociado = asociado;
        }
    }

    class Asociado {
    }

![](/posts/post1/asociacion.svg)

## Relación de Dependencia/Uso
Es la relación que se establece momentáneamente entre un cliente y cualquier servidor.

Existe una relación de uso entre la clase A, el cliente, y la clase B, el servidor, si un objeto de la clase A disfruta de los servicios de un objeto de la clase B (mensajes lanzados) para llevar a cabo la responsabilidad del objeto de la clase A en un momento dado sin dependencias futuras.

    class Uso {
        public void Metodo(Usado parametro){
            parametro.HacerAlgo("unValor");
        }
    }

    class Usado {
    }

![](/posts/post1/uso.svg)

## Comparativa de Relaciones entre Clases por Colaboración
![](/posts/post1/comparativaRelaciones.jpg)

## Relaciones por transmisión entre clases
Si una clase transmite a otra todos sus miembros, atributos y métodos, para organizar una jerarquía de clasificación.

## Relación de Herencia por Extensión
La clase descendiente implementa todas las operaciones de la clase base, añadiendo o redefiniendo partes especializadas

![](/posts/post1/herenciaEspecializacion.svg)


## Relación de Herencia por Implementación
La especialización transforma el concepto de la clase base a la clase derivada

![](/posts/post1/herenciaExtensión.svg)