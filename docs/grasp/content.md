# GRASP (General Responsibility Assignment Software Patterns)

Son una serie de principio generales de software para asignación de responsabilidades en la programación orientada a objetos.

La creación de sistemas de software mantenibles, escalables y reutilizables es la base del desarrollo de software. Para lograr estos objetivos, es esencial comprender y aplicar el conjunto correcto de principios de diseño.

Ellos son:
- [Experto en la informacion](#Experto en la informacion)
- [Creador](#Creador)
- [Patrón controlador](#Patrón controlador)
- [Alta cohesión](#Alta cohesión)
- [Bajo acoplamiento](#Bajo acoplamiento)
- [Polimorfismo](#Polimorfismo)
- [Fabricación pura](#Fabricación pura)
- [Indirección](#Indirección)
- [Variaciones Protegidas](#Variaciones Protegidas)

- [Experto en la información](#experto-en-la-información)
- [Creador](#creador)
- [Patrón controlador](#patrón-controlador)
- [Alta cohesión](#alta-cohesión)
- [Bajo acoplamiento](#bajo-acoplamiento)
- [Polimorfismo](#polimorfismo)
- [Fabricación pura](#fabricación-pura)
- [Indirección](#indirección)
- [Variaciones Protegidas](#variaciones-protegidas)
>>>>>>> 7025fd079573fa02e7f97b4a97617cf685bfa6fa


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

La cohesión se refiere al grado en que los elementos permanecen juntos.​ Mide la fuerza de la relación entre ellos.

Es un tipo de medición ordinal y se describe generalmente como "cohesión alta" o "cohesión baja". Siempre se busca una cohesión alta, ya que aporta los siguientes beneficios:

- Mantenibilidad
- Legibilidad
- Reutilización

En el siguiente ejemplo, vemos como el evento button_click asociado a un botón de la interfaz gráfica de usuario, realiza 2 tareas. La 1era es gestionar el evento en sí, y la 2da es realizar el login en el sistema

    public void button_click(User user) {
            UserService userService = new UserService();
            UserController userController = new UserController(userService);
            userController.register("user1", "password1");
    }


### Bajo acoplamiento

El acoplamiento es una medida de la fuerza con un elemento está conectado a, tiene conocimiento de, o se basa en otros elementos. Estos elementos incluyen sistemas, paquetes, clases y métodos.
El acoplamiento está muy relacionado con la cohesión. Un bajo acoplamiento normalmente se correlaciona con una alta cohesión, y viceversa.

El acoplamiento bajo implica minimizar las dependencias entre estos elementos para reducir el impacto de los cambios y mejorar la mantenibilidad. Este principio fomenta elementos independientes y modulares que se pueden modificar fácilmente sin afectar otras partes del sistema.

Algunas características de bajo acoplamiento son:
- No es dependiente de muchos elementos.
- Fluidez, porque es fácil de comprender.
- Flexibiblidad, porque es fácil de modificar.
- Reusabilidad, porque es fácil de reutilizar.
- Robusticidad, porque no está constantemente afectada por el cambio.

#### Acoplamiento directo

Tipo X tiene un atributo que hace referencia a una instancia Tipo Y.

    class X {
        private Y instancia;

        public void X() {
        }
    }
    
Tipo X tiene un método que hace referencia a una instancia de Tipo Y, por cualquier medio. Estos suelen incluir un parámetro o variable local de tipo Tipo Y, o el objeto de retorno de un mensaje es una instancia de Tipo Y.

    class X {
        public void X(Y instance) {
        }
    }


Tipo X es una clase derivada de Tipo Y.

    class X : Y {
        public void X() {
        }
    }



#### Acoplamiento indirecto

De un Tipo X a un Tipo Z será cuando el primero envía mensajes a objetos de Tipo Z que devuelvan los objetos de Tipo Y por un acoplamiento directo

    class Y {
        public Z getZ(){
        }
    }

    class X {
        private Y instance;
        public void m(){
            instance.getZ().m();
        }
    }

Acoplamiento aferente de una clase es el conjunto de clases que dependen de dicha clase. X tiene un acoplamiento aferente con Z, Y.

Acoplamiento eferente de una clase es el conjunto de clases de las que depende de dicha clase. Z, Y tiene un acoplamiente eferente con X.

    class Z {
        private X instance;
    }

    class Y {
        private X instance:
    }

    class X {

    }


### Polimorfismo

En teoría de lenguaje, el polimorfismo se define como enlace dinámico de expresiones al tipo devuelto por su evaluación.

El polimorfismo implica el uso de herencia e interfaces para permitir que diferentes clases implementen el mismo comportamiento u operación. Este principio permite una mayor flexibilidad y un mantenimiento más sencillo del código al permitir que el sistema maneje diferentes implementaciones sin modificaciones en el código existente.

En el siguiente ejemplo, la clase main renderiza todas las formas que tiene cargadas el array 'shapes' sin importar que tipo figura es en concreto.

    interface Shape {
        public void draw();
    }

    class Circle : Shape {
        public void draw() {
            // Some logic here
        }
    }

    class Triangle : Shape {
        public void draw() {
            // Some logic here
        }
    }

    class main {
        private Shape[] shapes;

        void main () {
            this.shapes = new Shape[];
        }

        void Add(Shape shape){
            this.shapes.add(shape);
        }

        void void Render () {
            for (int i = 0; i < this.shapes.count(); i++){
                this.shapes[i].draw();
            }
        }
    }

### Fabricación pura

La fabricación pura implica la creación de una clase artificial para cumplir con una responsabilidad específica cuando no existe una clase adecuada. Este principio tiene como objetivo mantener una alta cohesión y un bajo acoplamiento evitando la asignación de responsabilidades no relacionadas a las clases existentes.
Ejemplo: en una aplicación de almacenamiento de archivos, se puede crear la clase FileStorage para manejar las operaciones de almacenamiento de archivos, separándola de la lógica empresarial principal.

    class FileStorage {
        public void saveFile(String filePath, byte[] content) {
            // Save file to storage
        }

        public byte[] readFile(String filePath) {
            // Read file from storage
            return new byte[0];
        }
    }

    class Document {
        private String filePath;
        private byte[] content;
        private FileStorage fileStorage;

        public void save() {
            fileStorage.saveFile(filePath, content);
        }

        public void load() {
            content = fileStorage.readFile(filePath);
        }
    }

### Indirección

La indirección introduce una clase u objeto intermedio para mediar entre otras clases, lo que ayuda a mantener un bajo acoplamiento y simplificar las interacciones. Este principio se puede aplicar a través de varios patrones, como los patrones Fachada o Adaptador.
Ejemplo: en un sistema de notificación, se puede introducir una clase NotificationService para enviar notificaciones a través de diferentes canales, como correo electrónico o SMS, sin acoplar directamente las clases de remitente y destinatario.

    interface NotificationChannel {
        void sendNotification(String message);
    }

    class EmailNotificationChannel implements NotificationChannel {
        public void sendNotification(String message) {
            // Send email notification
        }
    }

    class SMSNotificationChannel implements NotificationChannel {
        public void sendNotification(String message) {
            // Send SMS notification
        }
    }

    class NotificationService {
        private List<NotificationChannel> channels;

        public void sendNotification(String message) {
            for (NotificationChannel channel : channels) {
                channel.sendNotification(message);
            }
        }
    }

### Variaciones Protegidas

Las variaciones protegidas implican encapsular variaciones y cambios en el sistema detrás de interfaces estables para minimizar el impacto de los cambios y aumentar la solidez del sistema. Este principio se puede aplicar mediante el uso de abstracciones, como interfaces o clases abstractas, para ocultar detalles de implementación.
Ejemplo: en un sistema de procesamiento de pagos, la interfaz PaymentGateway protege el sistema de cambios en las implementaciones de diferentes métodos de pago, como CreditCardPayment o PayPalPayment.

    interface PaymentGateway {
        void processPayment(double amount);
    }

    class CreditCardPayment implements PaymentGateway {
        public void processPayment(double amount) {
            // Process credit card payment
            System.out.println("Processing credit card payment: " + amount);
        }
    }

    class PayPalPayment implements PaymentGateway {
        public void processPayment(double amount) {
            // Process PayPal payment
            System.out.println("Processing PayPal payment: " + amount);
        }
    }

    class ShoppingCart {
        private PaymentGateway paymentGateway;

        public void setPaymentGateway(PaymentGateway gateway) {
            this.paymentGateway = gateway;
        }

        public void checkout(double amount) {
            paymentGateway.processPayment(amount);
        }
    }


### Fuentes
[Wikipedia](https://es.wikipedia.org/wiki/GRASP)
[Medium](https://medium.com/@in10se/mastering-grasp-design-principles-for-better-software-design-a21b5ec29e89#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4YmY1YzM3NzJkZDRlN2E3MjdhMTAxYmY1MjBmNjU3NWNhYzMyNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU5MDE4MTE1MzQ3OTIzNDg4MjciLCJlbWFpbCI6ImVtaWxpYW5vYWd1c3RpbmdhbGxvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MTAyMDA3NTgsIm5hbWUiOiJFbWlsaWFubyBHYWxsbyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKbVVPMnplZEx6bFR1VFN4eE14N2J3VUtLVU51OGUwZVFVTFA2V3FBdGVkdE09czk2LWMiLCJnaXZlbl9uYW1lIjoiRW1pbGlhbm8iLCJmYW1pbHlfbmFtZSI6IkdhbGxvIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MTAyMDEwNTgsImV4cCI6MTcxMDIwNDY1OCwianRpIjoiZWY1Yjk1ZTAxYTNmZTlkYTAzMmU2NjM0NGJiYTkyM2VmNWQyOGM1ZiJ9.QfeHbPCga1zKoMucF1cVgfQvSkej4YBrHrBPlsIZoBg3be86VwufhW2m9sewnkcGY05gK-DZFJx5XvbLKfAHE2SD2Lj7eNKONg33kil9epBXH_RFal-MY8hi9KlZivcd6_M-2S16C1t6UTTmvh8DxP6TtwVJCm3tgBgd2sfv2XcxewqzSjKWT_WgG_-Y_YKIu5R-z6A5lG0ONeWNd89sugmbR_ubzqJOk3ZNdXGshP4XWwGIVDYvacCqd5fLkzUjXCs-QiUVZlsj7s9w4qbIISnKB0jqs9qq4GWC_fvgj4IohC3p3XhbQiBQHy0Z8FIzpU8q6i3OAnWNx-KF4gMlQQ)