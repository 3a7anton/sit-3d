import type { Metadata } from 'next';
import ConsultancyPage from '@/src/views/ConsultancyPage';

export const metadata: Metadata = {
  title: 'Research and Consultancy | School of Integrated Thoughts (SIT)',
  description: 'SIT educational consultancy, curriculum adoption for schools, and overseas university application support.',
};

export default function Page() {
  return <ConsultancyPage />;
}
