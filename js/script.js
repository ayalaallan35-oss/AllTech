const productos = [
  {
    id: 11,
    nombre: "Disco Duro Externo 2TB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Disco duro portátil USB 3.0. Lleva todos tus respaldos y proyectos a donde vayas.",
    precio: 650,
    precioAntes: 700,
    icono: "🗄️",
    img: "img/almacenamiento/Disco Duro Externo 2TB.jpg",
    tag: "oferta",
  },
  {
    id: 12,
    nombre: "Disco Duro Interno 1TB (HDD)",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: 'Disco duro mecánico de 3.5" para PC de escritorio. Ideal para almacenar grandes cantidades de archivos.',
    precio: 400,
    precioAntes: 450,
    icono: "💽",
    img: "img/almacenamiento/Disco Duro Interno 1TB (HDD).jpg",
    tag: "oferta",
  },
  {
    id: 13,
    nombre: "Disco Sólido SSD 500GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: 'Unidad de estado sólido SATA III de 2.5". Acelera el arranque de tu laptop o PC.',
    precio: 899,
    precioAntes: 1030,
    icono: "💾",
    img: "img/almacenamiento/Disco Sólido SSD 500GB.jpg",
    tag: "oferta",
  },
  {
    id: 14,
    nombre: "Disco Sólido SSD 960GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "SSD de alta capacidad y velocidad para proyectos que requieren mucho espacio y rendimiento.",
    precio: 1399,
    precioAntes: 1555,
    icono: "💾",
    img: "img/almacenamiento/Disco Sólido SSD 960GB.jpg",
    tag: "oferta",
  },
  {
    id: 15,
    nombre: "SSD NVMe M.2 500GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Disco de estado sólido NVMe de última generación. Velocidades de lectura ultrarrápidas.",
    precio: 749,
    precioAntes: 832,
    icono: "🚀",
    img: "img/almacenamiento/SSD NVMe M.2 500GB.jpg",
    tag: "oferta",
  },
  {
    id: 16,
    nombre: "SSD NVMe M.2 1TB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Máximo rendimiento para tu PC. Ideal para gaming, edición y programación pesada.",
    precio: 750,
    icono: "🚀",
    img: "img/almacenamiento/SSD NVMe M.2 1TB.jpg",
    tag: null,
  },
  {
    id: 17,
    nombre: "Micro SD 32GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Tarjeta de memoria Micro SD con adaptador. Perfecta para celulares, cámaras o Raspberry Pi.",
    precio: 45,
    icono: "📱",
    img: "img/almacenamiento/Micro SD 32GB.jpg",
    tag: null,
  },
  {
    id: 18,
    nombre: "Micro SD 64GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Tarjeta Micro SD Clase 10. Rápida y confiable para tus dispositivos móviles.",
    precio: 65,
    icono: "📱",
    img: "img/almacenamiento/Micro SD 64GB.jpg",
    tag: "stock",
  },
  {
    id: 19,
    nombre: "Micro SD 128GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Almacenamiento masivo para tu celular o tablet. Guarda fotos, videos y apps sin problemas.",
    precio: 110,
    icono: "📱",
    img: "img/almacenamiento/Micro SD 128GB.jpg",
    tag: null,
  },
  {
    id: 20,
    nombre: "Memoria USB 32GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Pendrive USB 3.0. Compacta y veloz para llevar tus archivos a la universidad o al trabajo.",
    precio: 50,
    icono: "🔌",
    img: "img/almacenamiento/Memoria USB 32GB.jpg",
    tag: null,
  },
  {
    id: 21,
    nombre: "Memoria USB 128GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Gran capacidad en un formato pequeño. Ideal para respaldos y transporte de datos pesados.",
    precio: 130,
    icono: "🔌",
    img: "img/almacenamiento/Memoria USB 128GB.jpg",
    tag: "nuevo",
  },

  /* ============ PRODUCTOS DE OFERTA ============ */
  {
    id: 22,
    nombre: "Kit de Limpieza para PC",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Todo lo necesario para mantener tu equipo libre de polvo y funcionando como nuevo.",
    precio: 45,
    precioAntes: 60,
    icono: "🧹",
    img: "img2/Ofertas/Kit de Limpieza para PC.jpg",
    tag: "oferta",
  },
  {
    id: 23,
    nombre: "Hub USB 3.0 de 4 Puertos",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Expande la conectividad de tu laptop o PC con este hub compacto y veloz.",
    precio: 75,
    precioAntes: 95,
    icono: "🔌",
    img: "img2/Ofertas/Hub USB 3.0 de 4 Puertos.jpg",
    tag: "oferta",
  },
  {
    id: 24,
    nombre: "Base Refrigerante para Laptop",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Mantén tu laptop a temperatura óptima durante largas jornadas de estudio o trabajo.",
    precio: 110,
    precioAntes: 140,
    icono: "💨",
    img: "img2/Ofertas/Base Refrigerante para Laptop.jpg",
    tag: "oferta",
  },
  {
    id: 25,
    nombre: "Audífonos con Micrófono",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Perfectos para clases virtuales, reuniones o escuchar música mientras estudias.",
    precio: 85,
    precioAntes: 120,
    icono: "🎧",
    img: "img2/Ofertas/Audífonos con Micrófono.jpg",
    tag: "oferta",
  },
  {
    id: 26,
    nombre: "Cargador Rápido 20W USB-C",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Carga tu celular o tablet en tiempo récord con este adaptador de pared.",
    precio: 65,
    precioAntes: 85,
    icono: "⚡",
    img: "img2/Ofertas/Cargador Rápido 20W USB-C.jpg",
    tag: "oferta",
  },
  {
    id: 27,
    nombre: "Alfombrilla Gamer XL",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Superficie amplia y antideslizante. Mejora la precisión de tu mouse y protege tu escritorio.",
    precio: 55,
    precioAntes: 80,
    icono: "🖤",
    img: "img2/Ofertas/Alfombrilla Gamer XL.jpg",
    tag: "oferta",
  },
  {
    id: 28,
    nombre: "Soporte Ajustable para Laptop",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Mejora tu postura y evita dolores de cuello. Plegable y portátil para llevar a clases.",
    precio: 95,
    precioAntes: 130,
    icono: "📐",
    img: "img2/Ofertas/Soporte Ajustable para Laptop.jpeg",
    tag: "oferta",
  },
  {
    id: 29,
    nombre: "Organizador de Cables",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Kit de clips y bridas para mantener tu escritorio ordenado y libre de enredos.",
    precio: 30,
    precioAntes: 45,
    icono: "🧵",
    img: "img2/Ofertas/Organizador de Cables.jpg",
    tag: "oferta",
  },

  /* ============ PRODUCTOS DE REDES ============ */
  {
    id: 30,
    nombre: "Router TP-Link WiFi 6",
    cat: "redes",
    catNombre: "Redes",
    desc: "Router inalámbrico dual-band AX1500. Cobertura amplia y velocidad para tu hogar o laboratorio.",
    precio: 425,
    precioAntes: 480,
    icono: "📡",
    img: "img2/Redes/Router TP-Link WiFi 6.jpg",
    tag: "oferta",
  },
  {
    id: 31,
    nombre: "Switch 8 Puertos Gigabit",
    cat: "redes",
    catNombre: "Redes",
    desc: "Switch no administrable de 8 puertos 10/100/1000 Mbps. Ideal para ampliar tu red local.",
    precio: 195,
    icono: "🔀",
    img: "img2/Redes/Switch 8 Puertos Gigabit.jpg",
    tag: "nuevo",
  },
  {
    id: 32,
    nombre: "Patch Panel 12 Puertos",
    cat: "redes",
    catNombre: "Redes",
    desc: "Patch panel Cat6 de 12 puertos para rack. Organiza tu cableado estructurado profesionalmente.",
    precio: 240,
    icono: "🗂️",
    img: "img2/Redes/Patch Panel 12 Puertos.jpg",
    tag: null,
  },
  {
    id: 33,
    nombre: "Ponchadora Profesional RJ45",
    cat: "redes",
    catNombre: "Redes",
    desc: "Herramienta de crimpado de alta precisión para conectores RJ45, RJ11 y RJ12.",
    precio: 145,
    precioAntes: 175,
    icono: "🔧",
    img: "img2/Redes/Ponchadora Profesional RJ45.jpg",
    tag: "oferta",
  },
  {
    id: 34,
    nombre: "Roseta RJ45 Hembra",
    cat: "redes",
    catNombre: "Redes",
    desc: "Toma de red empotrable Cat6. Para instalaciones limpias en pared o canaleta.",
    precio: 35,
    icono: "🔲",
    img: "img2/Redes/Roseta RJ45 Hembra.jpg",
    tag: null,
  },
  {
    id: 35,
    nombre: "Cable UTP Cat6 (por metro)",
    cat: "redes",
    catNombre: "Redes",
    desc: "Cable de red UTP Cat6 vendido por metro. Elige el largo exacto que necesitas.",
    precio: 8,
    icono: "🧵",
    img: "img2/Redes/Cable UTP Cat6 por Metro.jpg",
    tag: null,
  },
  {
    id: 36,
    nombre: "Conectores RJ45 (Pack x100)",
    cat: "redes",
    catNombre: "Redes",
    desc: "Bolsa de 100 conectores RJ45 Cat5e. Rendidor pack para tus prácticas de ponchado.",
    precio: 120,
    precioAntes: 150,
    icono: "📦",
    img: "img2/Redes/Conectores RJ45 Pack x100.jpg",
    tag: "oferta",
  },
  {
    id: 37,
    nombre: "Repetidor WiFi AX1500",
    cat: "redes",
    catNombre: "Redes",
    desc: "Amplificador de señal WiFi 6. Elimina las zonas muertas de tu red inalámbrica.",
    precio: 285,
    icono: "📶",
    img: "img2/Redes/Repetidor WiFi AX1500.jpg",
    tag: "nuevo",
  },

  /* ============ PRODUCTOS DE BATERÍAS ============ */
  {
    id: 38,
    nombre: "Batería Laptop HP Reemplazo",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Batería de reemplazo compatible con laptops HP. Recupera la autonomía de tu equipo.",
    precio: 320,
    precioAntes: 380,
    icono: "🔋",
    img: "img/Baterias/Batería Laptop HP Reemplazo.jpg",
    tag: "oferta",
  },
  {
    id: 39,
    nombre: "Batería Laptop Dell Reemplazo",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Batería compatible con laptops Dell. Larga duración y carga estable para tus clases.",
    precio: 340,
    precioAntes: 400,
    icono: "🔋",
    img: "img/Baterias/Batería Laptop Dell Reemplazo.jpg",
    tag: "oferta",
  },
  {
    id: 40,
    nombre: "Batería Laptop Lenovo Reemplazo",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Batería compatible con laptops Lenovo IdeaPad. Voltaje y capacidad garantizados.",
    precio: 310,
    icono: "🔋",
    img: "img/Baterias/Batería Laptop Lenovo Reemplazo.jpg",
    tag: "nuevo",
  },
  {
    id: 41,
    nombre: "Batería 18650 Litio",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Celda de litio recargable 3.7V. Ideal para proyectos de electrónica, power banks y linternas.",
    precio: 35,
    icono: "⚡",
    img: "img/Baterias/Batería 18650 Litio.jpg",
    tag: null,
  },
  {
    id: 42,
    nombre: "Power Bank 10000 mAh",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Batería portátil compacta con doble salida USB. Carga tu celular hasta 3 veces.",
    precio: 155,
    precioAntes: 190,
    icono: "🔋",
    img: "img/Baterias/Power Bank 10000 mAh.jpg",
    tag: "oferta",
  },
  {
    id: 43,
    nombre: "Power Bank 20000 mAh",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Batería portátil de alta capacidad con carga rápida. Para viajes largos y jornadas intensas.",
    precio: 275,
    precioAntes: 320,
    icono: "🔋",
    img: "img/Baterias/Power Bank 20000 mAh.jpg",
    tag: "oferta",
  },
  {
    id: 44,
    nombre: "Batería 9V Alcalina",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Pila de 9 voltios para multímetros, instrumentos y proyectos de electrónica.",
    precio: 18,
    icono: "🔋",
    img: "img/Baterias/Batería 9V Alcalina.jpg",
    tag: null,
  },
  {
    id: 45,
    nombre: "Pilas AA Recargables (Pack x4)",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Pack de 4 pilas AA recargables de NiMH. Ahorra dinero y cuida el ambiente.",
    precio: 95,
    precioAntes: 120,
    icono: "🔋",
    img: "img/Baterias/Pilas AA Recargables Pack x4.jpg",
    tag: "oferta",
  },
  {
    id: 46,
    nombre: "Cargador de Pilas AA/AAA",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Cargador inteligente de 4 canales para pilas AA y AAA. Con protección contra sobrecarga.",
    precio: 145,
    icono: "🔌",
    img: "img/Baterias/Cargador de Pilas AA-AAA.jpg",
    tag: "nuevo",
  },
  {
    id: 47,
    nombre: "Batería UPS 12V 7Ah",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Batería sellada de plomo-ácido para UPS, alarmas y sistemas de respaldo.",
    precio: 185,
    precioAntes: 220,
    icono: "🔋",
    img: "img/Baterias/Batería UPS 12V 7Ah.jpg",
    tag: "oferta",
  },

  /* ============ PRODUCTOS DE COMPONENTES ELECTRÓNICOS ============ */
  {
    id: 48,
    nombre: "Arduino Uno R3",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Placa de desarrollo Arduino Uno R3 con cable USB. Base ideal para tus proyectos de electrónica.",
    precio: 245,
    precioAntes: 279,
    icono: "🔌",
    img: "img/Componentes/Arduino Uno R3.jpg",
    tag: "oferta",
  },
  {
    id: 49,
    nombre: "Raspberry Pi 4 Model B",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Mini computadora de 4GB RAM. Ideal para proyectos de programación, IoT y servidores caseros.",
    precio: 850,
    precioAntes: 950,
    icono: "🍓",
    img: "img/Componentes/Raspberry Pi 4 Model B.jpg",
    tag: "oferta",
  },
  {
    id: 50,
    nombre: "ESP32 DevKit WiFi + Bluetooth",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Módulo de desarrollo ESP32 con WiFi y Bluetooth integrados. Perfecto para proyectos IoT.",
    precio: 89,
    precioAntes: 100,
    icono: "📡",
    img: "img/Componentes/ESP32 DevKit WiFi.jpg",
    tag: "oferta",
  },
  {
    id: 51,
    nombre: "Sensor DHT11 Temperatura y Humedad",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Sensor digital de temperatura y humedad relativa. Compatible con Arduino y Raspberry Pi.",
    precio: 35,
    icono: "🌡️",
    img: "img/Componentes/Sensor DHT11 Temperatura.jpg",
    tag: null,
  },
  {
    id: 52,
    nombre: "Sensor Ultrasónico HC-SR04",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Sensor de distancia ultrasónico de 2 cm a 400 cm. Para proyectos de robótica y medición.",
    precio: 30,
    icono: "📏",
    img: "img/Componentes/Sensor Ultrasónico HC-SR04.jpg",
    tag: null,
  },
  {
    id: 53,
    nombre: "Módulo Bluetooth HC-05",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Módulo Bluetooth serial maestro/esclavo. Comunicación inalámbrica para tus proyectos.",
    precio: 55,
    precioAntes: 70,
    icono: "📶",
    img: "img/Componentes/Módulo Bluetooth HC-05.jpg",
    tag: "oferta",
  },
  {
    id: 54,
    nombre: "Kit Resistencias (600 pcs)",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Kit con 600 resistencias de distintos valores (1Ω a 1MΩ). Organizador incluido.",
    precio: 85,
    icono: "🎛️",
    img: "img/Componentes/Kit Resistencias 600 pcs.jpg",
    tag: "nuevo",
  },
  {
    id: 55,
    nombre: "LEDs RGB Pack x50",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Pack de 50 LEDs de colores surtidos (rojo, verde, azul, amarillo). Para tus prácticas.",
    precio: 40,
    icono: "💡",
    img: "img/Componentes/LEDs RGB Pack x50.jpg",
    tag: null,
  },
  {
    id: 56,
    nombre: "Servomotor SG90",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Micro servomotor de 9g con rotación de 180°. Ideal para robótica y proyectos con Arduino.",
    precio: 45,
    precioAntes: 60,
    icono: "⚙️",
    img: "img/Componentes/Servomotor SG90.jpg",
    tag: "oferta",
  },
  {
    id: 57,
    nombre: "Display LCD 16x2 con I2C",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Pantalla LCD de 16x2 caracteres con módulo I2C. Muestra datos de tus proyectos fácilmente.",
    precio: 75,
    icono: "🖥️",
    img: "img/Componentes/Display LCD 16x2.jpg",
    tag: "nuevo",
  },

  /* ============================================================
     ====== NUEVOS PRODUCTOS DE COMPUTADORAS (HARDWARE) ======
     ============================================================ */
  {
    id: 58,
    nombre: "Laptop HP 15 Core i5",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: 'Laptop HP de 15.6" con procesador Intel Core i5, 8GB RAM y SSD 256GB. Ideal para estudiar y trabajar.',
    precio: 4499,
    precioAntes: 4997,
    icono: "💻",
    img: "img2/Computadoras/Laptop HP 15 Core i5.jpg",
    tag: "oferta",
  },
  {
    id: 59,
    nombre: "Laptop Lenovo IdeaPad Ryzen 5",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Laptop Lenovo IdeaPad con AMD Ryzen 5, 8GB RAM y SSD 512GB. Excelente relación calidad-precio.",
    precio: 4200,
    precioAntes: 4750,
    icono: "💻",
    img: "img2/Computadoras/Laptop Lenovo IdeaPad Ryzen 5.jpg",
    tag: "oferta",
  },
  {
    id: 60,
    nombre: "Laptop Dell Inspiron 14",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: 'Laptop Dell Inspiron de 14" con Intel Core i7, 16GB RAM y SSD 512GB. Potencia para multitarea.',
    precio: 6800,
    icono: "💻",
    img: "img2/Computadoras/Laptop Dell Inspiron 14.jpg",
    tag: "nuevo",
  },
  {
    id: 61,
    nombre: "PC Escritorio Gamer RGB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "PC Gamer con Ryzen 5, 16GB RAM, SSD 480GB, GTX 1650 y gabinete RGB. Lista para jugar y programar.",
    precio: 5500,
    precioAntes: 6200,
    icono: "🖥️",
    img: "img2/Computadoras/PC Escritorio Gamer RGB.jpg",
    tag: "oferta",
  },
  {
    id: 62,
    nombre: "Mini PC Intel NUC",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Mini computadora compacta con Intel Core i3, 8GB RAM y SSD 256GB. Perfecta para oficina o estudio.",
    precio: 3200,
    icono: "📦",
    img: "img2/Computadoras/Mini PC Intel NUC.jpg",
    tag: "nuevo",
  },
  {
    id: 63,
    nombre: 'All-in-One HP 24"',
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: 'Computadora todo-en-uno HP con pantalla de 23.8" Full HD, Core i5, 8GB RAM y SSD 512GB.',
    precio: 5900,
    precioAntes: 6500,
    icono: "🖥️",
    img: "img2/Computadoras/All-in-One HP 24.jpg",
    tag: "oferta",
  },

  /* ====== COMPONENTES INTERNOS (HARDWARE) ====== */
  {
    id: 64,
    nombre: "Procesador Intel Core i5",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Procesador Intel Core i5 de 12ª generación. Rendimiento equilibrado para estudio y trabajo.",
    precio: 1450,
    precioAntes: 1700,
    icono: "🧠",
    img: "img2/Computadoras/Procesador Intel Core i5.jpg",
    tag: "oferta",
  },
  {
    id: 65,
    nombre: "Procesador AMD Ryzen 5",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Procesador AMD Ryzen 5 con 6 núcleos y 12 hilos. Excelente para multitarea y gaming.",
    precio: 1350,
    icono: "🧠",
    img: "img2/Computadoras/Procesador AMD Ryzen 5.jpg",
    tag: "nuevo",
  },
  {
    id: 66,
    nombre: "Memoria RAM DDR4 8GB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Módulo de memoria RAM DDR4 de 8GB a 3200 MHz. Mejora la velocidad de tu PC.",
    precio: 285,
    precioAntes: 350,
    icono: "🎛️",
    img: "img2/Computadoras/Memoria RAM DDR4 8GB.jpg",
    tag: "oferta",
  },
  {
    id: 67,
    nombre: "Memoria RAM DDR4 16GB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Módulo de memoria RAM DDR4 de 16GB a 3200 MHz. Ideal para gaming y edición.",
    precio: 659,
    precioAntes: 730,
    icono: "🎛️",
    img: "img2/Computadoras/Memoria RAM DDR4 16GB.jpg",
    tag: "oferta",
  },
  {
    id: 68,
    nombre: "Tarjeta Madre ASUS Prime",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Placa madre ASUS Prime compatible con procesadores Intel de 12ª y 13ª generación.",
    precio: 985,
    icono: "🔲",
    img: "img2/Computadoras/Tarjeta Madre ASUS Prime.jpg",
    tag: "nuevo",
  },
  {
    id: 69,
    nombre: "Tarjeta Gráfica GTX 1650",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Tarjeta gráfica NVIDIA GTX 1650 de 4GB GDDR6. Perfecta para gaming 1080p y edición ligera.",
    precio: 1850,
    precioAntes: 2100,
    icono: "🎮",
    img: "img2/Computadoras/Tarjeta Gráfica GTX 1650.jpg",
    tag: "oferta",
  },
  {
    id: 70,
    nombre: "Fuente de Poder 600W",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Fuente de alimentación certificada 80 Plus Bronze de 600W. Estable y silenciosa.",
    precio: 425,
    icono: "⚡",
    img: "img2/Computadoras/Fuente de Poder 600W.jpg",
    tag: null,
  },
  {
    id: 71,
    nombre: "Gabinete ATX con RGB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Gabinete ATX con panel lateral de vidrio templado e iluminación RGB. Ventilación optimizada.",
    precio: 550,
    precioAntes: 680,
    icono: "🗄️",
    img: "img2/Computadoras/Gabinete ATX con RGB.jpg",
    tag: "oferta",
  },
  {
    id: 72,
    nombre: "Cooler CPU RGB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Disipador de CPU con ventilador RGB y tubos de cobre. Excelente refrigeración.",
    precio: 275,
    icono: "❄️",
    img: "img2/Computadoras/Cooler CPU RGB.jpg",
    tag: "nuevo",
  },
  {
    id: 73,
    nombre: "Pasta Térmica",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Pasta térmica de alta conductividad. Mejora la transferencia de calor del procesador.",
    precio: 45,
    icono: "🧴",
    img: "img2/Computadoras/Pasta Térmica.jpg",
    tag: null,
  },

  /* ====== SOFTWARE ====== */
  {
    id: 74,
    nombre: "Windows 11 Pro",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Licencia original de Windows 11 Pro. Sistema operativo con todas las funciones profesionales.",
    precio: 950,
    precioAntes: 1200,
    icono: "🪟",
    img: "img2/Computadoras/Windows 11 Pro.jpg",
    tag: "oferta",
  },
  {
    id: 75,
    nombre: "Microsoft Office 365",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Suscripción anual a Office 365. Incluye Word, Excel, PowerPoint y 1TB en OneDrive.",
    precio: 425,
    icono: "📊",
    img: "img2/Computadoras/Microsoft Office 365.jpg",
    tag: "nuevo",
  },
  {
    id: 76,
    nombre: "Antivirus Norton 360",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Protección completa contra virus, malware y ransomware. Licencia por 1 año.",
    precio: 320,
    precioAntes: 400,
    icono: "🛡️",
    img: "img2/Computadoras/Antivirus Norton 360.jpg",
    tag: "oferta",
  },
  {
    id: 77,
    nombre: "Adobe Creative Cloud",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Suscripción anual a Adobe CC. Photoshop, Illustrator, Premiere y más aplicaciones.",
    precio: 1850,
    precioAntes: 2200,
    icono: "🎨",
    img: "img2/Computadoras/Adobe Creative Cloud.jpg",
    tag: "oferta",
  },

  /* ====== PERIFÉRICOS ====== */
  {
    id: 78,
    nombre: 'Monitor 24" Full HD',
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Monitor LED de 24 pulgadas Full HD (1920x1080) con HDMI y VGA. Colores nítidos y vivos.",
    precio: 1150,
    precioAntes: 1350,
    icono: "🖥️",
    img: "img2/Computadoras/Monitor 24 Full HD.jpg",
    tag: "oferta",
  },
  {
    id: 79,
    nombre: 'Monitor Gamer 27" 144Hz',
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Monitor gamer de 27 pulgadas con 144Hz y 1ms de respuesta. Experiencia fluida para gaming.",
    precio: 2250,
    precioAntes: 2700,
    icono: "🖥️",
    img: "img2/Computadoras/Monitor Gamer 27 144Hz.jpg",
    tag: "oferta",
  },
  {
    id: 80,
    nombre: "Teclado Mecánico RGB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Teclado mecánico con switches azules, retroiluminación RGB y estructura resistente.",
    precio: 385,
    precioAntes: 480,
    icono: "⌨️",
    img: "img2/Computadoras/Teclado Mecánico RGB.jpg",
    tag: "oferta",
  },
  {
    id: 81,
    nombre: "Mouse Gamer 16000 DPI",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Mouse gamer con sensor óptico de 16000 DPI, 8 botones programables y luces RGB.",
    precio: 245,
    icono: "🖱️",
    img: "img2/Computadoras/Mouse Gamer 16000 DPI.jpg",
    tag: "nuevo",
  },
  {
    id: 82,
    nombre: "Webcam Full HD 1080p",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Cámara web Full HD 1080p con micrófono integrado. Perfecta para clases virtuales y reuniones.",
    precio: 320,
    precioAntes: 400,
    icono: "📷",
    img: "img2/Computadoras/Webcam Full HD 1080p.jpg",
    tag: "oferta",
  },
  {
    id: 83,
    nombre: "Memoria USB Kingston 64 GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Memoria USB 3.2 de alta velocidad con tapa deslizante. Ideal para tareas y proyectos.",
    precio: 85,
    img: "img/almacenamiento/Memoria USB Kingston 64 GB.jpg",
    tag: "stock",
  },
  {
    id: 84,
    nombre: "Lector de Tarjetas SD y MicroSD USB 3.0",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Lee y copia fotos y archivos de tu cámara o celular en segundos.",
    precio: 45,
    img: "img/almacenamiento/Lector de Tarjetas SD y MicroSD USB 3.0.jpg",
    tag: null,
  },
  {
    id: 85,
    nombre: 'Case para Disco Duro 2.5" USB 3.0',
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Convierte un disco o SSD de laptop en un disco externo portátil.",
    precio: 75,
    precioAntes: 90,
    img: "img/almacenamiento/Case para Disco Duro 2.5 USB 3.0.jpg",
    tag: "oferta",
  },
  {
    id: 86,
    nombre: "Case para SSD NVMe M.2 USB-C",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Carcasa de aluminio para usar tu SSD M.2 como unidad externa.",
    precio: 165,
    img: "img/almacenamiento/Case para SSD NVMe M.2 USB-C.jpg",
    tag: "nuevo",
  },
  {
    id: 87,
    nombre: "SSD Kingston A400 240GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: 'Unidad SATA de 2.5" para revivir una laptop o PC con arranque más rápido.',
    precio: 215,
    img: "img/almacenamiento/SSD Kingston A400 240GB.jpg",
    tag: null,
  },
  {
    id: 88,
    nombre: "Mouse USB 1000 DPI",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Mouse óptico con cable, cómodo y preciso para clases y oficina.",
    precio: 55,
    precioAntes: 65,
    img: "img2/Ofertas/Mouse USB 1000 DPI.jpg",
    tag: "oferta",
  },
  {
    id: 89,
    nombre: "Cable HDMI 1.5 m",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Cable HDMI para conectar tu laptop o PC a monitor, proyector o TV.",
    precio: 40,
    precioAntes: 50,
    img: "img2/Ofertas/Cable HDMI 1.5 m.jpg",
    tag: "oferta",
  },
  {
    id: 90,
    nombre: "Regleta de Poder 6 Tomas",
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Regleta con interruptor y protección básica para tu escritorio o laboratorio.",
    precio: 85,
    precioAntes: 100,
    img: "img2/Ofertas/Regleta de Poder 6 Tomas.jpg",
    tag: "oferta",
  },
  {
    id: 91,
    nombre: 'Mochila para Laptop 15.6"',
    cat: "oferta",
    catNombre: "Oferta",
    desc: "Mochila acolchada con compartimiento para laptop, cargador y cuadernos.",
    precio: 145,
    precioAntes: 175,
    img: "img2/Ofertas/Mochila para Laptop 15.6.jpg",
    tag: "oferta",
  },
  {
    id: 92,
    nombre: "Kit de instalación de redes",
    cat: "redes",
    catNombre: "Redes",
    desc: "Ponchadora, tester, cortador y conectores en un estuche. Todo para tu práctica de cableado.",
    precio: 260,
    img: "img2/Redes/Kit de instalación de redes.jpg",
    tag: "stock",
  },
  {
    id: 93,
    nombre: "Tester de Red RJ45 y RJ11",
    cat: "redes",
    catNombre: "Redes",
    desc: "Verifica la continuidad de tus cables UTP y telefónicos en segundos.",
    precio: 95,
    img: "img2/Redes/Tester de Red RJ45 y RJ11.jpg",
    tag: null,
  },
  {
    id: 94,
    nombre: "Cable UTP Cat6 de 5 m",
    cat: "redes",
    catNombre: "Redes",
    desc: "Patch cord Cat6 listo para usar, ideal para conectar equipos en tu laboratorio.",
    precio: 35,
    img: "img2/Redes/Cable UTP Cat6 de 5 m.jpg",
    tag: null,
  },
  {
    id: 95,
    nombre: "Adaptador USB Wi-Fi AX300",
    cat: "redes",
    catNombre: "Redes",
    desc: "Agrega Wi-Fi de doble banda a tu PC o laptop.",
    precio: 85,
    img: "img2/Redes/Adaptador USB Wi-Fi AX300.jpg",
    tag: "nuevo",
  },
  {
    id: 96,
    nombre: "Access Point Wi-Fi Empotrable",
    cat: "redes",
    catNombre: "Redes",
    desc: "Amplía la cobertura de tu red en casa u oficina con conexión por cable.",
    precio: 380,
    img: "img2/Redes/Access Point Wi-Fi Empotrable.jpg",
    tag: null,
  },
  {
    id: 97,
    nombre: "Pilas CR2032 (Pack x5)",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Pilas de botón de litio para placas, relojes y control remoto.",
    precio: 25,
    img: "img/Baterias/Pilas CR2032 (Pack x5).jpg",
    tag: null,
  },
  {
    id: 98,
    nombre: "Pilas AAA Recargables (Pack x4)",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Pilas recargables de larga duración. Ahorra en cada práctica.",
    precio: 85,
    img: "img/Baterias/Pilas AAA Recargables (Pack x4).jpg",
    tag: "stock",
  },
  {
    id: 99,
    nombre: "Portapilas 18650 Doble",
    cat: "baterias",
    catNombre: "Baterías",
    desc: "Soporte para dos baterías 18650 con cables para tus proyectos.",
    precio: 25,
    img: "img/Baterias/Portapilas 18650 Doble.jpg",
    tag: null,
  },
  {
    id: 100,
    nombre: "Protoboard 830 puntos",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Placa de pruebas para armar circuitos sin soldar.",
    precio: 60,
    img: "img/Componentes/Protoboard 830 puntos.jpg",
    tag: "stock",
  },
  {
    id: 101,
    nombre: "Kit de Jumpers Dupont (120 pcs)",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Cables macho-macho, macho-hembra y hembra-hembra para tus prototipos.",
    precio: 45,
    img: "img/Componentes/Kit de Jumpers Dupont (120 pcs).jpg",
    tag: null,
  },
  {
    id: 102,
    nombre: "Multímetro Digital",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Mide voltaje, corriente y resistencia. Indispensable para electrónica.",
    precio: 125,
    img: "img/Componentes/Multímetro Digital.jpg",
    tag: null,
  },
  {
    id: 103,
    nombre: "Soldador de Estaño 60W",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Soldador con temperatura ajustable para tus placas y reparaciones.",
    precio: 120,
    precioAntes: 140,
    img: "img/Componentes/Soldador de Estaño 60W.jpg",
    tag: "oferta",
  },
  {
    id: 104,
    nombre: "Módulo Relé 5V de 2 Canales",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Controla cargas de mayor voltaje desde Arduino o ESP32.",
    precio: 40,
    img: "img/Componentes/Módulo Relé 5V de 2 Canales.jpg",
    tag: null,
  },
  {
    id: 105,
    nombre: 'Pantalla OLED 0.96" I2C',
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Pantalla pequeña y nítida para mostrar datos de tus sensores.",
    precio: 75,
    img: "img/Componentes/Pantalla OLED 0.96 I2C.jpg",
    tag: "nuevo",
  },
  {
    id: 106,
    nombre: "Driver de Motores L298N",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Controla dos motores DC o un motor paso a paso para tus robots.",
    precio: 55,
    img: "img/Componentes/Driver de Motores L298N.jpg",
    tag: null,
  },
  {
    id: 107,
    nombre: "Arduino Nano",
    cat: "componentes",
    catNombre: "Componentes Electrónicos",
    desc: "Placa compacta compatible con Arduino, perfecta para proyectos pequeños.",
    precio: 239,
    precioAntes: 269,
    img: "img/Componentes/Arduino Nano.jpg",
    tag: "oferta",
  },
  {
    id: 108,
    nombre: "Teclado USB en Español",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Teclado de tamaño completo con teclas silenciosas.",
    precio: 110,
    img: "img2/Computadoras/Teclado USB en Español.jpg",
    tag: null,
  },
  {
    id: 109,
    nombre: "Bocinas USB 2.0",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Bocinas compactas para tu laptop o PC, con alimentación por USB.",
    precio: 95,
    img: "img2/Computadoras/Bocinas USB 2.0.jpg",
    tag: null,
  },
  {
    id: 110,
    nombre: "Memoria RAM SODIMM DDR4 8GB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Memoria para laptop. Revisa que tu equipo sea compatible con DDR4.",
    precio: 295,
    img: "img2/Computadoras/Memoria RAM SODIMM DDR4 8GB.jpg",
    tag: null,
  },
  {
    id: 111,
    nombre: "UPS 600VA",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Respaldo de energía para proteger tu PC de apagones y variaciones.",
    precio: 485,
    img: "img2/Computadoras/UPS 600VA.jpg",
    tag: "nuevo",
  },
];

