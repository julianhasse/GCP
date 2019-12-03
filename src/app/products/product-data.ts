import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Gibson ES-175',
        productCode: 'GDN-0011',
        releaseDate: 'December 19, 2019',
        description: 'Aged ebony, laminated maple body, rosewood fingerboard, 57 Classic humbuckers',
        price: 1990.95,
        starRating: 3.2,
        imageUrl: 'assets/images/gibson_es175.png',
        category: 'Jazz',
        tags: ['Gibson', 'Jazz', '175']
      },
      {
        id: 2,
        productName: 'Fender Stratocaster',
        productCode: 'GDN-0023',
        releaseDate: 'December 18, 2018',
        description: 'Gloss-Finished Alder Body, Single-Coil Pickups with 5-Way Switching',
        price: 930.99,
        starRating: 4.2,
        imageUrl: 'assets/images/Fender.jpg',
        category: 'Rock'
      },
      {
        id: 5,
        productName: 'Paul Reed Smith',
        productCode: 'TBX-0048',
        releaseDate: 'January, 2020',
        description: 'An iconic Custom 24 can be yours at an incredible price!',
        price: 800.00,
        starRating: 4.8,
        imageUrl: 'assets/images/PRS.jpg',
        category: 'Rock',
        tags: ['PRS', 'Rock', 'Reed Smith']
      },
      {
        id: 8,
        productName: 'Martin D-45 - Natural',
        productCode: 'TBX-0022',
        releaseDate: 'December 15, 2019',
        description: 'The most sought-after and decorated of the Martin dreadnoughts',
        price: 4600.00,
        starRating: 3.7,
        imageUrl: 'assets/images/Martin.jpg',
        category: 'Acoustic'
      },
      {
        id: 10,
        productName: 'Fender Jazz Bass',
        productCode: 'GMG-0042',
        releaseDate: 'December 15, 2019',
        description: 'Elegant and packed with versatile tones, the Deluxe Active Jazz Bass',
        price: 874.99,
        starRating: 4.6,
        imageUrl: 'assets/images/Bass.jpg',
        category: 'Bass'
      }
    ];
    return { products };
  }
}
