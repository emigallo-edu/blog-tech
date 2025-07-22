
# Clase: JSON y XML – Formatos de Intercambio de Datos

## Introducción a los formatos de intercambio de datos

**¿Qué son?**
Son formatos estructurados utilizados para **almacenar y transmitir datos entre sistemas** (por ejemplo, entre cliente y servidor en una API).

- Antes: CSV, texto plano.
- Hoy: **JSON** (JavaScript Object Notation) y **XML** (eXtensible Markup Language).

## JSON: Sintaxis y uso

### Características:
- Ligero y fácil de leer.
- Basado en notación de objetos de JavaScript.
- Usado ampliamente en APIs modernas (REST).

### Estructura básica:

```json
{
  "nombre": "Juan",
  "edad": 30,
  "activo": true,
  "hobbies": ["fútbol", "cine"],
  "direccion": {
    "calle": "Av. Siempre Viva",
    "numero": 123
  }
}
```

### Validación:
- JSON debe estar **bien formado** (comillas dobles, sin comas finales, etc.).
- Sitios útiles: [jsonlint.com](https://jsonlint.com)

## 3. XML: Sintaxis y uso

### Características:
- Basado en etiquetas (parecido a HTML).
- Muy usado en sistemas legados, SOAP, configuración, documentos.
- Más **verboso** pero flexible.

### Estructura básica:

```xml
<persona>
  <nombre>Juan</nombre>
  <edad>30</edad>
  <activo>true</activo>
  <hobbies>
    <hobbie>fútbol</hobbie>
    <hobbie>cine</hobbie>
  </hobbies>
  <direccion>
    <calle>Av. Siempre Viva</calle>
    <numero>123</numero>
  </direccion>
</persona>
```

### Validación:
- Se puede validar con un **XSD** (XML Schema Definition).

## Comparación entre JSON y XML

| Aspecto          | JSON                     | XML                          |
|------------------|--------------------------|-------------------------------|
| Legibilidad      | ✅ Más claro              | ❌ Más verboso                |
| Tamaño           | ✅ Menor                  | ❌ Mayor                     |
| Soporte de tipos | Limitado (string, num…)  | Ampliable vía XSD            |
| Comentarios      | ❌ No soporta             | ✅ Soporta                    |
| APIs modernas    | ✅ Dominante (REST, JS)   | ❌ Menor uso en nuevos proyectos |
| Legado/SOAP      | ❌ Poco usado             | ✅ Muy usado en servicios SOAP |

## Ejemplos prácticos

### JavaScript – Parsear JSON
```js
const jsonString = '{"nombre":"Juan","edad":30}';
const obj = JSON.parse(jsonString);
console.log(obj.nombre); // Juan
```

### C# – Serializar / Deserializar JSON
```csharp
var persona = new { Nombre = "Juan", Edad = 30 };
string json = JsonSerializer.Serialize(persona);
var obj = JsonSerializer.Deserialize<Persona>(json);
```

## Cuándo usar uno u otro

| Uso común                             | Recomendación |
|--------------------------------------|----------------|
| APIs modernas (REST, frontend JS)    | JSON           |
| Configuración de sistemas antiguos   | XML            |
| Comunicación con servicios SOAP      | XML            |
| Archivos de configuración complejos  | XML            |
| Interacción con JS o web moderna     | JSON           |


## 📚 Material complementario
- [JSON.org](https://www.json.org/)
- [W3Schools JSON](https://www.w3schools.com/js/js_json_intro.asp)
- [W3Schools XML](https://www.w3schools.com/xml/)
- [XML Validator](https://www.xmlvalidation.com/)
