import { DeliveryDetails, Order } from '@/types/order';

const ordersData: Order[] = [
  {
    id: '12345',
    date: '2025-11-28T14:15:00Z',
    items: [
      {
        id: '1',
        vendor: 'Wellnesse',
        title: 'Fresh Mint Whitening Toothpaste',
        price: 12.0,
        images: [
          'https://healf.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F7291%2F1765%2Ffiles%2FLMNT_Variety_pack.jpg%3Fv%3D1722331655&w=3840&q=75',
        ],
      },
      {
        id: '2',
        vendor: 'LMNT',
        title: 'Recharge Electrolytes - Raspberry Salt',
        price: 42.99,
        images: [
          'https://healf.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F7291%2F1765%2Ffiles%2FLMNT_Variety_pack.jpg%3Fv%3D1722331655&w=3840&q=75',
        ],
      },
      {
        id: '3',
        vendor: 'Ancient + Brave',
        title: 'True Collagen Powder',
        price: 32.0,
        images: [
          'https://healf.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F7291%2F1765%2Ffiles%2FLMNT_Variety_pack.jpg%3Fv%3D1722331655&w=3840&q=75',
        ],
      },
    ],
    shipping: 3.0,
    discount: 5.0,
  },
  {
    id: '456783',
    date: '2025-12-28T14:15:00Z',
    items: [
      {
        id: '1',
        vendor: 'ZBiotics',
        title: 'ZBiotics Pre-Alcohol Probiotic Drink',
        price: 43.99,
        images: [
          'https://healf.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F7291%2F1765%2Fproducts%2FFrame519.jpg%3Fv%3D1668119513&w=1080&q=75',
        ],
      },
      {
        id: '2',
        vendor: 'Nordic Naturals',
        title: 'Ultimate Omega 2x',
        price: 41.49,
        images: [
          'https://healf.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F7291%2F1765%2Fproducts%2FTrueCollagen_Front.png%3Fv%3D1643996829&w=3840&q=75',
        ],
      },
      {
        id: '3',
        vendor: 'Humantra',
        title: 'Humantra - Elderberry',
        price: 32.0,
        images: [
          'https://healf.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0405%2F7291%2F1765%2Fproducts%2FFrame502.jpg%3Fv%3D1667974176&w=3840&q=75',
        ],
      },
    ],
    shipping: 4.99,
    discount: 0,
  },
];
const deliveryDetails: DeliveryDetails = {
  name: 'Joe Bloggs',
  address: '15 Marylebone High Street',
  city: 'London',
  zipCode: 'WC12 123',
  country: 'United Kingdom',
};

export { ordersData, deliveryDetails };