/* ============================================================
   DETALLES DE PRODUCTO (marca, calificación, especificaciones)
   - rating y resenas son valores de MUESTRA: reemplázalos por
     opiniones reales de tus clientes.
   - refTienda indica la tienda donde se verificó el precio de
     referencia (precioAntes en script.js).
   ============================================================ */
const DETALLES = {
  11: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 25,
    specs: [
      "Capacidad: 2 TB",
      "Interfaz USB 3.0",
      'Formato portátil de 2.5"',
      "Compatible con Windows, macOS y Linux",
    ],
  },
  12: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 31,
    specs: [
      "Capacidad: 1 TB",
      'Formato de 3.5" para PC de escritorio',
      "Interfaz SATA III",
      "Disco mecánico (HDD)",
    ],
  },
  13: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 37,
    specs: [
      "Capacidad: 500 GB",
      'Formato 2.5" SATA III',
      "Unidad de estado sólido (SSD)",
      "Sin partes móviles, silencioso",
    ],
    refTienda: "Intelaf",
  },
  14: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 43,
    specs: [
      "Capacidad: 960 GB",
      'Formato 2.5" SATA III',
      "Unidad de estado sólido (SSD)",
      "Ideal para proyectos con muchos archivos",
    ],
    refTienda: "Intelaf",
  },
  15: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 49,
    specs: [
      "Capacidad: 500 GB",
      "Formato M.2 NVMe",
      "Unidad de estado sólido (SSD)",
      "Requiere ranura M.2 compatible",
    ],
    refTienda: "Intelaf",
  },
  16: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 8,
    specs: [
      "Capacidad: 1 TB",
      "Formato M.2 NVMe",
      "Unidad de estado sólido (SSD)",
      "Requiere ranura M.2 compatible",
    ],
  },
  17: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 14,
    specs: [
      "Capacidad: 32 GB",
      "Formato microSD",
      "Para celulares, cámaras y placas como Raspberry Pi",
    ],
  },
  18: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 20,
    specs: [
      "Capacidad: 64 GB",
      "Formato microSD",
      "Para celulares, cámaras y placas como Raspberry Pi",
    ],
  },
  19: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 26,
    specs: [
      "Capacidad: 128 GB",
      "Formato microSD",
      "Para celulares, cámaras y placas como Raspberry Pi",
    ],
  },
  20: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 32,
    specs: [
      "Capacidad: 32 GB",
      "Interfaz USB",
      "Compatible con Windows, macOS y Linux",
    ],
  },
  21: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 38,
    specs: [
      "Capacidad: 128 GB",
      "Interfaz USB",
      "Compatible con Windows, macOS y Linux",
    ],
  },
  22: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 44,
    specs: [
      "Para limpieza de equipos de cómputo",
      "Apto para pantalla, teclado y puertos",
      "Uso en casa o laboratorio",
    ],
  },
  23: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 50,
    specs: [
      "4 puertos USB 3.0",
      "Diseño compacto",
      "Compatible con PC y laptop",
    ],
  },
  24: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 9,
    specs: [
      "Base con ventilación para laptop",
      "Ayuda a reducir la temperatura del equipo",
      "Conexión por USB",
    ],
  },
  25: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 15,
    specs: [
      "Audífonos con micrófono integrado",
      "Ideales para clases virtuales y llamadas",
      "Uso con PC o laptop",
    ],
  },
  26: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 21,
    specs: ["Potencia: 20 W", "Conector USB-C", "Carga rápida"],
  },
  27: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 27,
    specs: [
      "Tamaño extendido (XL)",
      "Superficie para mouse y teclado",
      "Base antideslizante",
    ],
  },
  28: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 33,
    specs: [
      "Soporte con altura ajustable",
      "Mejora la postura al trabajar",
      "Compatible con laptops de varios tamaños",
    ],
  },
  29: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 39,
    specs: [
      "Mantiene los cables ordenados",
      "Uso en escritorio o laboratorio",
      "Fácil de instalar",
    ],
  },
  30: {
    marca: "TP-Link",
    rating: 4.6,
    resenas: 45,
    specs: [
      "Wi-Fi 6 (802.11ax)",
      "Doble banda",
      "Puertos Ethernet para equipos por cable",
    ],
  },
  31: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 51,
    specs: [
      "8 puertos Gigabit",
      "No administrable, plug & play",
      "Para laboratorio, casa u oficina",
    ],
  },
  32: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 10,
    specs: [
      "12 puertos RJ45",
      "Para organizar cableado estructurado",
      "Montaje en rack",
    ],
  },
  33: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 16,
    specs: [
      "Ponchadora profesional para conectores RJ45",
      "Para cable UTP",
      "Herramienta clave en prácticas de redes",
    ],
  },
  34: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 22,
    specs: [
      "Conector RJ45 hembra",
      "Para instalación en pared o caja",
      "Compatible con cable UTP",
    ],
  },
  35: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 28,
    specs: [
      "Cable UTP categoría 6",
      "Se vende por metro",
      "Para redes Gigabit",
    ],
  },
  36: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 34,
    specs: [
      "Pack de 100 conectores RJ45",
      "Compatibles con cable UTP",
      "Para prácticas y proyectos de redes",
    ],
  },
  37: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 40,
    specs: [
      "Estándar Wi-Fi 6 (AX1500)",
      "Amplía la cobertura de tu red inalámbrica",
      "Instalación sencilla",
    ],
  },
  38: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 46,
    specs: [
      "Batería de reemplazo para laptops HP",
      "Verifica el modelo antes de comprar",
      "Recargable",
    ],
  },
  39: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 52,
    specs: [
      "Batería de reemplazo para laptops Dell",
      "Verifica el modelo antes de comprar",
      "Recargable",
    ],
  },
  40: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 11,
    specs: [
      "Batería de reemplazo para laptops Lenovo",
      "Verifica el modelo antes de comprar",
      "Recargable",
    ],
  },
  41: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 17,
    specs: [
      "Batería de litio 18650",
      "Recargable",
      "Para proyectos de electrónica y linternas",
    ],
  },
  42: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 23,
    specs: [
      "Capacidad: 10,000 mAh",
      "Para carga de celulares y accesorios",
      "Portátil",
    ],
  },
  43: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 29,
    specs: ["Capacidad: 20,000 mAh", "Varias cargas de celular", "Portátil"],
  },
  44: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 35,
    specs: [
      "Batería alcalina de 9 V",
      "Para multímetros y proyectos",
      "Uso general",
    ],
  },
  45: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 41,
    specs: [
      "Pack de 4 pilas AA recargables",
      "Reutilizables",
      "Compatibles con cargador AA/AAA",
    ],
  },
  46: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 47,
    specs: [
      "Cargador para pilas AA y AAA",
      "Ahorra en pilas desechables",
      "Uso doméstico",
    ],
  },
  47: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 6,
    specs: ["12 V, 7 Ah", "Batería sellada para UPS", "Reemplazo estándar"],
  },
  48: {
    marca: "Arduino",
    rating: 4.7,
    resenas: 12,
    specs: [
      "Microcontrolador ATmega328P",
      "14 pines digitales y 6 analógicos",
      "Alimentación por USB o jack",
    ],
    refTienda: "Oxdea",
  },
  49: {
    marca: "Raspberry Pi",
    rating: 4.2,
    resenas: 18,
    specs: [
      "Computadora de placa reducida",
      "Conectividad Wi-Fi y Bluetooth",
      "Para programación, servidores y robótica",
    ],
  },
  50: {
    marca: "Espressif",
    rating: 4.4,
    resenas: 24,
    specs: [
      "Microcontrolador ESP32",
      "Wi-Fi y Bluetooth integrados",
      "Compatible con Arduino IDE",
    ],
    refTienda: "Sepcon Electrónica",
  },
  51: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 30,
    specs: [
      "Mide temperatura y humedad",
      "Salida digital",
      "Compatible con Arduino y ESP32",
    ],
  },
  52: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 36,
    specs: [
      "Sensor de distancia ultrasónico",
      "Alcance aproximado de 2 cm a 4 m",
      "Compatible con Arduino",
    ],
  },
  53: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 42,
    specs: [
      "Módulo Bluetooth serial HC-05",
      "Comunicación inalámbrica con celular o PC",
      "Compatible con Arduino",
    ],
  },
  54: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 48,
    specs: [
      "600 resistencias de valores variados",
      "Para prácticas y prototipos",
      "Ideal para estudiantes",
    ],
  },
  55: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 7,
    specs: [
      "Pack de 50 LEDs RGB",
      "Para proyectos de iluminación",
      "Compatibles con Arduino",
    ],
  },
  56: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 13,
    specs: [
      "Servomotor SG90 de 9 g",
      "Giro de aproximadamente 180°",
      "Para brazos robóticos y proyectos",
    ],
  },
  57: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 19,
    specs: [
      "Pantalla LCD de 16x2 caracteres",
      "Adaptador I2C incluido",
      "Ahorra pines en tu Arduino",
    ],
  },
  58: {
    marca: "HP",
    rating: 4.6,
    resenas: 25,
    specs: [
      "Procesador Intel Core i5",
      'Pantalla de 15.6"',
      "Almacenamiento SSD",
      "Windows 11",
    ],
    refTienda: "La Curacao",
  },
  59: {
    marca: "Lenovo",
    rating: 4.8,
    resenas: 31,
    specs: [
      "Procesador AMD Ryzen 5",
      "Pensada para estudio y trabajo",
      "Windows 11",
    ],
  },
  60: {
    marca: "Dell",
    rating: 4.3,
    resenas: 37,
    specs: ['Pantalla de 14"', "Diseño portátil", "Para estudio y oficina"],
  },
  61: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 43,
    specs: [
      "PC de escritorio gamer",
      "Iluminación RGB",
      "Lista para juegos y diseño",
    ],
  },
  62: {
    marca: "Intel",
    rating: 4.7,
    resenas: 49,
    specs: [
      "Mini PC de tamaño reducido",
      "Procesador Intel",
      "Ideal para oficina y estudio",
    ],
  },
  63: {
    marca: "HP",
    rating: 4.2,
    resenas: 8,
    specs: [
      'Computadora todo en uno de 24"',
      "Pantalla y equipo integrados",
      "Ahorra espacio en el escritorio",
    ],
  },
  64: {
    marca: "Intel",
    rating: 4.4,
    resenas: 14,
    specs: [
      "Procesador Intel Core i5",
      "Para PC de escritorio",
      "Verifica el socket de tu tarjeta madre",
    ],
  },
  65: {
    marca: "AMD",
    rating: 4.6,
    resenas: 20,
    specs: [
      "Procesador AMD Ryzen 5",
      "Para PC de escritorio",
      "Verifica el socket de tu tarjeta madre",
    ],
  },
  66: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 26,
    specs: [
      "Memoria DDR4 de 8 GB",
      "Para PC de escritorio",
      "Compatible con la mayoría de placas DDR4",
    ],
  },
  67: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 32,
    specs: [
      "Memoria DDR4 de 16 GB",
      "Para PC de escritorio",
      "Compatible con la mayoría de placas DDR4",
    ],
    refTienda: "Intelaf",
  },
  68: {
    marca: "ASUS",
    rating: 4.5,
    resenas: 38,
    specs: [
      "Tarjeta madre ASUS Prime",
      "Para armar o actualizar tu PC",
      "Verifica el socket del procesador",
    ],
  },
  69: {
    marca: "NVIDIA",
    rating: 4.7,
    resenas: 44,
    specs: [
      "GPU NVIDIA GeForce GTX 1650",
      "Para juegos y diseño",
      "Salidas de video para monitor",
    ],
  },
  70: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 50,
    specs: [
      "Potencia: 600 W",
      "Para PC de escritorio",
      "Conectores para placa, disco y gráfica",
    ],
  },
  71: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 9,
    specs: [
      "Gabinete ATX",
      "Iluminación RGB",
      "Compatible con tarjetas madre ATX",
    ],
  },
  72: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 15,
    specs: [
      "Cooler para procesador",
      "Iluminación RGB",
      "Mejora la refrigeración de tu CPU",
    ],
  },
  73: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 21,
    specs: [
      "Pasta térmica para procesador",
      "Mejora la transferencia de calor",
      "Uso en armado y mantenimiento de PC",
    ],
  },
  74: {
    marca: "Microsoft",
    rating: 4.3,
    resenas: 27,
    specs: [
      "Licencia de Windows 11 Pro",
      "Sistema operativo para PC",
      "Entrega digital",
    ],
  },
  75: {
    marca: "Microsoft",
    rating: 4.5,
    resenas: 33,
    specs: [
      "Suscripción Microsoft Office 365",
      "Word, Excel y PowerPoint",
      "Entrega digital",
    ],
  },
  76: {
    marca: "Norton",
    rating: 4.7,
    resenas: 39,
    specs: [
      "Antivirus Norton 360",
      "Protección contra virus y amenazas",
      "Entrega digital",
    ],
  },
  77: {
    marca: "Adobe",
    rating: 4.2,
    resenas: 45,
    specs: [
      "Suscripción Adobe Creative Cloud",
      "Aplicaciones de diseño y edición",
      "Entrega digital",
    ],
  },
  78: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 51,
    specs: [
      'Monitor de 24" Full HD',
      "Resolución 1920x1080",
      "Entradas de video para PC y laptop",
    ],
  },
  79: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 10,
    specs: [
      'Monitor gamer de 27"',
      "Frecuencia de 144 Hz",
      "Para juegos fluidos",
    ],
  },
  80: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 16,
    specs: ["Teclado mecánico", "Iluminación RGB", "Para juegos y escritura"],
  },
  81: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 22,
    specs: ["Sensibilidad hasta 16,000 DPI", "Mouse para juegos", "Cable USB"],
  },
  82: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 28,
    specs: [
      "Resolución Full HD 1080p",
      "Micrófono integrado",
      "Para clases virtuales y reuniones",
    ],
  },
  83: {
    marca: "Kingston",
    rating: 4.7,
    resenas: 34,
    specs: ["Capacidad: 64 GB", "Interfaz USB 3.2", "Tapa deslizante"],
  },
  84: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 40,
    specs: [
      "Lee tarjetas SD y MicroSD",
      "Interfaz USB 3.0",
      "Compacto y portátil",
    ],
  },
  85: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 46,
    specs: [
      'Para discos y SSD de 2.5"',
      "Conexión USB 3.0",
      "Convierte tu disco en una unidad externa",
    ],
  },
  86: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 52,
    specs: ["Para SSD M.2 NVMe", "Conexión USB-C", "Carcasa de aluminio"],
  },
  87: {
    marca: "Kingston",
    rating: 4.8,
    resenas: 11,
    specs: [
      "Capacidad: 240 GB",
      'Formato 2.5" SATA III',
      "Unidad de estado sólido (SSD)",
    ],
  },
  88: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 17,
    specs: [
      "Mouse óptico con cable USB",
      "Sensibilidad 1000 DPI",
      "Compatible con Windows y macOS",
    ],
  },
  89: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 23,
    specs: [
      "Cable HDMI de 1.5 m",
      "Conecta PC o laptop a monitor, proyector o TV",
      "Audio y video digital",
    ],
  },
  90: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 29,
    specs: [
      "Regleta de 6 tomas",
      "Con interruptor",
      "Protección básica para tus equipos",
    ],
  },
  91: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 35,
    specs: [
      'Para laptops de hasta 15.6"',
      "Interior acolchado",
      "Compartimentos para cargador y cuadernos",
    ],
  },
  92: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 41,
    specs: [
      "Incluye ponchadora, tester, cortador y conectores",
      "Estuche organizador",
      "Ideal para prácticas de cableado",
    ],
  },
  93: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 47,
    specs: [
      "Prueba cables RJ45 y RJ11",
      "Verifica la continuidad de cada hilo",
      "Uso en laboratorio y campo",
    ],
  },
  94: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 6,
    specs: ["Cable Cat6 de 5 metros", "Con conectores RJ45", "Listo para usar"],
  },
  95: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 12,
    specs: ["Wi-Fi AX300 de doble banda", "Conexión USB", "Para PC y laptop"],
  },
  96: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 18,
    specs: [
      "Amplía la cobertura Wi-Fi",
      "Conexión por cable a tu red",
      "Instalación empotrable",
    ],
  },
  97: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 24,
    specs: [
      "Pack de 5 pilas CR2032",
      "Litio de 3 V",
      "Para placas, relojes y controles",
    ],
  },
  98: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 30,
    specs: [
      "Pack de 4 pilas AAA recargables",
      "Larga duración",
      "Reutilizables",
    ],
  },
  99: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 36,
    specs: [
      "Soporte para 2 baterías 18650",
      "Con cables para conexión",
      "Para proyectos de electrónica",
    ],
  },
  100: {
    marca: "AllTech",
    rating: 4.6,
    resenas: 42,
    specs: [
      "830 puntos de conexión",
      "Armado de circuitos sin soldar",
      "Reutilizable",
    ],
  },
  101: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 48,
    specs: [
      "120 cables Dupont",
      "Macho-macho, macho-hembra y hembra-hembra",
      "Para prototipos",
    ],
  },
  102: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 7,
    specs: [
      "Mide voltaje, corriente y resistencia",
      "Pantalla digital",
      "Indispensable en electrónica",
    ],
  },
  103: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 13,
    specs: [
      "Potencia: 60 W",
      "Temperatura ajustable",
      "Para soldar placas y reparar",
    ],
  },
  104: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 19,
    specs: [
      "Módulo de 2 relés a 5 V",
      "Controla cargas de mayor voltaje",
      "Compatible con Arduino y ESP32",
    ],
  },
  105: {
    marca: "AllTech",
    rating: 4.2,
    resenas: 25,
    specs: [
      'Pantalla OLED de 0.96"',
      "Comunicación I2C",
      "Ideal para mostrar datos de sensores",
    ],
  },
  106: {
    marca: "AllTech",
    rating: 4.4,
    resenas: 31,
    specs: [
      "Driver para motores L298N",
      "Controla 2 motores DC",
      "Para robots y proyectos",
    ],
  },
  107: {
    marca: "Arduino",
    rating: 4.6,
    resenas: 37,
    specs: [
      "Placa compacta basada en ATmega328P",
      "Pines digitales y analógicos",
      "Ideal para proyectos pequeños",
    ],
    refTienda: "Oxdea",
  },
  108: {
    marca: "AllTech",
    rating: 4.8,
    resenas: 43,
    specs: ["Teclado USB en español", "Tamaño completo", "Teclas silenciosas"],
  },
  109: {
    marca: "AllTech",
    rating: 4.3,
    resenas: 49,
    specs: ["Bocinas USB 2.0", "Compactas", "Para laptop o PC"],
  },
  110: {
    marca: "AllTech",
    rating: 4.5,
    resenas: 8,
    specs: [
      "Memoria DDR4 SODIMM de 8 GB",
      "Para laptop",
      "Verifica compatibilidad con tu equipo",
    ],
  },
  111: {
    marca: "AllTech",
    rating: 4.7,
    resenas: 14,
    specs: [
      "UPS de 600 VA",
      "Respaldo ante apagones",
      "Protege tu PC de variaciones de voltaje",
    ],
  },
};

