import type { Metadata } from 'next';
import PublicationsPage from '@/src/views/PublicationsPage';

export const metadata: Metadata = {
  title: 'Publications & Learning Resources | School of Integrated Thoughts (SIT)',
  description: 'Books that support a connected education: Islamic Studies Series, Elementary Books, Qur’anic Language resources, and Teacher’s Guide.',
};

export default function Page() {
  return <PublicationsPage />;
}
