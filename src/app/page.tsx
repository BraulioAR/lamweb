import type { Metadata } from 'next';
import { HomePageClient } from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Agencia de Social Media en República Dominicana | LAM',
  description:
    'Agencia de social media en República Dominicana especializada en manejo de redes sociales, fotografía, video, diseño gráfico y estrategia digital. Contáctanos.',
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePageClient />;
}
