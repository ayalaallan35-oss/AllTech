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
    precio: 350,
    icono: "💾",
    img: "img/almacenamiento/Disco Sólido SSD 500GB.jpg",
    tag: "stock",
  },
  {
    id: 14,
    nombre: "Disco Sólido SSD 960GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "SSD de alta capacidad y velocidad para proyectos que requieren mucho espacio y rendimiento.",
    precio: 650,
    icono: "💾",
    img: "img/almacenamiento/Disco Sólido SSD 960GB.jpg",
    tag: null,
  },
  {
    id: 15,
    nombre: "SSD NVMe M.2 500GB",
    cat: "almacenamiento",
    catNombre: "Almacenamiento",
    desc: "Disco de estado sólido NVMe de última generación. Velocidades de lectura ultrarrápidas.",
    precio: 400,
    icono: "🚀",
    img: "img/almacenamiento/SSD NVMe M.2 500GB.jpg",
    tag: "nuevo",
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
    img: "img/Ofertas/Kit de Limpieza para PC.jpg",
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
    img: "img/Ofertas/Hub USB 3.0 de 4 Puertos.jpg",
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
    img: "img/Ofertas/Base Refrigerante para Laptop.jpg",
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
    img: "img/Ofertas/Audífonos con Micrófono.jpg",
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
    img: "img/Ofertas/Cargador Rápido 20W USB-C.jpg",
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
    img: "img/Ofertas/Alfombrilla Gamer XL.jpg",
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
    img: "img/Ofertas/Soporte Ajustable para Laptop.jpeg",
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
    img: "img/Ofertas/Organizador de Cables.jpg",
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
    img: "img/Redes/Router TP-Link WiFi 6.jpg",
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
    img: "img/Redes/Switch 8 Puertos Gigabit.jpg",
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
    img: "img/Redes/Patch Panel 12 Puertos.jpg",
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
    img: "img/Redes/Ponchadora Profesional RJ45.jpg",
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
    img: "img/Redes/Roseta RJ45 Hembra.jpg",
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
    img: "img/Redes/Cable UTP Cat6 por Metro.jpg",
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
    img: "img/Redes/Conectores RJ45 Pack x100.jpg",
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
    img: "img/Redes/Repetidor WiFi AX1500.jpg",
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
    precio: 195,
    precioAntes: 230,
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
    precio: 95,
    icono: "📡",
    img: "img/Componentes/ESP32 DevKit WiFi.jpg",
    tag: "nuevo",
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
    precio: 4500,
    precioAntes: 5200,
    icono: "💻",
    img: "img/Computadoras/Laptop HP 15 Core i5.jpg",
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
    img: "img/Computadoras/Laptop Lenovo IdeaPad Ryzen 5.jpg",
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
    img: "img/Computadoras/Laptop Dell Inspiron 14.jpg",
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
    img: "img/Computadoras/PC Escritorio Gamer RGB.jpg",
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
    img: "img/Computadoras/Mini PC Intel NUC.jpg",
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
    img: "img/Computadoras/All-in-One HP 24.jpg",
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
    img: "img/Computadoras/Procesador Intel Core i5.jpg",
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
    img: "img/Computadoras/Procesador AMD Ryzen 5.jpg",
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
    img: "img/Computadoras/Memoria RAM DDR4 8GB.jpg",
    tag: "oferta",
  },
  {
    id: 67,
    nombre: "Memoria RAM DDR4 16GB",
    cat: "computadoras",
    catNombre: "Computadoras",
    desc: "Módulo de memoria RAM DDR4 de 16GB a 3200 MHz. Ideal para gaming y edición.",
    precio: 520,
    precioAntes: 620,
    icono: "🎛️",
    img: "img/Computadoras/Memoria RAM DDR4 16GB.jpg",
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
    img: "img/Computadoras/Tarjeta Madre ASUS Prime.jpg",
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
    img: "img/Computadoras/Tarjeta Gráfica GTX 1650.jpg",
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
    img: "img/Computadoras/Fuente de Poder 600W.jpg",
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
    img: "img/Computadoras/Gabinete ATX con RGB.jpg",
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
    img: "img/Computadoras/Cooler CPU RGB.jpg",
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
    img: "img/Computadoras/Pasta Térmica.jpg",
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
    img: "img/Computadoras/Windows 11 Pro.jpg",
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
    img: "img/Computadoras/Microsoft Office 365.jpg",
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
    img: "img/Computadoras/Antivirus Norton 360.jpg",
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
    img: "img/Computadoras/Adobe Creative Cloud.jpg",
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
    img: "img/Computadoras/Monitor 24 Full HD.jpg",
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
    img: "img/Computadoras/Monitor Gamer 27 144Hz.jpg",
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
    img: "img/Computadoras/Teclado Mecánico RGB.jpg",
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
    img: "img/Computadoras/Mouse Gamer 16000 DPI.jpg",
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
    img: "img/Computadoras/Webcam Full HD 1080p.jpg",
    tag: "oferta",
  },
];

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

