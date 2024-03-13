# GRASP (General Responsibility Assignment Software Patterns)

Son una serie de principio generales de software para asignación de responsabilidades en la programación orientada a objetos.

La creación de sistemas de software mantenibles, escalables y reutilizables es la base del desarrollo de software. Para lograr estos objetivos, es esencial comprender y aplicar el conjunto correcto de principios de diseño.

Ellos son:

### Experto en la información

Dado un objeto, ¿cuáles responsabilidades pueden ser asignado y cuáles no?
El principio experto en la información dice asignar la responsabilidad a la clase que tiene la información necesaria para cumplir con la responsabilidad.

Este principio promueve la encapsulación y garantiza que cada clase sea responsable de gestionar sus datos y comportamiento.

En el siguiente ejemplo, el empleado es el indicado para calcular su propio salario. A diferencia de lo que ocurre en el mundo real, que sería el departamento de Personal.

    class Employee {
        private double baseSalary;
        private double hoursWorked;

        public double calculateSalary() {
            return baseSalary + hoursWorked * hourlyRate;
        }
    }

### Creador

La creación de objetos es una de las actividades más comunes en un sistema orientado a objetos. Consecuentenemente, es útil tener un principio general para asignar la responsabilidad de creación.

El principio Creador nos ayuda a identificar quién debe ser el responsable de la creación de nuevos objetos.

La clase B es un creador de objetos de la clase A, si uno o más de las siguientes condiciones es cierta:

- B contiene/agrega objetos de A
- B registra instancias de objetos de A
- B usa estrechamente objetos de A
- B tiene los datos de inicialización a ser pasados cuando es creado A

Entonces B es un experto en la creación de A

Una de las consecuencias de usar este principio es la visibilidad entre la clase creada y la clase creador. Una ventaja es el bajo acoplamiento, lo cual supone facilidad de mantenimiento y reutilización.

En el siguiente ejemplo, la factura es la encargada de crear los objetos de los items de la misma. Si por ejemplo, la creación de InvoiceItem cambia (porque se agrega un nuevo campo al contructor, u otro motivo), los clientes de Invoice no se ve afectados.

    class Invoice {
        private List<InvoiceItem> items;

        public Invoice () {
            this.items = new List<InvoiceItem>();
        }

        public void AddItem(string description, int amount) {
            this.items.Add(new InvoiceItem (description, amount));
        }
    }

    class InvoiceItem {

        private string description;
        private int amount;

        public InvoiceItem(string description, int amount){
            this.description = description;
            this.amount = amount;
        }
    }

Esto está muy ligado a la relación entre clases. En [este post](../classes-types-relations/content.md) podes encontrar mas info.

### Patrón controlador

El Patrón controlador sirve como intermediario entre una interfaz y el lógica que la implementa. Asigna la responsabilidad de manejar los eventos del sistema en una clase dedicada, que gestiona y coordina el comportamiento del sistema.

Normalmente, un controlador debe delegar a otros objetos el trabajo que hay que hacer.

Un controlador no es un objeto de interfaz de usuario responsable de recibir o manejar un evento del sistema. Un controlador define el método para la operación del sistema asociada al evento.

En el siguiente ejemplo, la clase AuthenticationController puede manejar eventos relacionados con el usuario y delegar el procesamiento real a otras clases.

    class UserService {
        public void registerUser(String username, String password) {
        }
    }

    class AuthenticationController {
        private UserService userService;

        public UserController() {
            this.userService = new UserService();
        }

        public void register(String username, String password) {
            userService.registerUser(username, password);
        }
    }

    public class Main {
        public static void main(String[] args) {
            UserService userService = new UserService();
            UserController userController = new UserController(userService);
            userController.register("user1", "password1");
        }
    }

### Alta cohesión

La cohesión se refiere al grado en que los elementos de un módulo permanecen juntos.​ Mide la fuerza de la relación entre las piezas de un módulo.

Es un tipo de medición ordinal y se describe generalmente como "cohesión alta" o "cohesión baja". Siempre se busca una cohesión alta, ya que aporta los siguientes beneficios:

- Mantenibilidad
- Legibilidad
- Reutilización

En el siguiente ejemplo, vemos como el evento button_click asociado a un botón de la interfaz gráfica de usuario, realiza 2 tareas. La 1era es gestionar el evento en sí, y la 2da es realizar el login en el sistema

    public void button_click(User user) {

    }


### Bajo acoplamiento

### Polimorfismo

### Fabricación pura

### Indirección

### Variaciones Protegidas



https://home.cs.colorado.edu/~kena/classes/5448/f12/presentation-materials/rao.pdf

https://es.wikipedia.org/wiki/GRASP

https://medium.com/@in10se/mastering-grasp-design-principles-for-better-software-design-a21b5ec29e89#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4YmY1YzM3NzJkZDRlN2E3MjdhMTAxYmY1MjBmNjU3NWNhYzMyNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU5MDE4MTE1MzQ3OTIzNDg4MjciLCJlbWFpbCI6ImVtaWxpYW5vYWd1c3RpbmdhbGxvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MTAyMDA3NTgsIm5hbWUiOiJFbWlsaWFubyBHYWxsbyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKbVVPMnplZEx6bFR1VFN4eE14N2J3VUtLVU51OGUwZVFVTFA2V3FBdGVkdE09czk2LWMiLCJnaXZlbl9uYW1lIjoiRW1pbGlhbm8iLCJmYW1pbHlfbmFtZSI6IkdhbGxvIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MTAyMDEwNTgsImV4cCI6MTcxMDIwNDY1OCwianRpIjoiZWY1Yjk1ZTAxYTNmZTlkYTAzMmU2NjM0NGJiYTkyM2VmNWQyOGM1ZiJ9.QfeHbPCga1zKoMucF1cVgfQvSkej4YBrHrBPlsIZoBg3be86VwufhW2m9sewnkcGY05gK-DZFJx5XvbLKfAHE2SD2Lj7eNKONg33kil9epBXH_RFal-MY8hi9KlZivcd6_M-2S16C1t6UTTmvh8DxP6TtwVJCm3tgBgd2sfv2XcxewqzSjKWT_WgG_-Y_YKIu5R-z6A5lG0ONeWNd89sugmbR_ubzqJOk3ZNdXGshP4XWwGIVDYvacCqd5fLkzUjXCs-QiUVZlsj7s9w4qbIISnKB0jqs9qq4GWC_fvgj4IohC3p3XhbQiBQHy0Z8FIzpU8q6i3OAnWNx-KF4gMlQQ

https://patrickkarsh.medium.com/object-oriented-design-with-grasp-principles-8049fa63e52