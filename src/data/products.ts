// Types for the e-commerce
export interface NutritionalInfo {
    servingSize: string;
    calories: number;
    protein: string;
    totalFat: string;
    saturatedFat: string;
    transFat: string;
    carbs: string;
    sugar: string;
    addedSugar: string;
    fiber: string;
    sodium: string;
    ingredients: string;
    image?: string; // Path to nutritional table image
}

export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    netContent: string;
    stock: number;
    category: "maicitos" | "obleas" | "chips" | "chicharron" | "granel" | "paquetes" | "servicios";
    flavors: string[];
    features: string[];
    packs: {
        quantity: number;
        label: string;
        price: number;
    }[];
    nutrition?: NutritionalInfo;
}

export interface CartItem {
    product: Product;
    quantity: number;
    selectedFlavor: string;
    selectedPack: {
        quantity: number;
        label: string;
        price: number;
    };
}

// Consolidated products with nutritional info
export const products: Product[] = [
    {
        id: "maicitos",
        name: "Maicitos Inflados",
        description: "Maíz inflado al vapor, sin freír. Crujientes, ligeros y deliciosos. Autorizados por la SEP para venta en escuelas.",
        image: "/productos/maicitos-sabores.png",
        netContent: "50g",
        stock: 500,
        category: "maicitos",
        flavors: ["Fuego 🔥", "Jalapeño 🌶️", "Queso 🧀", "Ranchero 🌽", "Sal 🧂", "Salsas 🥢", "Mix de Sabores 🎨"],
        features: ["Inflado al vapor", "Sin freír", "Sin gluten", "0g grasas trans", "Autorizado SEP"],
        packs: [
            { quantity: 3, label: "3 pz Prueba", price: 63 },
            { quantity: 12, label: "12 piezas", price: 252 },
            { quantity: 24, label: "24 piezas", price: 480 },
            { quantity: 48, label: "48 piezas", price: 912 },
            { quantity: 72, label: "72 piezas", price: 1296 },
        ],
        nutrition: {
            servingSize: "50g",
            calories: 188,
            protein: "4g",
            totalFat: "2g",
            saturatedFat: "2g",
            transFat: "0mg",
            carbs: "38g",
            sugar: "0g",
            addedSugar: "0g",
            fiber: "2g",
            sodium: "144mg",
            ingredients: "Maíz blanco nixtamalizado, aceite de maíz, condimento (maltodextrina, proteína vegetal hidrolizada, saborizantes naturales e idénticos al natural, chile, ácido cítrico, sal yodada, glutamato monosódico, especias). Puede contener leche y soya.",
            image: "/productos/nutricion-maicitos.png"
        }
    },
    {
        id: "obleas-amaranto",
        name: "Obleas de Amaranto",
        description: "El superalimento ancestral en formato crujiente. Libres de azúcar añadida, perfectas para cualquier momento.",
        image: "/productos/obleas-colores.png",
        netContent: "60g",
        stock: 400,
        category: "obleas",
        flavors: ["Chocolate 🍫", "Fresa 🍓", "Natural 🌾", "Mix de Sabores 🎨"],
        features: ["0g azúcar añadida", "0g grasas trans", "Alto en fibra", "Superalimento ancestral"],
        packs: [
            { quantity: 3, label: "3 pz Prueba", price: 63 },
            { quantity: 12, label: "12 piezas", price: 252 },
            { quantity: 24, label: "24 piezas", price: 480 },
            { quantity: 48, label: "48 piezas", price: 912 },
        ],
        nutrition: {
            servingSize: "60g",
            calories: 200,
            protein: "7g",
            totalFat: "0g",
            saturatedFat: "0g",
            transFat: "0mg",
            carbs: "50g",
            sugar: "2g",
            addedSugar: "0g",
            fiber: "5g",
            sodium: "0mg",
            ingredients: "Harina de amaranto, vainilla, linaza, canela, trigo 7% y Stevia. Puede contener: Chocolate, taro, matcha, café, fresa.",
            image: "/productos/nutricion-obleas.png"
        }
    },
    {
        id: "chips-vegetales",
        name: "Chips de Camote",
        description: "Crujientes chips de camote con limón y sal. 100% naturales y deliciosos.",
        image: "/productos/chips-vegetales.jpg",
        netContent: "50g",
        stock: 200,
        category: "chips",
        flavors: ["Limón y Sal 🍋"],
        features: ["100% natural", "0g grasas trans", "0g azúcar añadida", "Fuente de fibra"],
        packs: [
            { quantity: 3, label: "3 pz Prueba", price: 66 },
            { quantity: 12, label: "12 piezas", price: 264 },
            { quantity: 24, label: "24 piezas", price: 504 },
        ],
        nutrition: {
            servingSize: "50g",
            calories: 177,
            protein: "2.5g",
            totalFat: "12.5g",
            saturatedFat: "1.5g",
            transFat: "0mg",
            carbs: "13.5g",
            sugar: "6.5g",
            addedSugar: "0g",
            fiber: "3g",
            sodium: "179.5mg",
            ingredients: "Camote, aceite de maíz y sal y limón en polvo.",
            image: "/productos/nutricion-chips.png"
        }
    },
    {
        id: "chicharron-garbanzo",
        name: "Chicharrón de Garbanzo",
        description: "Alto en proteína. La alternativa innovadora y saludable al chicharrón tradicional.",
        image: "/productos/chicharron-garbanzo.png",
        netContent: "50g",
        stock: 150,
        category: "chicharron",
        flavors: ["Piquín 🌶️"],
        features: ["Alto en proteína", "0g grasas trans", "0g azúcar añadida", "Alto en fibra"],
        packs: [
            { quantity: 3, label: "3 pz Prueba", price: 69 },
            { quantity: 12, label: "12 piezas", price: 276 },
            { quantity: 24, label: "24 piezas", price: 528 },
        ],
        nutrition: {
            servingSize: "50g",
            calories: 166,
            protein: "5.7g",
            totalFat: "8.5g",
            saturatedFat: "1.1g",
            transFat: "0mg",
            carbs: "26.7g",
            sugar: "2.9g",
            addedSugar: "0g",
            fiber: "4.9g",
            sodium: "546mg",
            ingredients: "Garbanzo, arroz, aceite de canola, maíz blanco, mijo y sazonador sabor fuego (Sal refinada, potenciadores de sabor, proteína vegetal hidrolizada), chiles, acidulantes (ácido cítrico, limón en polvo), maltodextrina, especias, saborizante natural.",
            image: "/productos/nutricion-chicharron.png"
        }
    },
    {
        id: "maicitos-granel",
        name: "Maicitos 500gr Granel",
        description: "Bolsa grande de 500gr para compartir o reventa. Ideal para fiestas, eventos o negocio propio.",
        image: "/productos/maicitos-sabores.png",
        netContent: "500g",
        stock: 100,
        category: "granel",
        flavors: ["Fuego 🔥", "Jalapeño 🌶️", "Queso 🧀", "Ranchero 🌽", "Sal 🧂", "Salsas 🥢", "Mix de Sabores 🎨"],
        features: ["Tamaño familiar", "Ideal para reventa", "Mayor rendimiento", "Empaque resellable"],
        packs: [
            { quantity: 1, label: "1 bolsa", price: 299 },
            { quantity: 3, label: "3 bolsas", price: 849 },
            { quantity: 6, label: "6 bolsas", price: 1620 },
        ],
        nutrition: {
            servingSize: "50g",
            calories: 188,
            protein: "4g",
            totalFat: "2g",
            saturatedFat: "2g",
            transFat: "0mg",
            carbs: "38g",
            sugar: "0g",
            addedSugar: "0g",
            fiber: "2g",
            sodium: "144mg",
            ingredients: "Maíz blanco nixtamalizado, aceite de maíz, condimento (maltodextrina, proteína vegetal hidrolizada, saborizantes naturales). Puede contener leche y soya.",
            image: "/productos/nutricion-maicitos.png"
        }
    },
    {
        id: "paquete-mix",
        name: "Paquete Mix Botana para Vender",
        description: "Arma tu stock con paquetes variados de botanas. Incluye maicitos, obleas, chips y chicharrón. Ideal para tienditas, cooperativas y eventos.",
        image: "/productos/paquete-mix.png",
        netContent: "Variado",
        stock: 50,
        category: "paquetes",
        flavors: ["Mix Variado 🎨"],
        features: ["Variedad de productos", "Descuentos por volumen", "Ideal para reventa", "Envío incluido"],
        packs: [
            { quantity: 120, label: "120 piezas", price: 2400 },
            { quantity: 240, label: "240 piezas", price: 4560 },
            { quantity: 360, label: "360 piezas", price: 6480 },
            { quantity: 720, label: "720 piezas", price: 12240 },
        ],
    },
    {
        id: "cajita-botanera",
        name: "Cajita Botanera Display",
        description: "Exhibidor práctico y atractivo para tus botanas. Perfecto para cooperativas escolares, tienditas, gimnasios u oficinas. Personalizable con tu marca.",
        image: "/productos/cajita-botanera.png",
        netContent: "1 Display",
        stock: 100,
        category: "paquetes",
        flavors: ["Display Blofis 📦", "Personalizado 🎨"],
        features: ["Exhibidor atractivo", "Fácil de armar", "Cartón resistente", "Opción personalizable"],
        packs: [
            { quantity: 1, label: "1 display", price: 150 },
            { quantity: 3, label: "3 displays", price: 400 },
            { quantity: 6, label: "6 displays", price: 720 },
        ],
    },
    {
        id: "servicio-logo",
        name: "Servicio de Diseño de Logo",
        description: "Diseño de logotipo profesional y personalizado para tu marca. Propuestas creativas, entrega en PDF y PNG en alta calidad vía Google Drive.",
        image: "/productos/servicio-logo.png",
        netContent: "Digital",
        stock: 999,
        category: "servicios",
        flavors: ["Logo Profesional 🎨"],
        features: ["Diseño personalizado", "Entrega digital", "PDF y PNG", "Alta calidad"],
        packs: [
            { quantity: 1, label: "1 logo", price: 1500 },
        ],
    },
];

// Helper functions
export const getProductById = (id: string) =>
    products.find((p) => p.id === id);

export const getProductsByCategory = (category: Product["category"]) =>
    products.filter((p) => p.category === category);