/* Imagen de respaldo (sin emojis) cuando falta la foto */
const IMG_PLACEHOLDER =
  "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23f1f4f9%22%2F%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%239aa9c2%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Crect%20x%3D%2262%22%20y%3D%2264%22%20width%3D%2276%22%20height%3D%2262%22%20rx%3D%228%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2295%22%20r%3D%2215%22%2F%3E%3Cpath%20d%3D%22M82%2064l5-9h26l5%209%22%2F%3E%3C%2Fg%3E%3Ctext%20x%3D%22100%22%20y%3D%22156%22%20font-family%3D%22sans-serif%22%20font-size%3D%2213%22%20font-weight%3D%22600%22%20fill%3D%22%237b8aa5%22%20text-anchor%3D%22middle%22%3EFoto%20pr%C3%B3ximamente%3C%2Ftext%3E%3C%2Fsvg%3E";

/* Fusionar detalles (marca, rating, especificaciones) definidos en js/detalles.js */
productos.forEach((p) => {
  const d = (typeof DETALLES !== "undefined" && DETALLES[p.id]) || {};
  Object.assign(p, d);
  p.marca = p.marca || "AllTech";
  p.rating = p.rating || 4.5;
  p.resenas = p.resenas || 10;
  p.specs = p.specs || [];
});

