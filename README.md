# Frontend Test - Mobile Device Shop

Mini aplicación SPA para comprar dispositivos móviles, desarrollada con React + TypeScript, arquitectura hexagonal y Redux Toolkit.

## Requisitos

- Node.js >= 20
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

Se utiliza **arquitectura hexagonal** (puertos y adaptadores) para separar la lógica de negocio de los detalles técnicos. El estado global se gestiona con **Redux Toolkit** (store, slices, createAsyncThunk).

```
src/
├── core/
│   ├── domain/
│   │   └── models/              # Product, CartItem, etc.
│   └── application/
│       └── ports/               # Interfaces (ProductRepository, CartRepository)
├── infrastructure/
│   ├── api/                     # Adaptadores de API (productApi, cartApi)
│   │   └── __tests__/
│   ├── storage/                 # Cache con expiración de 1h (localStorage)
│   │   └── __tests__/
│   └── store/                   # Redux store (cartSlice, themeSlice)
│       └── __tests__/
├── presentation/
│   ├── components/              # Componentes UI (Header, SearchBar, ProductItem, etc.)
│   │   └── __tests__/
│   ├── context/                 # Contextos (opcional, coexiste con Redux)
│   ├── pages/                   # PLP y PDP
│   │   └── __tests__/
│   └── hooks/                   # Custom hooks (useProducts, useProductDetails, useInView)
│       └── __tests__/
├── test/                        # Configuración global de tests
├── App.tsx
└── main.tsx
```

Los tests se colocan en directorios `__tests__` junto al código fuente que prueban.

## Tecnologías

- **React 19** + **TypeScript**
- **Vite** (bundler)
- **Redux Toolkit** (estado global: carrito, tema claro/oscuro)
- **React Router** (SPA con rutas / y /product/:id)
- **Vitest** + **Testing Library** (tests)
- **CSS Modules** (estilos encapsulados por componente)

## Docker

```bash
# Construir la imagen
docker build -t frontend_test_alejandro .

# Ejecutar el contenedor
docker run -p 3000:80 frontend_test_alejandro
```

## API

Base URL: `https://itx-frontend-test.onrender.com/api`

- `GET /product` — Listado de productos
- `GET /product/:id` — Detalle de un producto
- `POST /cart` — Añadir producto a la cesta

## Caching

Los datos del API se cachean en cliente con expiración de 1 hora mediante localStorage. Se utiliza un `cacheRepository` genérico que comprueba el timestamp antes de devolver datos.

## Vistas

- **PLP**: Listado con filtrado en tiempo real por marca y modelo. Máximo 4 productos por fila, responsive. Animación de aparición al hacer scroll.
- **PDP**: Dos columnas (imagen + detalle/acciones). Selectores de almacenamiento y color. Botón para añadir al carrito.

## Características

- Breadcrumbs en cabecera con navegación
- Contador de carrito persistente (Redux + localStorage)
- Modo claro/oscuro con botón toggle
- Notificación toast al añadir productos al carrito
- Animación de aparición de tarjetas al hacer scroll
- Búsqueda en tiempo real por marca y modelo
- Diseño responsive
- Cache de API con expiración de 1 hora
