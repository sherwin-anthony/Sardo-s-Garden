export const company = {
  name: 'Verdant Horizon Landscaping',
  phone: '(555) 014-2874',
  email: 'hello@verdantlandscapes.com',
  address: '214 Greenway Blvd, Brookside, CA 94024',
  serviceArea: 'Serving Greater Bay Area',
  yearsExperience: '15+ years',
} as const

export const hero = {
  headline: 'Transform Your Outdoor Space into a Dream Garden',
  subheadline: 'Professional landscaping services for homes and businesses.',
  ctaPrimary: 'Get a Free Quote',
  ctaSecondary: 'View Our Work',
  image:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80',
} as const

export const services = [
  {
    id: 'lawn-care',
    title: 'Lawn Care',
    description:
      'Weekly mowing, edging, fertilization, and seasonal cleanups for lush, healthy turf.',
    icon: 'https://placehold.co/72x72?text=Lawn',
  },
  {
    id: 'garden-design',
    title: 'Garden Design',
    description:
      'Custom planting plans with native selections and year-round color palettes.',
    icon: 'https://placehold.co/72x72?text=Design',
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping',
    description:
      'Patios, walkways, retaining walls, and outdoor living spaces built to last.',
    icon: 'https://placehold.co/72x72?text=Stone',
  },
  {
    id: 'tree-trimming',
    title: 'Tree Trimming',
    description:
      'Safety-first pruning that improves structure, light, and long-term tree health.',
    icon: 'https://placehold.co/72x72?text=Trees',
  },
  {
    id: 'irrigation',
    title: 'Irrigation Systems',
    description:
      'Smart irrigation installs and tune-ups to conserve water and protect plants.',
    icon: 'https://placehold.co/72x72?text=Water',
  },
] as const

export const portfolio = [
  {
    id: 'p1',
    title: 'Hillside Stone Terrace',
    category: 'Hardscaping',
    caption: 'Multi-level patio with native plant borders and warm lighting.',
    image:
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p2',
    title: 'Modern Courtyard Garden',
    category: 'Garden Design',
    caption: 'Minimalist planters, sculptural greens, and a calming water feature.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p3',
    title: 'Family Backyard Makeover',
    category: 'Lawn Care',
    caption: 'Resilient turf, kid-friendly paths, and low-maintenance plantings.',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p4',
    title: 'Evergreen Privacy Screen',
    category: 'Tree Trimming',
    caption: 'Selective pruning for healthier growth and increased privacy.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p5',
    title: 'Drought-Smart Front Yard',
    category: 'Irrigation Systems',
    caption: 'Smart drip irrigation paired with water-wise native plants.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p6',
    title: 'Outdoor Dining Retreat',
    category: 'Hardscaping',
    caption: 'Pergola seating, stone pavers, and integrated ambient lighting.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p7',
    title: 'Seasonal Color Garden',
    category: 'Garden Design',
    caption: 'Layered planting scheme for four-season bloom and texture.',
    image:
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'p8',
    title: 'Commercial Entry Refresh',
    category: 'Lawn Care',
    caption: 'Crisp edging, fresh mulch, and evergreen accents.',
    image:
      'https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=1200&q=80',
  },
] as const

export const transformations = [
  {
    id: 't-project-1',
    title: 'Backyard Garden Makeover',
    location: 'Laguna, Philippines',
    category: 'Garden Design',
    beforeImage:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80',
    highlights: [
      'Installed stone pathway',
      'Added tropical plants',
      'Built smart irrigation system',
    ],
  },
  {
    id: 't-project-2',
    title: 'Courtyard Hardscape Refresh',
    location: 'Quezon City, Philippines',
    category: 'Hardscaping',
    beforeImage:
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=1400&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1400&q=80',
    highlights: [
      'Poured concrete slab and pavers',
      'Added ambient garden lighting',
      'Improved drainage layout',
    ],
  },
  {
    id: 't-project-3',
    title: 'Lawn Renovation & Entry',
    location: 'Cebu, Philippines',
    category: 'Lawn Renovation',
    beforeImage:
      'https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=1400&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
    highlights: [
      'Leveled and re-seeded turf',
      'Added stone edging',
      'Installed seasonal planting beds',
    ],
  },
] as const

export const testimonials = [
  {
    id: 't1',
    name: 'Avery Collins',
    title: 'Homeowner',
    quote:
      'They turned our patchy backyard into a space we use every day. Professional, punctual, and the quality is stunning.',
    photo:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't2',
    name: 'Marina Patel',
    title: 'Property Manager',
    quote:
      'The team is responsive and detail-focused. Our commercial property has never looked better.',
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't3',
    name: 'Jordan Blake',
    title: 'Restaurant Owner',
    quote:
      'From design to install, they handled everything. Guests constantly compliment our patio.',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't4',
    name: 'Elena Ruiz',
    title: 'Homeowner',
    quote:
      'Thoughtful plant selection and impeccable workmanship. The new irrigation system is a game changer.',
    photo:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
  },
] as const

export const plantCollections = [
  {
    id: 'plant-1',
    name: 'Bird of Paradise',
    category: 'Tropical',
    description: 'Bold foliage and dramatic blooms for statement garden beds.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    tips: {
      bestFor: 'Tropical Climate',
      sunlight: 'Full Sun',
      maintenance: 'Low',
    },
  },
  {
    id: 'plant-2',
    name: 'Boxwood',
    category: 'Evergreen',
    description: 'Clean structure for hedges, borders, and formal landscapes.',
    image:
      'https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=900&q=80',
    tips: {
      bestFor: 'Formal Gardens',
      sunlight: 'Partial Sun',
      maintenance: 'Medium',
    },
  },
  {
    id: 'plant-3',
    name: 'Agave Blue',
    category: 'Drought-Tolerant',
    description: 'Architectural silhouettes that thrive in dry conditions.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    tips: {
      bestFor: 'Xeriscape',
      sunlight: 'Full Sun',
      maintenance: 'Low',
    },
  },
  {
    id: 'plant-4',
    name: 'Hibiscus',
    category: 'Flowering',
    description: 'Vibrant seasonal color that attracts pollinators.',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
    tips: {
      bestFor: 'Tropical Climate',
      sunlight: 'Full Sun',
      maintenance: 'Medium',
    },
  },
  {
    id: 'plant-5',
    name: 'Japanese Maple',
    category: 'Accent Tree',
    description: 'Delicate branching and color for high-end focal points.',
    image:
      'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=900&q=80',
    tips: {
      bestFor: 'Shaded Courtyards',
      sunlight: 'Partial Shade',
      maintenance: 'Medium',
    },
  },
  {
    id: 'plant-6',
    name: 'Lavender',
    category: 'Herbaceous',
    description: 'Fragrant borders that handle heat and low water.',
    image:
      'https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=900&q=80',
    tips: {
      bestFor: 'Pollinator Gardens',
      sunlight: 'Full Sun',
      maintenance: 'Low',
    },
  },
] as const

export const about = {
  heading: 'Rooted in Craft, Designed for Everyday Life',
  body:
    'We are a full-service landscaping studio focused on sustainable designs, meticulous maintenance, and outdoor spaces that feel effortless. From small residential gardens to large commercial campuses, our team blends horticultural expertise with thoughtful design.',
  image:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  highlights: [
    'Licensed, insured, and locally owned',
    'Custom plans tailored to your lifestyle',
    'Eco-conscious materials and irrigation',
  ],
} as const

export const social = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
} as const
