# Modelos de Datos

El proyecto utiliza Sequelize como ORM para interactuar con la base de datos PostgreSQL. El siguiente modelo de datos representa la tabla `products` en la base de datos:

## Modelo `Product`

*   **Tabla:** `products`

### Atributos

*   **`name`:**
    *   **Tipo:** `STRING(100)`
    *   **Descripción:** El nombre del producto.
*   **`price`:**
    *   **Tipo:** `FLOAT`
    *   **Descripción:** El precio del producto.
*   **`availability`:**
    *   **Tipo:** `BOOLEAN`
    *   **Descripción:** Indica si el producto está disponible o no.
    *   **Valor por Defecto:** `true`
