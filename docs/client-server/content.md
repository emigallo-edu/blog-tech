# Arquitectura Cliente-Servidor y su Aplicación en el Desarrollo de Software

## ¿Qué es la Arquitectura Cliente-Servidor?

La arquitectura cliente-servidor es un modelo de diseño en el que dos entidades principales interactúan: el **cliente** y el **servidor**.

- **Cliente**: Es la parte que realiza solicitudes de servicios o recursos. Generalmente, es el software que interactúa con el usuario final, como un navegador web o una aplicación móvil.
- **Servidor**: Es el componente que procesa las solicitudes del cliente y proporciona una respuesta adecuada. Suele alojarse en la nube o en servidores físicos dedicados.

Este modelo se basa en una **comunicación mediante red**, comúnmente usando el protocolo HTTP/HTTPS en aplicaciones web.

### Funcionamiento Básico

1. El cliente envía una solicitud al servidor (Http Request). Por ejemplo, pedir una página web o datos.
2. El servidor procesa la solicitud y accede a bases de datos, archivos o servicios internos.
3. El servidor devuelve una respuesta al cliente (Http Response). Por ejemplo, una página HTML o datos en formato JSON.
4. El cliente muestra o procesa la información recibida.

![](client-server.svg)

### Alojamiento de archivos (Hosting)
Un servidor web primero debe almacenar los archivos del sitio web, es decir, todos los documentos HTML y sus medios relacionados, incluidas las imágenes, las hojas de estilo CSS, los archivos JavaScript, las fuentes y videos.

Técnicamente, puede alojar todos esos archivos en su propia computadora, pero es mucho más conveniente almacenarlos en un servidor web dedicado que:

- Siempre está funcionando.
- Siempre está conectado a internet.
- Tiene la misma dirección IP todo el tiempo.
- Es mantenido por un proveedor externo.

### Comunicación a través de HTTP
Un servidor web brinda soporte para HTTP (Hypertext Transfer Protocol ó Protocolo de Transferencia de Hipertexto). Como su nombre lo indica, HTTP especifica cómo transferir hypertext (es decir, documentos web vinculados) entre dos computadoras.

Un protocolo es un conjunto de reglas para la comunicación entre dos computadoras. HTTP es un protocolo textual, sin estado.

- Textual: todos los comandos son de texto plano y legible para ser leído por humanos.
- Sin estado: ni el servidor ni el cliente recuerdan las comunicaciones anteriores. Por ejemplo, al confiar solo en HTTP, un servidor no puede recordar la contraseña que ingresó ni el paso que está realizando en una transacción. Necesita un servidor de aplicaciones para tareas como esa. (Cubriremos ese tipo de tecnología en otros artículos).

HTTP proporciona reglas claras sobre cómo se comunican un cliente y un servidor. Solo los clientes pueden hacer solicitudes HTTP a los servidores. Los servidores solo pueden responder a la solicitud HTTP de un cliente. Al solicitar un archivo a través de HTTP, los clientes deben proporcionar la URL del archivo. El servidor web debe responder a todas las solicitudes HTTP, al menos con un mensaje de error.

### Contenido Estático vs. Dinámico
En términos generales, un servidor puede entregar contenido estático o dinámico. "Estático" significa "servido como está". Los sitios web estáticos son los más fáciles de configurar.

"Dinámico" significa que el servidor procesa el contenido o incluso lo genera desde una base de datos. Esta solución proporciona más flexibilidad, pero se vuelve más difícil de manejar, lo que hace que sea mucho más complejo desarrollar el sitio web.

---

## Aplicación en el Desarrollo de Software

El desarrollo moderno de aplicaciones, se traduce en dos componentes principales:

### 🎨 Frontend (Cliente)

- Es la parte visible para el usuario.
- Se encarga de la **interfaz de usuario (UI)** y la **experiencia de usuario (UX)**.
- Tecnologías comunes: HTML, CSS, JavaScript, y frameworks como React, C# (Blazor, MAUI), Angular o Vue.js.
- Se comunica con el backend a través de API (REST, GraphQL, SOAP, etc.).

### 🔧 Backend (Servidor)

- Es la parte lógica que gestiona los datos y la seguridad.
- Procesa las solicitudes del frontend y se conecta a bases de datos y otros servicios.
- Tecnologías comunes: Node.js, Python (Django/Flask), Java (Spring), C# (.NET), entre otros.
- Expone servicios a través de **API** para que el frontend pueda consumirlos.

---

## Ejemplo Práctico

1. Un usuario accede a un sitio web desde su navegador (cliente).
2. El frontend realiza una solicitud HTTP a una API para obtener una lista de productos.
3. El backend recibe la solicitud, accede a la base de datos, y devuelve los datos en formato JSON.
4. El frontend muestra los productos en pantalla.