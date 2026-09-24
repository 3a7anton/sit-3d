import type { Metadata } from 'next';
import WebinarEventsPage from '@/src/views/WebinarEventsPage';

export const metadata: Metadata = {
  title: 'Workshops & Events | School of Integrated Thoughts (SIT)',
  description: 'Join curriculum orientation workshops, teacher pedagogy sessions, and learning media demonstrations hosted by SIT.',
};

export default function Page() {
  return <WebinarEventsPage />;
}