/* ============ ESTADO ============ */
let carrito = JSON.parse(localStorage.getItem("tp_cart") || "[]");
let favoritos = JSON.parse(localStorage.getItem("tp_favs") || "[]");
let users = JSON.parse(localStorage.getItem("tp_users") || "[]");
let user = JSON.parse(localStorage.getItem("tp_user") || "null");
let busqueda = "";
let filtroCat = "todos";
let envioSeleccionado = "express";

// NUEVO: Arreglo de correos que ya obtuvieron el descuento
let userDiscounts = JSON.parse(localStorage.getItem("tp_discounts") || "[]");

const ENVIO_COSTO = 25;
const ENVIO_GRATIS_MIN = 220;

/* ============ RENDER PRODUCTOS ============ */
const grid = document.getElementById("grid");

function fmt(n) {
  return (
    "Q" +
    Number(n).toLocaleString("es-GT", {
      minimumFractionDigits: n % 1 ? 2 : 0,
      maximumFractionDigits: 2,
    })
  );
}

/* ============ FILTROS + CATÁLOGO ============ */
const CATEGORIAS = [
  ["todos", "Todos"],
  ["oferta", "Ofertas"],
  ["almacenamiento", "Almacenamiento"],
  ["redes", "Redes"],
  ["baterias", "Baterías"],
  ["componentes", "Componentes"],
  ["computadoras", "Computadoras"],
];
const PRECIO_TOPE =
  Math.ceil(Math.max(...productos.map((p) => p.precio)) / 100) * 100;
