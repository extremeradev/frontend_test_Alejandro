# Frontend Test - Mobile Device Shop

Mini aplicación SPA para comprar dispositivos móviles, desarrollada con React y arquitectura hexagonal.

## Requisitos

- Node.js >= 18
- npm >= 8
- Docker (opcional, para entorno containerizado)

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm test` | Lanza los tests |
| `npm run lint` | Comprueba el código con el linter |

## Arquitectura

Se utiliza **arquitectura hexagonal** (puertos y adaptadores) para separar la lógica de negocio de los detalles técnicos:

```
src/
├── core/
│   ├── domain/
│   │   ├── models/        # Product, CartItem, etc.
│   │   ├── services/      # ProductService, CartService
│   │   └── __tests__/     # Tests de dominio
│   └── application/
│       └── ports/         # Interfaces (ProductRepository, CartRepository)
├── infrastructure/
│   ├── api/               # Adaptadores de API (productApi, cartApi)
│   │   └── __tests__/
│   ├── storage/           # Adaptadores de persistencia (caching con expiración 1h)
│   │   └── __tests__/
│   └── di/                # Inyección de dependencias
├── presentation/
│   ├── components/        # Componentes UI (Header, SearchBar, ProductList, etc.)
│   │   └── __tests__/
│   ├── pages/             # PLP y PDP
│   │   └── __tests__/
│   └── hooks/             # Custom hooks
│       └── __tests__/
├── App.tsx
└── main.tsx
```

Los tests se colocan en directorios `__tests__` junto al código fuente que prueban.

## Docker

```bash
# Construir la imagen
docker build -t frontend_test_Alejandro .

# Ejecutar el contenedor
docker run -p 3000:3000 frontend_test_Alejandro
```

## API

- `GET /product` — Listado de productos
- `GET /product/:id` — Detalle de un producto
- `POST /cart` — Añadir producto a la cesta

## Caching

Los datos del API se cachean en cliente con expiración de 1 hora. Se utiliza storage del navegador con invalidación por tiempo.

## Vistas

- **PLP**: Listado con filtrado en tiempo real por marca y modelo. Máximo 4 productos por fila, responsive.
- **PDP**: Dos columnas (imagen + detalle/acciones). Selectores de almacenamiento y color. Botón añadir al carrito.

## Características

- Breadcrumbs en cabecera con navegación
- Contador de carrito persistente y visible en todas las vistas
