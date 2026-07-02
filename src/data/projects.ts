export interface Project {
  slug: string;
  title: string;
  category: 'residential' | 'commercial';
  location: string;
  year: string;
  area: string;
  description: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'cantonments-residence',
    title: 'Cantonments No. 4',
    category: 'residential',
    location: 'Cantonments, Accra',
    year: '2024',
    area: '420 m²',
    description: 'A deeply personal family home built around an existing 50-year-old mango tree.',
    longDescription: 'The clients wanted a space that felt both expansive and incredibly private. Rather than clearing the site, we organized the footprint around a mature mango tree, letting the living spaces open entirely to the courtyard. The material palette is intentionally quiet: locally sourced limestone, raw concrete, and custom iroko millwork crafted by our carpenters in Osu.',
    coverImage: '/images/proj-residence-villa.png',
    images: ['/images/proj-residence-villa.png', '/images/proj-residence-apt.png'],
    tags: ['Architecture', 'Custom Joinery', 'Landscape Integration'],
  },
  {
    slug: 'ridge-boutique-hotel',
    title: 'The Ridge Hotel',
    category: 'commercial',
    location: 'North Ridge, Accra',
    year: '2023',
    area: '680 m²',
    description: 'A 12-room adaptive reuse of a 1970s modernist villa.',
    longDescription: 'Converting a residential modernist villa into a boutique hospitality space required a delicate hand. We preserved the original terrazzo floors and breeze-block facades while completely re-imagining the interior flow. The suites feature custom rattan headboards woven in Aburi and vintage mid-century pieces sourced from local estates.',
    coverImage: '/images/proj-commercial-office.png',
    images: ['/images/proj-commercial-office.png', '/images/proj-commercial-restaurant.png'],
    tags: ['Hospitality', 'Adaptive Reuse', 'FF&E'],
  },
  {
    slug: 'circular-apartment',
    title: 'Apartment on 3rd Circular',
    category: 'residential',
    location: 'Cantonments, Accra',
    year: '2024',
    area: '210 m²',
    description: 'A compact, light-filled pied-à-terre for a contemporary art collector.',
    longDescription: 'Space was tight in this new-build apartment, so we focused on clever storage and maximizing natural light. Walls were finished in a custom tadelakt plaster that shifts tone from morning to evening. The living area was designed specifically to frame and showcase the client\'s extensive collection of West African paintings.',
    coverImage: '/images/proj-residence-apt.png',
    images: ['/images/proj-residence-apt.png', '/images/proj-residence-villa.png'],
    tags: ['Apartment', 'Art Curation', 'Plaster Finishes'],
  },
  {
    slug: 'bistro-le-jardin',
    title: 'Bistro Le Jardin',
    category: 'commercial',
    location: 'Osu, Accra',
    year: '2023',
    area: '350 m²',
    description: 'A beloved neighborhood spot, gently refreshed for its second decade of service.',
    longDescription: 'When tasked with updating this local institution, our primary goal was not to ruin what people loved about it. We kept the original layout but introduced warmer lighting, acoustic fabric ceiling panels to dampen the noise, and a monolithic terracotta bar that now serves as the heavy anchor of the room.',
    coverImage: '/images/proj-commercial-restaurant.png',
    images: ['/images/proj-commercial-restaurant.png', '/images/proj-commercial-office.png'],
    tags: ['Restaurant', 'Renovation', 'Lighting Design'],
  },
];
