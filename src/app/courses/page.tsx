import type { Metadata } from 'next';
import CoursesPage from '@/src/views/CoursesPage';

export const metadata: Metadata = {
  title: 'Programmes and Training | School of Integrated Thoughts (SIT)',
  description: 'Explore SIT programmes across Language Learning, Teacher Training, IT & Digital Skills, and Professional Development.',
};

export default function Page() {
  return <CoursesPage />;
}