const filtrosDefault = () => ({
  max: PRECIO_TOPE,
  marcas: [],
  ofertas: false,
  disponibles: false,
  orden: "relevancia",
});
let filtros = filtrosDefault();
let primerRender = true;

const svgIco = (id, cls = "") =>
  `<svg class="ico ${cls}"><use href="#${id}"/></svg>`;
const descuentoPct = (p) =>
  p.precioAntes && p.precioAntes > p.precio
    ? Math.round((1 - p.precio / p.precioAntes) * 100)
    : 0;

function filtrar() {
  const q = busqueda.toLowerCase().trim();
  let lista = productos.filter((p) => {
    const okBus =
      !q ||
      p.nombre.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.catNombre.toLowerCase().includes(q) ||
      (p.marca || "").toLowerCase().includes(q);
    const okCat = filtroCat === "todos" || p.cat === filtroCat;
    const okPrecio = p.precio <= filtros.max;
    const okMarca = !filtros.marcas.length || filtros.marcas.includes(p.marca);
    const okOferta = !filtros.ofertas || descuentoPct(p) > 0;
    const okDisp = !filtros.disponibles || p.tag === "stock";
    return okBus && okCat && okPrecio && okMarca && okOferta && okDisp;
  });
  const o = filtros.orden;
  if (o === "precio-asc") lista.sort((a, b) => a.precio - b.precio);
  else if (o === "precio-desc") lista.sort((a, b) => b.precio - a.precio);
  else if (o === "valorados")
    lista.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  else if (o === "descuento")
    lista.sort((a, b) => descuentoPct(b) - descuentoPct(a));
  return lista;
}

