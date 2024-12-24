const express = require('express');
const router = express.Router();

// Datos simulados (lorem picsum)
const products = [
  {
    _id: "1",
    name: 'Televisor Smart 55"',
    price: 120000,
    image: 'https://picsum.photos/300/200?random=1'
  },
  {
    _id: "2",
    name: 'Heladera No Frost',
    price: 80000,
    image: 'https://picsum.photos/300/200?random=2'
  },
  {
    _id: "3",
    name: 'Celular Alta Gama',
    price: 60000,
    image: 'https://picsum.photos/300/200?random=3'
  },
  {
    _id: "4",
    name: 'Lavarropas Automático',
    price: 50000,
    image: 'https://picsum.photos/300/200?random=4'
  },
  {
    _id: "5",
    name: 'Notebook 14" Core i5',
    price: 90000,
    image: 'https://picsum.photos/300/200?random=5'
  },
  {
    _id: "6",
    name: 'Aire Acondicionado Split',
    price: 65000,
    image: 'https://picsum.photos/300/200?random=6'
  },
  {
    _id: "7",
    name: 'Microondas Inverter',
    price: 20000,
    image: 'https://picsum.photos/300/200?random=7'
  },
  {
    _id: "8",
    name: 'Tablet 10" Full HD',
    price: 30000,
    image: 'https://picsum.photos/300/200?random=8'
  },
  {
    _id: "9",
    name: 'Monitor Full HD 24"',
    price: 28000,
    image: 'https://picsum.photos/300/200?random=9'
  },
  {
    _id: "10",
    name: 'Cámara Reflex DSLR',
    price: 110000,
    image: 'https://picsum.photos/300/200?random=10'
  },
  {
    _id: "11",
    name: 'Auriculares Inalámbricos',
    price: 15000,
    image: 'https://picsum.photos/300/200?random=11'
  },
  {
    _id: "12",
    name: 'Impresora Multifunción',
    price: 25000,
    image: 'https://picsum.photos/300/200?random=12'
  },
  {
    _id: "13",
    name: 'Cafetera Automática',
    price: 18000,
    image: 'https://picsum.photos/300/200?random=13'
  },
  {
    _id: "14",
    name: 'Consola de Juegos',
    price: 70000,
    image: 'https://picsum.photos/300/200?random=14'
  },
  {
    _id: "15",
    name: 'Silla Gamer',
    price: 22000,
    image: 'https://picsum.photos/300/200?random=15'
  },
  {
    _id: "16",
    name: 'Teclado Mecánico',
    price: 8000,
    image: 'https://picsum.photos/300/200?random=16'
  },
  {
    _id: "17",
    name: 'Mouse Gamer RGB',
    price: 5000,
    image: 'https://picsum.photos/300/200?random=17'
  },
  {
    _id: "18",
    name: 'Barra de Sonido',
    price: 15000,
    image: 'https://picsum.photos/300/200?random=18'
  },
  {
    _id: "19",
    name: 'Parlante Bluetooth',
    price: 10000,
    image: 'https://picsum.photos/300/200?random=19'
  },
  {
    _id: "20",
    name: 'Smartwatch Deportivo',
    price: 12000,
    image: 'https://picsum.photos/300/200?random=20'
  },
  {
    _id: "21",
    name: 'Router Wi-Fi 6',
    price: 9500,
    image: 'https://picsum.photos/300/200?random=21'
  },
  {
    _id: "22",
    name: 'Horno Eléctrico',
    price: 22000,
    image: 'https://picsum.photos/300/200?random=22'
  },
  {
    _id: "23",
    name: 'Ventilador de Pie',
    price: 7000,
    image: 'https://picsum.photos/300/200?random=23'
  },
  {
    _id: "24",
    name: 'Disco Externo 1TB',
    price: 15000,
    image: 'https://picsum.photos/300/200?random=24'
  },
  {
    _id: "25",
    name: 'Memoria USB 64GB',
    price: 2000,
    image: 'https://picsum.photos/300/200?random=25'
  },
  {
    _id: "26",
    name: 'Smart TV 65" 4K',
    price: 150000,
    image: 'https://picsum.photos/300/200?random=26'
  },
  {
    _id: "27",
    name: 'Heladera Side by Side',
    price: 130000,
    image: 'https://picsum.photos/300/200?random=27'
  },
  {
    _id: "28",
    name: 'Microcomponente de Audio',
    price: 18000,
    image: 'https://picsum.photos/300/200?random=28'
  },
  {
    _id: "29",
    name: 'Notebook Gamer i7',
    price: 150000,
    image: 'https://picsum.photos/300/200?random=29'
  },
  {
    _id: "30",
    name: 'Cámara de Seguridad WiFi',
    price: 9000,
    image: 'https://picsum.photos/300/200?random=30'
  },
  {
    _id: "31",
    name: 'Termotanque Eléctrico',
    price: 27000,
    image: 'https://picsum.photos/300/200?random=31'
  },
  {
    _id: "32",
    name: 'Parlante Torre Bluetooth',
    price: 12500,
    image: 'https://picsum.photos/300/200?random=32'
  },
  {
    _id: "33",
    name: 'Smartwatch Premium',
    price: 16000,
    image: 'https://picsum.photos/300/200?random=33'
  },
  {
    _id: "34",
    name: 'Licuadora Profesional',
    price: 14000,
    image: 'https://picsum.photos/300/200?random=34'
  },
  {
    _id: "35",
    name: 'Hervidor Eléctrico',
    price: 5000,
    image: 'https://picsum.photos/300/200?random=35'
  },
  {
    _id: "36",
    name: 'Auriculares Gamer',
    price: 8000,
    image: 'https://picsum.photos/300/200?random=36'
  },
  {
    _id: "37",
    name: 'Placa de Video 4GB',
    price: 30000,
    image: 'https://picsum.photos/300/200?random=37'
  },
  {
    _id: "38",
    name: 'Cámara Instantánea',
    price: 10000,
    image: 'https://picsum.photos/300/200?random=38'
  },
  {
    _id: "39",
    name: 'Smartphone 128GB',
    price: 70000,
    image: 'https://picsum.photos/300/200?random=39'
  },
  {
    _id: "40",
    name: 'Secarropas Centrifugado',
    price: 9000,
    image: 'https://picsum.photos/300/200?random=40'
  },
  {
    _id: "41",
    name: 'Notebook 15" Core i3',
    price: 70000,
    image: 'https://picsum.photos/300/200?random=41'
  },
  {
    _id: "42",
    name: 'Parlante Karaoke',
    price: 15000,
    image: 'https://picsum.photos/300/200?random=42'
  },
  {
    _id: "43",
    name: 'Plancha a Vapor',
    price: 4000,
    image: 'https://picsum.photos/300/200?random=43'
  },
  {
    _id: "44",
    name: 'GPS para Auto',
    price: 11000,
    image: 'https://picsum.photos/300/200?random=44'
  },
  {
    _id: "45",
    name: 'Cámara Web Full HD',
    price: 7000,
    image: 'https://picsum.photos/300/200?random=45'
  },
  {
    _id: "46",
    name: 'Teclado Inalámbrico',
    price: 6000,
    image: 'https://picsum.photos/300/200?random=46'
  },
  {
    _id: "47",
    name: 'Monitor 27" QHD',
    price: 35000,
    image: 'https://picsum.photos/300/200?random=47'
  },
  {
    _id: "48",
    name: 'Mouse Inalámbrico',
    price: 3000,
    image: 'https://picsum.photos/300/200?random=48'
  },
  {
    _id: "49",
    name: 'Tableta Gráfica',
    price: 13000,
    image: 'https://picsum.photos/300/200?random=49'
  },
  {
    _id: "50",
    name: 'Bicicleta Eléctrica',
    price: 100000,
    image: 'https://picsum.photos/300/200?random=50'
  },
  {
    _id: "51",
    name: 'Heladera Compacta',
    price: 40000,
    image: 'https://picsum.photos/300/200?random=51'
  },
  {
    _id: "52",
    name: 'Smart TV 32" HD',
    price: 35000,
    image: 'https://picsum.photos/300/200?random=52'
  },
  {
    _id: "53",
    name: 'Estufa Eléctrica',
    price: 8000,
    image: 'https://picsum.photos/300/200?random=53'
  },
  {
    _id: "54",
    name: 'Ventilador de Techo',
    price: 12000,
    image: 'https://picsum.photos/300/200?random=54'
  },
  {
    _id: "55",
    name: 'Home Theater 5.1',
    price: 20000,
    image: 'https://picsum.photos/300/200?random=55'
  },
  {
    _id: "56",
    name: 'Smartphone Gama Media',
    price: 40000,
    image: 'https://picsum.photos/300/200?random=56'
  },
  {
    _id: "57",
    name: 'Lavarropas Carga Frontal',
    price: 55000,
    image: 'https://picsum.photos/300/200?random=57'
  },
  {
    _id: "58",
    name: 'Cámara Deportiva 4K',
    price: 20000,
    image: 'https://picsum.photos/300/200?random=58'
  },
  {
    _id: "59",
    name: 'Smartwatch Fitness',
    price: 9000,
    image: 'https://picsum.photos/300/200?random=59'
  },
  {
    _id: "60",
    name: 'Tablet 8" HD',
    price: 15000,
    image: 'https://picsum.photos/300/200?random=60'
  },
];


// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
