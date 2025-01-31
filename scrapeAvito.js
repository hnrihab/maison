import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://www.avito.ma/fr/maroc/maisons_a_vendre';

export async function scrapeHouses() {

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const houses = [];

    
    $('a.sc-1jge648-0.jZXrfL').each((index, element) => {
      const title = $(element).find('p.sc-1x0vz2r-0.iHApav').text().trim();
      const price = $(element).find('p.sc-1x0vz2r-0.dJAfqm.sc-b57yxx-3.IneBF').text().trim();  // Ajustez cela si nécessaire
      const rooms = $(element)
      .find('div[title="Chambres"] > span')
      .text()
      .trim();      const image = $(element).find('.sc-bsm2tm-0.kvxLpd img').attr('src'); // Correct pour récupérer l'URL de l'image

      console.log({
          title,
          price,
          rooms,
          image
      });

      // Poussez les données dans le tableau `houses`
      houses.push({
        title,
        price,
        rooms,
        image
      });

      
    });

    console.log('Maisons récupérées:', houses);
    return houses; // Retournez les maisons après la boucle
}

// Appel de la fonction pour vérifier les données récupérées
scrapeHouses().then((houses) => console.log(houses));