function pintarFiltros() {
  // Categorías
  document.getElementById("filtroCategorias").innerHTML = CATEGORIAS.map(
    ([k, n]) =>
      `<button type="button" class="f-cat ${filtroCat === k ? "active" : ""}" data-cat="${k}">${n}</button>`,
  ).join("");

  // Marcas (las más frecuentes)
  const conteo = {};
  productos.forEach((p) => (conteo[p.marca] = (conteo[p.marca] || 0) + 1));
  const top = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  document.getElementById("filtroMarcas").innerHTML = top
    .map(
      ([m, n]) => `
    <label class="f-check">
      <input type="checkbox" value="${m}" ${filtros.marcas.includes(m) ? "checked" : ""}>
      <span>${m}</span><em>${n}</em>
    </label>`,
    )
    .join("");

  // Precio
  const r = document.getElementById("fPrecio");
  r.max = PRECIO_TOPE;
  r.value = filtros.max;
  document.getElementById("fPrecioLabel").textContent =
    "(hasta " + fmt(filtros.max) + ")";
  document.getElementById("fPrecioMax").textContent = fmt(PRECIO_TOPE) + "+";
  r.style.setProperty("--fill", (filtros.max / PRECIO_TOPE) * 100 + "%");

  document.getElementById("fOfertas").checked = filtros.ofertas;
  document.getElementById("fDisponibles").checked = filtros.disponibles;
  document.getElementById("fOrden").value = filtros.orden;
}

