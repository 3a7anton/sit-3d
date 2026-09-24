import type { Metadata } from 'next';
import BookShopPage from '@/src/views/BookShopPage';

export const metadata: Metadata = {
  title: 'Publications Catalog | School of Integrated Thoughts (SIT)',
  description: 'Resource family of curriculum books, elementary books, and teacher guides published by School of Integrated Thoughts.',
};

export default function Page() {
  return <BookShopPage />;
}
