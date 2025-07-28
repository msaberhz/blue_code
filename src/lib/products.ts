import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'prod_hosting_basic',
    name: 'Basic Hosting',
    description: 'Reliable hosting for personal websites and blogs. Get started with our most affordable plan.',
    price: 2.99,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'server cloud',
  },
  {
    id: 'prod_hosting_pro',
    name: 'Pro Hosting',
    description: 'Advanced hosting with more power and resources for growing businesses and e-commerce shops.',
    price: 9.99,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'data center',
  },
  {
    id: 'prod_domain',
    name: 'Domain Registration',
    description: 'Secure your perfect domain name. Simple, transparent pricing for all popular TLDs.',
    price: 12.99,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'web address',
  },
  {
    id: 'prod_support',
    name: 'Premium Support',
    description: 'Get 24/7 expert support. Our team is here to help you with any technical challenges.',
    price: 19.99,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'customer support',
  },
];