function renderProductos() {
  const lista = filtrar();
  document.getElementById("resultCount").textContent =
    lista.length + (lista.length === 1 ? " producto" : " productos");
  document
    .querySelectorAll(".f-cat")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === filtroCat));

  if (!lista.length) {
    grid.innerHTML = `<div class="empty">No encontramos productos con esos filtros.<br><button type="button" class="btn btn-ghost" id="emptyReset" style="margin-top:14px;color:var(--text);border-color:var(--border-strong)">Limpiar filtros</button></div>`;
    document
      .getElementById("emptyReset")
      .addEventListener("click", limpiarFiltros);
    return;
  }

  grid.innerHTML = lista
    .map((p) => {
      const esFav = favoritos.includes(p.id);
      const off = descuentoPct(p);
      return `
  <article class="card" data-id="${p.id}">
    <div class="card-img">
      ${p.tag ? `<span class="tag ${p.tag}">${p.tag === "oferta" ? "OFERTA" : p.tag === "nuevo" ? "NUEVO" : "DISPONIBLE"}</span>` : ""}
      <button class="fav-toggle ${esFav ? "active" : ""}" data-id="${p.id}" title="Favorito" aria-label="Añadir a favoritos">${svgIco("i-heart")}</button>
      <img src="${encodeURI(p.img || "")}" alt="${p.nombre}" loading="lazy" onerror="this.onerror=null; this.src=IMG_PLACEHOLDER;" />
      ${off ? `<span class="badge-off">-${off}%</span>` : ""}
    </div>
    <div class="card-body">
      <span class="card-cat">${p.marca}</span>
      <h3>${p.nombre}</h3>
      <div class="card-rating">${svgIco("i-star")}<b>${p.rating.toFixed(1)}</b><span>(${p.resenas})</span></div>
      <p class="desc">${p.desc}</p>
      <div class="price-row">
        <span class="price">${fmt(p.precio)}</span>
        ${p.precioAntes ? `<span class="old-price">${fmt(p.precioAntes)}</span>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn-add" data-id="${p.id}">Agregar</button>
        <button class="btn-view" data-id="${p.id}" title="Ver detalle">Detalle</button>
      </div>
    </div>
  </article>`;
    })
    .join("");

  if (primerRender) {
    primerRender = false;
  } else {
    grid.classList.add("no-anim");
  }
}

// Un solo manejador de clics para todas las tarjetas
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const id = Number(card.dataset.id);
  if (e.target.closest(".btn-add")) return agregarAlCarrito(id);
  if (e.target.closest(".fav-toggle")) return toggleFavorito(id);
  abrirProducto(id);
});

function limpiarFiltros() {
  filtros = filtrosDefault();
  filtroCat = "todos";
  busqueda = "";
  document.getElementById("search").value = "";
  pintarFiltros();
  renderProductos();
}

/* --- Eventos de la barra de filtros --- */
document.getElementById("fPrecio").addEventListener("input", (e) => {
  filtros.max = Number(e.target.value);
  document.getElementById("fPrecioLabel").textContent =
    "(hasta " + fmt(filtros.max) + ")";
  e.target.style.setProperty("--fill", (filtros.max / PRECIO_TOPE) * 100 + "%");
  renderProductos();
});
document.getElementById("filtroMarcas").addEventListener("change", (e) => {
  const m = e.target.value;
  filtros.marcas = e.target.checked
    ? [...filtros.marcas, m]
    : filtros.marcas.filter((x) => x !== m);
  renderProductos();
});
document.getElementById("filtroCategorias").addEventListener("click", (e) => {
  const b = e.target.closest(".f-cat");
  if (!b) return;
  filtroCat = b.dataset.cat;
  renderProductos();
});
document.getElementById("fOfertas").addEventListener("change", (e) => {
  filtros.ofertas = e.target.checked;
  renderProductos();
});
document.getElementById("fDisponibles").addEventListener("change", (e) => {
  filtros.disponibles = e.target.checked;
  renderProductos();
});
document.getElementById("fOrden").addEventListener("change", (e) => {
  filtros.orden = e.target.value;
  renderProductos();
});
document.getElementById("fLimpiar").addEventListener("click", limpiarFiltros);
document.getElementById("btnFiltros").addEventListener("click", () => {
  document.getElementById("filters").classList.toggle("open");
});

/* ============ MODAL DE PRODUCTO ============ */
const productModal = document.getElementById("productModal");
let productoAbierto = null;

function abrirProducto(id) {
  const p = productos.find((x) => x.id === id);
  if (!p) return;
  productoAbierto = id;
  const img = document.getElementById("pmImg");
  img.onerror = () => {
    img.onerror = null;
    img.src = IMG_PLACEHOLDER;
  };
  img.src = encodeURI(p.img || "");
  img.alt = p.nombre;
  document.getElementById("pmBrand").textContent = p.marca;
  document.getElementById("pmTitle").textContent = p.nombre;
  document.getElementById("pmRating").textContent = p.rating.toFixed(1);
  document.getElementById("pmReviews").textContent = `(${p.resenas} reseñas)`;
  document.getElementById("pmDesc").textContent = p.desc;
  document.getElementById("pmSpecs").innerHTML = (p.specs || [])
    .map((s) => `<li>${s}</li>`)
    .join("");
  document.getElementById("pmCat").textContent = p.catNombre;

  const off = descuentoPct(p);
  document.getElementById("pmPrice").textContent = fmt(p.precio);
  const old = document.getElementById("pmOld");
  old.textContent = off ? fmt(p.precioAntes) : "";
  old.style.display = off ? "" : "none";
  const badge = document.getElementById("pmOff");
  badge.textContent = off ? `-${off}%` : "";
  badge.style.display = off ? "" : "none";
  const ref = document.getElementById("pmRef");
  ref.textContent = off
    ? p.refTienda
      ? `Precio en ${p.refTienda}: ${fmt(p.precioAntes)}. Ahorras ${fmt(p.precioAntes - p.precio)}.`
      : `Ahorras ${fmt(p.precioAntes - p.precio)} frente al precio anterior.`
    : "";
  ref.style.display = off ? "" : "none";

  pintarFavModal();
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarProducto() {
  productoAbierto = null;
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function pintarFavModal() {
  if (productoAbierto === null) return;
  const esFav = favoritos.includes(productoAbierto);
  const b = document.getElementById("pmFav");
  b.classList.toggle("active", esFav);
  b.querySelector("span").textContent = esFav
    ? "En favoritos"
    : "Añadir a favoritos";
}

document.getElementById("pmClose").addEventListener("click", cerrarProducto);
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) cerrarProducto();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productoAbierto !== null) cerrarProducto();
});
document.getElementById("pmAdd").addEventListener("click", () => {
  if (productoAbierto !== null) agregarAlCarrito(productoAbierto);
});
document.getElementById("pmFav").addEventListener("click", () => {
  if (productoAbierto !== null) toggleFavorito(productoAbierto);
});
// Tarjetas de "AllTech recomienda" abren el detalle del producto
document.querySelectorAll(".rec-card[data-pid]").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    abrirProducto(Number(a.dataset.pid));
  }),
);

pintarFiltros();

/* ============ FAVORITOS ============ */
function toggleFavorito(id) {
  const idx = favoritos.indexOf(id);
  if (idx >= 0) {
    favoritos.splice(idx, 1);
    mostrarToast("Eliminado de favoritos");
  } else {
    favoritos.push(id);
    mostrarToast("Añadido a favoritos");
  }
  localStorage.setItem("tp_favs", JSON.stringify(favoritos));
  renderProductos();
  renderFavoritos();
  actualizarContadorFav();
  pintarFavModal();
}

function actualizarContadorFav() {
  const badge = document.getElementById("favCount");
  badge.textContent = favoritos.length;
  badge.style.display = favoritos.length ? "grid" : "none";
}

function renderFavoritos() {
  const body = document.getElementById("favBody");
  if (!favoritos.length) {
    body.innerHTML = `<div class="cart-empty">No tenés favoritos aún.<br>Tocá el corazón en cualquier producto.</div>`;
    return;
  }
  const items = favoritos
    .map((id) => productos.find((p) => p.id === id))
    .filter(Boolean);

  body.innerHTML = items
    .map(
      (p) => `
    <div class="cart-item">
      <div class="ci-img">
        ${p.img ? `<img src="${encodeURI(p.img)}" alt="${p.nombre}" onerror="this.onerror=null; this.src=IMG_PLACEHOLDER;">` : p.icono}
      </div>
      <div class="ci-info">
        <b>${p.nombre}</b>
        <span>${fmt(p.precio)}</span>
        <div class="ci-qty">
          <button class="fav-add" data-id="${p.id}" style="width:auto;padding:4px 10px;border-radius:6px;background:var(--primary);color:#04241d;font-weight:700;font-size:0.75rem;">+ Agregar</button>
          <button class="fav-del" data-id="${p.id}" style="margin-left:6px;color:var(--danger);background:none;">🗑</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  body
    .querySelectorAll(".fav-add")
    .forEach((b) =>
      b.addEventListener("click", () => agregarAlCarrito(Number(b.dataset.id))),
    );
  body
    .querySelectorAll(".fav-del")
    .forEach((b) =>
      b.addEventListener("click", () => toggleFavorito(Number(b.dataset.id))),
    );
}

/* ============ CARRITO ============ */
function agregarAlCarrito(id) {
  const p = productos.find((x) => x.id === id);
  const item = carrito.find((x) => x.id === id);
  if (item) item.qty++;
  else
    carrito.push({
      id,
      nombre: p.nombre,
      precio: p.precio,
      icono: p.icono,
      img: p.img,
      qty: 1,
    });
  guardarCarrito();
  renderCarrito();
  mostrarToast(`${p.nombre} agregado`);
}

function agregarCombo(nombre, precio) {
  const item = carrito.find((x) => x.nombre === nombre);
  if (item) item.qty++;
  else
    carrito.push({
      id: "combo-" + nombre,
      nombre,
      precio: Number(precio),
      icono: "🎁",
      img: null,
      qty: 1,
    });
  guardarCarrito();
  renderCarrito();
  mostrarToast(`${nombre} agregado`);
}

function guardarCarrito() {
  localStorage.setItem("tp_cart", JSON.stringify(carrito));
  const total = carrito.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  badge.textContent = total;
  badge.style.display = total ? "grid" : "none";
}

function renderCarrito() {
  const body = document.getElementById("cartBody");
  if (!carrito.length) {
    body.innerHTML = `<div class="cart-empty">🛒<br><br>Tu carrito está vacío.<br>Agregá productos del catálogo.</div>`;
  } else {
    body.innerHTML = carrito
      .map(
        (i, idx) => `
    <div class="cart-item">
      <div class="ci-img">
        ${
          i.img
            ? `<img src="${encodeURI(i.img)}" alt="${i.nombre}" onerror="this.onerror=null; this.src=IMG_PLACEHOLDER;">`
            : i.icono
        }
      </div>
      <div class="ci-info">
        <b>${i.nombre}</b>
        <span>${fmt(i.precio)} c/u</span>
        <div class="ci-qty">
          <button data-act="menos" data-idx="${idx}">−</button>
          <span>${i.qty}</span>
          <button data-act="mas" data-idx="${idx}">+</button>
          <button data-act="del" data-idx="${idx}" style="margin-left:6px;color:var(--danger)">🗑</button>
        </div>
      </div>
      <div class="ci-price">${fmt(i.precio * i.qty)}</div>
    </div>
  `,
      )
      .join("");
  }

  const total = carrito.reduce((s, i) => s + i.precio * i.qty, 0);
  document.getElementById("cartTotal").textContent = fmt(total);
  guardarCarrito();

  body.querySelectorAll("button[data-act]").forEach((b) => {
    b.addEventListener("click", () => {
      const idx = Number(b.dataset.idx);
      const act = b.dataset.act;
      if (act === "mas") carrito[idx].qty++;
      else if (act === "menos") {
        carrito[idx].qty--;
        if (carrito[idx].qty <= 0) carrito.splice(idx, 1);
      } else if (act === "del") carrito.splice(idx, 1);
      renderCarrito();
    });
  });
}

/* ============ DRAWER CARRITO ============ */
const drawer = document.getElementById("drawer");
const favDrawer = document.getElementById("favDrawer");
const overlay = document.getElementById("overlay");
const cartBody = document.getElementById("cartBody");
const checkoutForm = document.getElementById("checkoutForm");
const drawerFoot = document.getElementById("drawerFoot");
const drawerTitle = document.getElementById("drawerTitle");

function abrirCarrito() {
  mostrarVistaCarrito();
  drawer.classList.add("open");
  overlay.classList.add("open");
}
function cerrarCarrito() {
  drawer.classList.remove("open");
  favDrawer.classList.remove("open");
  overlay.classList.remove("open");
}
function mostrarVistaCarrito() {
  cartBody.style.display = "block";
  checkoutForm.style.display = "none";
  drawerFoot.style.display = "block";
  drawerTitle.textContent = "Tu pedido";
}
function mostrarVistaCheckout() {
  if (!carrito.length) {
    mostrarToast("Tu carrito está vacío");
    return;
  }
  cartBody.style.display = "none";
  checkoutForm.style.display = "block";
  drawerFoot.style.display = "none";
  drawerTitle.textContent = "Finalizar compra";
  // Prellenar datos si hay usuario logueado
  if (user) {
    document.getElementById("ckNombre").value = user.name || "";
  }
  actualizarResumenCheckout();
}

document.getElementById("cartBtn").addEventListener("click", abrirCarrito);
document.getElementById("closeCart").addEventListener("click", cerrarCarrito);
document
  .getElementById("checkout")
  .addEventListener("click", mostrarVistaCheckout);
document
  .getElementById("ckBack")
  .addEventListener("click", mostrarVistaCarrito);
overlay.addEventListener("click", cerrarCarrito);

/* ============ CHECKOUT LÓGICA ============ */
function calcularTotales() {
  const subtotal = carrito.reduce((s, i) => s + i.precio * i.qty, 0);

  // Calcular descuento del 10% si el usuario lo ha reclamado
  let descuento = 0;
  if (user && userDiscounts.includes(user.email)) {
    descuento = subtotal * 0.1;
  }

  const subtotalConDescuento = subtotal - descuento;

  // El envío gratis se calcula sobre el subtotal CON descuento
  let envio = subtotalConDescuento >= ENVIO_GRATIS_MIN ? 0 : ENVIO_COSTO;

  return { subtotal, descuento, envio, total: subtotalConDescuento + envio };
}

function actualizarResumenCheckout() {
  const { subtotal, descuento, envio, total } = calcularTotales();

  document.getElementById("ckSubtotal").textContent = fmt(subtotal);

  // Mostrar/ocultar fila de descuento
  const discRow = document.getElementById("ckDescuentoRow");
  if (discRow) {
    if (descuento > 0) {
      discRow.style.display = "flex";
      document.getElementById("ckDescuento").textContent = "-" + fmt(descuento);
    } else {
      discRow.style.display = "none";
    }
  }

  document.getElementById("ckEnvio").textContent =
    envio === 0 ? "GRATIS 🎉" : fmt(envio);
  document.getElementById("ckTotal").textContent = fmt(total);

  const note = document.getElementById("envioNote");
  const subtotalConDescuento = subtotal - descuento;

  if (subtotalConDescuento >= ENVIO_GRATIS_MIN) {
    note.textContent = "🎉 ¡Felicidades! Tenés envío GRATIS.";
    note.style.color = "var(--primary)";
  } else {
    const falta = ENVIO_GRATIS_MIN - subtotalConDescuento;
    note.textContent = `Te faltan ${fmt(falta)} para envío GRATIS. Costo de envío: Q${ENVIO_COSTO}.`;
    note.style.color = "var(--muted)";
  }
}

document.querySelectorAll('input[name="envio"]').forEach((r) =>
  r.addEventListener("change", (e) => {
    envioSeleccionado = e.target.value;
  }),
);

document.getElementById("pagoTarjeta").addEventListener("change", (e) => {
  document.getElementById("tarjetaSub").style.display = e.target.checked
    ? "flex"
    : "none";
});

document.getElementById("ckConfirm").addEventListener("click", () => {
  const nombre = document.getElementById("ckNombre").value.trim();
  const direccion = document.getElementById("ckDireccion").value.trim();
  const nit = document.getElementById("ckNit").value.trim();
  const telefono = document.getElementById("ckTelefono").value.trim();
  const pago = document.querySelector('input[name="pago"]:checked')?.value;
  const tarjeta = document.querySelector(
    'input[name="tarjeta"]:checked',
  )?.value;

  if (!nombre || !direccion || !nit || !telefono) {
    mostrarToast("Completá todos los campos obligatorios");
    return;
  }
  if (!/^\d{8,}$/.test(telefono.replace(/\D/g, ""))) {
    mostrarToast("Ingresá un teléfono válido");
    return;
  }

  const { subtotal, descuento, envio, total } = calcularTotales();
  const pagoTexto =
    pago === "tarjeta" ? `Tarjeta (${tarjeta})` : "Contra entrega (efectivo)";
  const envioTexto =
    envioSeleccionado === "express" ? "Express (mismo día)" : "Forza (24-48h)";

  // Generar número de pedido
  const pedidoId = "AT-" + Date.now().toString().slice(-6);

  // Guardar pedido en historial
  const pedidos = JSON.parse(localStorage.getItem("tp_orders") || "[]");
  pedidos.push({
    id: pedidoId,
    fecha: new Date().toISOString(),
    cliente: { nombre, direccion, nit, telefono },
    pago: pagoTexto,
    envio: envioTexto,
    items: [...carrito],
    subtotal,
    descuento: descuento,
    costoEnvio: envio,
    total,
  });
  localStorage.setItem("tp_orders", JSON.stringify(pedidos));

  // Mensaje WhatsApp
  let msg = `¡Hola AllTech! 👋 Quiero confirmar mi pedido *${pedidoId}*:%0A%0A`;
  msg += `*📦 Productos:*%0A`;
  carrito.forEach((i) => {
    msg += `• ${i.qty} × ${i.nombre} — ${fmt(i.precio * i.qty)}%0A`;
  });
  msg += `%0A*Subtotal:* ${fmt(subtotal)}%0A`;
  if (descuento > 0) {
    msg += `*Descuento (10%):* -${fmt(descuento)}%0A`;
  }
  msg += `*Envío (${envioTexto}):* ${envio === 0 ? "GRATIS" : fmt(envio)}%0A`;
  msg += `*TOTAL:* ${fmt(total)}%0A%0A`;
  msg += `*👤 Datos del cliente:*%0A`;
  msg += `Nombre: ${nombre}%0A`;
  msg += `Dirección: ${direccion}%0A`;
  msg += `NIT: ${nit}%0A`;
  msg += `Teléfono: ${telefono}%0A`;
  msg += `Método de pago: ${pagoTexto}%0A%0A`;
  msg += `¡Gracias por tu compra! 🚀`;

  window.open(`https://wa.me/50247123613?text=${msg}`, "_blank");

  // Limpiar carrito
  carrito = [];
  guardarCarrito();
  renderCarrito();
  cerrarCarrito();
  mostrarToast(`Pedido ${pedidoId} enviado ✅`);
});

/* ============ CUENTA (LOGIN / REGISTRO) ============ */
const accountModal = document.getElementById("accountModal");
const accountBtn = document.getElementById("accountBtn");
const closeAccount = document.getElementById("closeAccount");
const accountLogged = document.getElementById("accountLogged");
const accountForms = document.getElementById("accountForms");

function abrirModalCuenta() {
  accountModal.classList.add("open");
  overlay.classList.add("open");
  actualizarVistaCuenta();
}
function cerrarModalCuenta() {
  accountModal.classList.remove("open");
  overlay.classList.remove("open");
}
function actualizarVistaCuenta() {
  const label = document.getElementById("accountLabel");
  if (user) {
    accountLogged.style.display = "block";
    accountForms.style.display = "none";
    document.getElementById("accName").textContent = user.name;
    document.getElementById("accEmail").textContent = user.email;
    document.getElementById("accAvatar").textContent = user.name
      .charAt(0)
      .toUpperCase();
    label.textContent = user.name.split(" ")[0];
  } else {
    accountLogged.style.display = "none";
    accountForms.style.display = "block";
    label.textContent = "Mi Cuenta";
  }
  // NUEVO: Actualizar el banner de descuento al cambiar de cuenta
  renderDiscountSection();
}

accountBtn.addEventListener("click", abrirModalCuenta);
closeAccount.addEventListener("click", cerrarModalCuenta);

document.querySelectorAll(".acc-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".acc-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const isLogin = tab.dataset.tab === "login";
    document.getElementById("loginForm").style.display = isLogin
      ? "block"
      : "none";
    document.getElementById("registerForm").style.display = isLogin
      ? "none"
      : "block";
  });
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();
  const pass = document.getElementById("loginPass").value;
  const found = users.find((u) => u.email === email && u.pass === pass);
  if (!found) {
    mostrarToast("Correo o contraseña incorrectos");
    return;
  }
  user = { name: found.name, email: found.email };
  localStorage.setItem("tp_user", JSON.stringify(user));
  actualizarVistaCuenta();
  mostrarToast(`¡Bienvenido, ${found.name}!`);
  e.target.reset();
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const pass = document.getElementById("regPass").value;
  if (users.find((u) => u.email === email)) {
    mostrarToast("Ese correo ya está registrado");
    return;
  }
  users.push({ name, email, pass });
  localStorage.setItem("tp_users", JSON.stringify(users));
  user = { name, email };
  localStorage.setItem("tp_user", JSON.stringify(user));
  actualizarVistaCuenta();
  mostrarToast(`Cuenta creada. ¡Bienvenido, ${name}!`);
  e.target.reset();
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  user = null;
  localStorage.removeItem("tp_user");
  actualizarVistaCuenta();
  mostrarToast("Sesión cerrada");
  cerrarModalCuenta();
});

