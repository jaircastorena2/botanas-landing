# Botanas Landing

Landing page moderna y atractiva para una empresa mayorista de botanas mexicanas, desarrollada con Next.js 16 y las últimas tecnologías web.

**Demo en vivo:** [https://botanas-landing.netlify.app/](https://botanas-landing.netlify.app/)

## Sobre el Proyecto

Esta landing page fue diseñada para **Blofis Botanas**, una empresa mexicana especializada en la venta mayorista de botanas y snacks. El sitio presenta productos, categorías, formatos de venta y toda la información necesaria para clientes potenciales.

### Características Principales

- **Diseño moderno y atractivo** con gradientes y animaciones fluidas
- **Totalmente responsivo** - Optimizado para móvil, tablet y desktop
- **Alto rendimiento** con Next.js App Router y optimización de imágenes
- **Carrito de compras** con estado global usando Zustand
- **Animaciones suaves** implementadas con Framer Motion
- **Temática mexicana** con colores vibrantes y diseño auténtico

## Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── Navbar.tsx         # Barra de navegación
│   ├── HeroSection.tsx    # Sección hero principal
│   ├── ProductShowcase.tsx # Galería de productos
│   ├── CategoriesSection.tsx # Categorías de productos
│   ├── SalesFormatsSection.tsx # Formatos de venta
│   ├── IngredientsSection.tsx # Información de ingredientes
│   ├── NutritionalTable.tsx # Tabla nutricional
│   ├── CartDrawer.tsx     # Carrito de compras
│   ├── ProductGrid.tsx    # Grid de productos
│   └── Footer.tsx         # Pie de página
├── data/                  # Datos estáticos
│   └── products.ts        # Catálogo de productos
└── store/                 # Estado global
    └── cartStore.ts       # Store del carrito (Zustand)
```

## Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **Next.js** | 16.1.1 | Framework de React con App Router |
| **React** | 19.2.3 | Biblioteca de UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 4.x | Framework de estilos utility-first |
| **Framer Motion** | 12.x | Animaciones declarativas |
| **Zustand** | 5.x | Gestión de estado global |

## Instalación y Uso

### Prerrequisitos

- Node.js 18.18 o superior
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jaircastorena2/botanas-landing.git

# Entrar al directorio
cd botanas-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta el linter (ESLint) |

## Capturas de Pantalla

### Hero Section
Sección principal con animación de productos flotantes y call-to-action atractivo.

### Catálogo de Productos
Grid interactivo con productos, precios y funcionalidad de carrito.

### Sección de Categorías
Presentación visual de las diferentes categorías de botanas disponibles.

### Formatos de Venta
Información sobre los diferentes formatos de venta mayorista.

## Decisiones de Diseño

- **Paleta de colores**: Tonos cálidos (naranja, rojo) que evocan la tradición mexicana
- **Tipografía**: Inter para legibilidad moderna
- **Animaciones**: Transiciones suaves que mejoran la UX sin ser intrusivas
- **Responsive**: Mobile-first con breakpoints para tablet y desktop

## Licencia

Este proyecto es parte de mi portafolio personal. Siéntete libre de usarlo como referencia o inspiración.

---

Desarrollado por Jair Castorena