function renderProductos() {
  const lista = productos.filter((p) => {
    const q = busqueda.toLowerCase().trim();
    const okBus =
      !q ||
      p.nombre.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.catNombre.toLowerCase().includes(q);
    const okCat = filtroCat === "todos" || p.cat === filtroCat;
    return okBus && okCat;
  });

  if (!lista.length) {
    grid.innerHTML = `<div class="empty">🔍 No encontramos productos para "<b>${busqueda}</b>". Probá con otra palabra.</div>`;
    return;
  }

  grid.innerHTML = lista
    .map((p) => {
      const esFav = favoritos.includes(p.id);
      return `
  <article class="card">
    <div class="card-img">
      ${p.tag ? `<span class="tag ${p.tag}">${p.tag === "oferta" ? "OFERTA" : p.tag === "nuevo" ? "NUEVO" : "DISPONIBLE"}</span>` : ""}
      <button class="fav-toggle ${esFav ? "active" : ""}" data-id="${p.id}" title="Favorito">
        ${esFav ? "❤️" : "🤍"}
      </button>
      ${
        p.img
          ? `<img src="${encodeURI(p.img)}" alt="${p.nombre}" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />`
          : ""
      }
      <span class="fallback-icon" style="display: ${p.img ? "none" : "grid"};">${p.icono}</span>
    </div>
    <div class="card-body">
      <span class="card-cat">${p.catNombre}</span>
      <h3>${p.nombre}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price-row">
        <span class="price">${fmt(p.precio)}</span>
        ${p.precioAntes ? `<span class="old-price">${fmt(p.precioAntes)}</span>` : ""}
      </div>
      <div class="card-actions">
        <button class="btn-add" data-id="${p.id}">Agregar</button>
        <button class="btn-view" data-id="${p.id}" title="Ver detalle">👁</button>
      </div>
    </div>
  </article>
`;
    })
    .join("");

  grid.querySelectorAll(".btn-add").forEach((b) => {
    b.addEventListener("click", () => agregarAlCarrito(Number(b.dataset.id)));
  });
  grid.querySelectorAll(".btn-view").forEach((b) => {
    b.addEventListener("click", () => {
      const p = productos.find((x) => x.id === Number(b.dataset.id));
      alert(
        `📦 ${p.nombre}\n\n${p.desc}\n\nCategoría: ${p.catNombre}\nPrecio: ${fmt(p.precio)}\n\nEntrega coordinada cerca del centro. Garantía de 30 días por defecto de fábrica.`,
      );
    });
  });
  grid.querySelectorAll(".fav-toggle").forEach((b) => {
    b.addEventListener("click", () => toggleFavorito(Number(b.dataset.id)));
  });
}

/* ============ FAVORITOS ============ */
function toggleFavorito(id) {
  const idx = favoritos.indexOf(id);
  if (idx >= 0) {
    favoritos.splice(idx, 1);
    mostrarToast("Eliminado de favoritos");
  } else {
    favoritos.push(id);
    mostrarToast("Añadido a favoritos ❤️");
  }
  localStorage.setItem("tp_favs", JSON.stringify(favoritos));
  renderProductos();
  renderFavoritos();
  actualizarContadorFav();
}

function actualizarContadorFav() {
  const badge = document.getElementById("favCount");
  badge.textContent = favoritos.length;
  badge.style.display = favoritos.length ? "grid" : "none";
}

function renderFavoritos() {
  const body = document.getElementById("favBody");
  if (!favoritos.length) {
    body.innerHTML = `<div class="cart-empty">❤️<br><br>No tenés favoritos aún.<br>Tocá el corazón en cualquier producto.</div>`;
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
        ${p.img ? `<img src="${encodeURI(p.img)}" alt="${p.nombre}" onerror="this.style.display='none'; this.parentElement.innerHTML='${p.icono}';">` : p.icono}
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
            ? `<img src="${encodeURI(i.img)}" alt="${i.nombre}" onerror="this.style.display='none'; this.parentElement.innerHTML='${i.icono}';">`
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
