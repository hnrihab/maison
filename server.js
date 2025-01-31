
// server.js
import express from 'express';
import cors from 'cors';
import { scrapeHouses } from './scrapeAvito.js'; // Importation nommée

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/houses', async (req, res) => {
  try {
    const avitoData = await scrapeHouses(); 
    const customData = [
      {
        id: '1',
        title: 'Riad Marocain à Fès',
        description: 'Un Riad traditionnel situé dans la Médina de Fès, offrant un cadre paisible et raffiné.',
        price: 2500,
        location: 'Fès, Médina',
        image: [
          'https://www.momondo.fr/rimg/himg/4c/2e/39/leonardo-5009346-180225riad_fes068-HDRa_Monitor_O-824084.jpg?width=1366&height=768&crop=true'
        ],
        rooms: 8,
        bathrooms: 4,
        squareMeters: 350,
        amenities: ['Terrasse', 'Piscine', 'Cheminée'],
        rating: 4.7,
        reviews: 12,
      },
      {
        id: '2',
        title: 'Kasbah à Ouarzazate',
        description: 'Une maison typique de la région d’Aït Benhaddou, classée patrimoine mondial de l’UNESCO.',
        price: 4000,
        location: 'Ouarzazate, Aït Benhaddou',
        image: [
          'https://cnstlltn.com/crop-1024x768/d2b71a55-1d8b-44ce-a909-2537f9ba2ef0/dardaif-hotel-.jpg'
        ],
         rooms: 12,
        bathrooms: 5,
        squareMeters: 600,
        amenities: ['Jardin', 'Terrasse', 'Vue sur l\'Atlas'],
        rating: 4.8,
        reviews: 20,
      },
      {
        id: '3',
        title: 'Villa Traditionnelle à Marrakech',
        description: 'Une magnifique villa au cœur de la Palmeraie avec jardin luxuriant et piscine.',
        price: 3200,
        location: 'Marrakech, Palmeraie',
        image: [
          'https://luxuryeaseconcierge.com/wp-content/uploads/2024/06/reserver-une-villa-de-luxe-a-marrakech-1024x683.jpg'
        ],
         rooms: 10,
        bathrooms: 6,
        squareMeters: 500,
        amenities: ['Piscine', 'Terrasse', 'Barbecue'],
        rating: 4.9,
        reviews: 25,
      },
      {
        id: '4',
        title: 'Maison Berbère à Essaouira',
        description: 'Maison berbère traditionnelle avec une vue imprenable sur l\'océan Atlantique.',
        price: 1800,
        location: 'Essaouira, Médina',
        image: [
          'https://www.anergui.com/wp-content/uploads/2018/01/Ecolodge.5.jpg'
        ],
         rooms: 6,
        bathrooms: 3,
        squareMeters: 280,
        amenities: ['Terrasse', 'Vue sur l\'océan', 'Cheminée'],
        rating: 4.6,
        reviews: 14,
      },
      {
        id: '5',
        title: 'Riad de Luxe à Chefchaouen',
        description: 'Riad élégant et bien situé à Chefchaouen, avec un décor traditionnel marocain raffiné.',
        price: 5500,
        location: 'Chefchaouen, Kasbah',
        image: [
          'https://african-wanderlust.com/wp-content/uploads/2022/05/Lina-Ryad-Spa-2.jpeg.webp'
        ],
         rooms: 9,
        bathrooms: 4,
        squareMeters: 400,
        amenities: ['Jardin', 'Vue sur les montagnes', 'Cuisine équipée'],
        rating: 5.0,
        reviews: 30,
      },
      {
        id: '6',
        title: 'Dar Traditionnelle à Tanger',
        description: 'Maison typique de Tanger, offrant une belle vue sur la ville et la mer.',
        price: 2700,
        location: 'Tanger, Médina',
        image: [
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/95/38/a3/dar-sultan.jpg?w=1200&h=-1&s=1'
        ],
         rooms: 7,
        bathrooms: 3,
        squareMeters: 320,
        amenities: ['Terrasse', 'Vue panoramique', 'Cheminée'],
        rating: 4.7,
        reviews: 18,
      },
    
      {
        id: '7',
        title: 'Maison Typique à Tétouan',
        description: 'Une maison traditionnelle de la médina de Tétouan, avec un charme unique et authentique.',
        price: 2100,
        location: 'Tétouan, Médina',
        image: [
          'https://a0.muscache.com/im/pictures/8b5b6117-8bf3-4ed2-8fe3-1e8aa8adc95b.jpg?im_w=960&im_format=avif'
        ],
         rooms: 5,
        bathrooms: 2,
        squareMeters: 250,
        amenities: ['Terrasse', 'Cheminée', 'Cuisine équipée'],
        rating: 4.5,
        reviews: 10,
      },
      {
        id: '8',
        title: 'Kasbah d\'exception à Merzouga',
        description: 'Kasbah magnifique à proximité des dunes de Merzouga, parfaite pour les amateurs de désert.',
        price: 4500,
        location: 'Merzouga, Erg Chebbi',
        image: [
          'https://images.trvl-media.com/lodging/91000000/90900000/90898600/90898521/8010333b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
        ],
         rooms: 14,
        bathrooms: 7,
        squareMeters: 650,
        amenities: ['Vue sur le désert', 'Jardin', 'Piscine'],
        rating: 4.8,
        reviews: 22,
      },
      {
        id: '9',
        title: 'Maison traditionnelle à Imouzzer',
        description: 'Maison berbère traditionnelle avec vue sur les montagnes de l’Atlas.',
        price: 3000,
        location: 'Imouzzer, Haut Atlas',
        image: [
          'https://a0.muscache.com/im/pictures/d6ce61b5-87e5-4f45-b54d-42f2f7ef9a55.jpg?im_w=960'
        ],
         rooms: 8,
        bathrooms: 4,
        squareMeters: 380,
        amenities: ['Terrasse', 'Vue sur les montagnes', 'Cheminée'],
        rating: 4.7,
        reviews: 15,
      },
      {
        id: '10',
        title: 'Riad traditionnel à Agadir',
        description: 'Riad calme et agréable dans le centre d\'Agadir, offrant une belle vue sur la ville et la mer.',
        price: 3000,
        location: 'Agadir, Centre-ville',
        image: [
          'https://riadshotelsmaroc.com/wp-content/uploads/2024/07/Riad-Villa-Blanche-Agadir-1024x706.webp'
        ],
         rooms: 6,
        bathrooms: 4,
        squareMeters: 280,
        amenities: ['Piscine', 'Terrasse', 'Jardin'],
        rating: 4.7,
        reviews: 10,
      },
      {
        id: '11',
        title: 'Maison traditionnelle à Rabat',
        description: 'Maison traditionnelle de style marocain avec jardin, située dans le quartier historique de Rabat.',
        price: 4500,
        location: 'Rabat, Kasbah des Oudayas',
        image: [
          'https://c7.alamy.com/compfr/2f2jx80/rabat-maroc-1er-mars-2020-entree-traditionnelle-coloree-dans-une-maison-residentielle-de-rabat-maroc-2f2jx80.jpg'
        ],
         rooms: 7,
        bathrooms: 5,
        squareMeters: 320,
        amenities: ['Vue sur la mer', 'Terrasse', 'Jardin'],
        rating: 4.9,
        reviews: 15,
      },
      {
        id: '12',
        title: 'Riad à Salé',
        description: 'Riad confortable avec une architecture marocaine classique, situé dans le centre de Salé.',
        price: 2800,
        location: 'Salé, Médina',
        image: [
          'https://cf.bstatic.com/xdata/images/hotel/square600/162110737.webp?k=fdfb3c798d29d681a50c1e0c342c5b0a25731900576d7a6c4a0a5b8feab9971c&o='
        ],
         rooms: 5,
        bathrooms: 3,
        squareMeters: 240,
        amenities: ['Terrasse', 'Cheminée', 'Cuisine équipée'],
        rating: 4.5,
        reviews: 18,
      },
      {
        id: '13',
        title: 'Maison moderne à Casablanca',
        description: 'Maison de style traditionnel avec des touches modernes, offrant une vue sur la mer et le centre de Casablanca.',
        price: 5500,
        location: 'Casablanca, Quartier Anfa',
        image: [
          'https://pic.le-cdn.com/thumbs/1024x768/480/1/properties/Property-be1a5c690419b734114a52b0011c660c-129417577.jpg'
        ],
         rooms: 8,
        bathrooms: 6,
        squareMeters: 400,
        amenities: ['Vue sur la mer', 'Piscine', 'Terrasse'],
        rating: 4.8,
        reviews: 22,
      },
      {
        id: '14',
        title: 'Riad traditionnel à Taroudant',
        description: 'Riad traditionnel avec des murs en pisé et des jardins luxuriants, situé dans la médina de Taroudant.',
        price: 2000,
        location: 'Taroudant, Médina',
        image: [
          'https://palaisdessables.com/images/gal/palais-des-sables-maroc-taroudant%20(3).jpg'
        ],
         rooms: 4,
        bathrooms: 2,
        squareMeters: 180,
        amenities: ['Jardin', 'Terrasse', 'Cheminée'],
        rating: 4.6,
        reviews: 12,
      },
      {
        id: '15',
        title: 'Maison d\'hôtes à El Jadida',
        description: 'Charmante maison d\'hôtes traditionnelle située à El Jadida, à quelques pas de la plage.',
        price: 3200,
        location: 'El Jadida, Plage',
        image: [
          'https://cf.bstatic.com/xdata/images/hotel/max1024x768/515795189.jpg?k=c94753e63e57a26a69ea158379300a5ad8866288c652bf417d828f4484d8324c&o=&hp=1'
        ],
         rooms: 6,
        bathrooms: 3,
        squareMeters: 220,
        amenities: ['Vue sur la mer', 'Jardin', 'Piscine'],
        rating: 4.7,
        reviews: 10,
      },
      {
        id: '16',
        title: 'Villa traditionnelle à Ifrane',
        description: 'Villa de style marocain, située à Ifrane, connue pour son climat tempéré et sa belle architecture.',
        price: 6000,
        location: 'Ifrane, Ville Nouvelle',
        image: [
          'https://static.yabiladi.com/files/60c43f9a5eb984822c9264398d337425_thumb.JPG'
        ],
         rooms: 9,
        bathrooms: 5,
        squareMeters: 350,
        amenities: ['Piscine', 'Terrasse', 'Jardin'],
        rating: 4.9,
        reviews: 20,
      },
      {
        id: '17',
        title: 'Riad charmant à Ouarzazate',
        description: 'Riad traditionnel situé au cœur d\'Ouarzazate, près des kasbahs et des sites historiques.',
        price: 4200,
        location: 'Ouarzazate, Médina',
        image: [
          'https://cf.bstatic.com/xdata/images/hotel/square600/602684380.webp?k=7c960dd6be0b3afbfe062127b14715bbb4dd5ae8623856964f525abb17253983&o='
        ],
         rooms: 6,
        bathrooms: 3,
        squareMeters: 300,
        amenities: ['Jardin', 'Terrasse', 'Vue sur la vallée'],
        rating: 4.7,
        reviews: 14,
      },
      {
        id: '18',
        title: 'Villa typique à Agadir',
        description: 'Villa typique au design marocain, située à Agadir, à proximité des plages et des montagnes.',
        price: 4800,
        location: 'Agadir, Montagnes de l\'Atlas',
        image: [
          'https://media.apimo.pro/cache/91f874cfb989780c26b14d74ea9c3873_8b636d5389_1920-original.jpg'
        ],
         rooms: 7,
        bathrooms: 4,
        squareMeters: 330,
        amenities: ['Piscine', 'Vue sur la mer', 'Terrasse'],
        rating: 4.8,
        reviews: 30,
      },
      {
        id: '19',
        title: 'Maison ancienne à Meknès',
        description: 'Maison ancienne avec architecture traditionnelle, située dans la ville historique de Meknès.',
        price: 2500,
        location: 'Meknès, Médina',
        image: [
          'https://imganuncios.mitula.net/maison_a_vendre_a_meknes_4680000727294561736.jpg'
        ],
         rooms: 5,
        bathrooms: 2,
        squareMeters: 220,
        amenities: ['Terrasse', 'Cheminée', 'Cuisine traditionnelle'],
        rating: 4.5,
        reviews: 16,
      }
    ];
    
    
    const houses = [...customData];    
    res.json(houses);
  } catch (error) {
    console.error('Error fetching houses:', error);
    res.status(500).json({ message: 'Error fetching houses', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