/* ============ FAVORITOS DRAWER ============ */
document.getElementById("favBtn").addEventListener("click", () => {
  renderFavoritos();
  favDrawer.classList.add("open");
  overlay.classList.add("open");
});
document.getElementById("closeFav").addEventListener("click", () => {
  favDrawer.classList.remove("open");
  overlay.classList.remove("open");
});

/* ============ BÚSQUEDA ============ */
document.getElementById("search").addEventListener("input", (e) => {
  busqueda = e.target.value;
  renderProductos();
});

/* ============ DROPDOWN CATEGORÍAS ============ */
const categoriesBtn = document.getElementById("categoriesBtn");
const categoriesWrapper = document.getElementById("categoriesWrapper");
const dropdownItems = document.querySelectorAll(".dropdown-item");

categoriesBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  categoriesWrapper.classList.toggle("active");
});
document.addEventListener("click", () => {
  categoriesWrapper.classList.remove("active");
});
dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    categoriesWrapper.classList.remove("active");
    const cat = item.dataset.cat;
    filtroCat = cat === "todos" ? "todos" : cat;
    busqueda = "";
    document.getElementById("search").value = "";
    renderProductos();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
});

/* ============ COMBOS ============ */
document.querySelectorAll(".add-combo").forEach((b) => {
  b.addEventListener("click", () =>
    agregarCombo(b.dataset.combo, b.dataset.price),
  );
});

/* ============ TEMA ============ */
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("tp_theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);
themeBtn.addEventListener("click", () => {
  const actual = document.documentElement.getAttribute("data-theme");
  const nuevo = actual === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nuevo);
  localStorage.setItem("tp_theme", nuevo);
});

/* ============ TOAST ============ */
let toastTimer;
function mostrarToast(txt) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").textContent = txt;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ============ SISTEMA DE DESCUENTO (COMENTARIO) ============ */
function renderDiscountSection() {
  const container = document.getElementById("discountActionContainer");
  const banner = document.getElementById("studentBanner");

  if (!container || !banner) return;

  // 1. Si no ha iniciado sesión
  if (!user) {
    banner.classList.remove("claimed");
    container.innerHTML = `
      <a href="#" class="btn btn-primary" onclick="document.getElementById('accountBtn').click(); return false;">
        Iniciar Sesión para opinar
      </a>`;
    return;
  }

  // 2. Si ya obtuvo el descuento
  const hasDiscount = userDiscounts.includes(user.email);
  if (hasDiscount) {
    banner.classList.add("claimed");
    container.innerHTML = `
      <div class="discount-claimed">
        ✅ ¡Descuento del 10% activado! Se aplicará en tu compra.
      </div>`;
    return;
  }

  // 3. Si está logueado pero no ha dejado comentario
  banner.classList.remove("claimed");
  container.innerHTML = `
    <div class="comment-box">
      <textarea id="userComment" placeholder="¿Qué te parecen nuestros productos? Tu opinión nos ayuda a mejorar..."></textarea>
      <button class="btn btn-primary" id="submitCommentBtn">Enviar opinión y obtener 10%</button>
    </div>
  `;

  document.getElementById("submitCommentBtn").addEventListener("click", () => {
    const comment = document.getElementById("userComment").value.trim();
    if (comment.length < 5) {
      mostrarToast(
        "Por favor, escribe un comentario válido (mín. 5 caracteres).",
      );
      return;
    }

    // Guardar el descuento para este usuario
    userDiscounts.push(user.email);
    localStorage.setItem("tp_discounts", JSON.stringify(userDiscounts));

    // Guardar el comentario en el sistema (para que el admin lo lea)
    const comments = JSON.parse(localStorage.getItem("tp_comments") || "[]");
    comments.push({
      email: user.email,
      name: user.name,
      text: comment,
      date: new Date().toISOString(),
    });
    localStorage.setItem("tp_comments", JSON.stringify(comments));

    mostrarToast("¡Gracias por tu opinión! Descuento del 10% activado 🎉");
    renderDiscountSection();
    actualizarResumenCheckout(); // Recalcular el carrito si está abierto
  });
}

/* ============ INIT ============ */
renderProductos();
renderCarrito();
guardarCarrito();
renderFavoritos();
actualizarContadorFav();
actualizarVistaCuenta();
renderDiscountSection(); // <--- Inicializar el sistema de descuento

/* ============ ANIMACIONES (scroll reveal + micro-interacciones) ============ */
document.documentElement.classList.add("js");

const revealEls = document.querySelectorAll(
  "main > section, .trust, footer, .recommendations-section",
);
revealEls.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0, // ← FIX PRINCIPAL
      rootMargin: "0px 0px -40px 0px", // ← suaviza cuándo entra
    },
  );
  revealEls.forEach((el) => io.observe(el));

  // Red de seguridad: si algo falla, mostrar todo a los 1.5s
  setTimeout(() => {
    revealEls.forEach((el) => {
      if (!el.classList.contains("in-view")) el.classList.add("in-view");
    });
  }, 1500);
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

// Re-animar cards cuando se re-renderiza el catálogo
const _renderProductosOriginal = renderProductos;
renderProductos = function () {
  _renderProductosOriginal();
  grid.querySelectorAll(".card").forEach((c) => {
    c.style.animation = "none";
    void c.offsetWidth; // forzar reflow
    c.style.animation = "";
  });
};

// Bump del badge del carrito
const _guardarCarritoOriginal = guardarCarrito;
guardarCarrito = function () {
  _guardarCarritoOriginal();
  const badge = document.getElementById("cartCount");
  if (badge && badge.style.display !== "none") {
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
    setTimeout(() => badge.classList.remove("bump"), 600);
  }
};

// Bump del badge de favoritos
const _actualizarContadorFavOriginal = actualizarContadorFav;
actualizarContadorFav = function () {
  _actualizarContadorFavOriginal();
  const badge = document.getElementById("favCount");
  if (badge && badge.style.display !== "none") {
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
    setTimeout(() => badge.classList.remove("bump"), 800);
  }
};

/* ============ LÓGICA DE RECURSOS GRATIS ============ */
document.querySelectorAll(".btn-res-download").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const resourceName = e.target.dataset.resource;

    // Simulamos la petición del correo
    const email = prompt(
      `Para descargar "${resourceName}", ingresá tu correo electrónico:`,
    );

    if (email) {
      if (email.includes("@") && email.includes(".")) {
        mostrarToast(`¡Listo! Enviamos "${resourceName}" a ${email} 📩`);
        // Aquí podrías agregar lógica para guardar el correo en localStorage
        // y simular la descarga (ej: window.open('link_al_archivo.pdf'))
      } else {
        mostrarToast("Por favor, ingresá un correo válido.");
      }
    }
  });
});
