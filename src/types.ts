export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  credentials: string[];
  bio: string;
  image: string;
  education: string;
  experienceYears: number;
}

export interface DentalService {
  id: string;
  title: string;
  category: 'general' | 'cosmetic' | 'orthodontics' | 'surgical' | 'emergency';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  recoveryTime: string;
  priceRange: string;
  image: string;
  iconName: string;
  badge?: string;
  procedureSteps: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  treatmentDuration: string;
  beforeImage: string;
  afterImage: string;
  patientAge: string;
  doctorName: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  treatment: string;
  review: string;
  verified: boolean;
  featured?: boolean;
}

export interface InsuranceProvider {
  name: string;
  category: 'PPO' | 'Medicare' | 'Financing' | 'Discount';
  logoText: string;
  color: string;
  acceptedStatus: 'In-Network' | 'Out-of-Network Accepted' | 'Financing Partner';
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'insurance' | 'costs' | 'emergency' | 'general' | 'treatments';
}

export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
  mapCoordinates: { lat: number; lng: number };
  image: string;
  isMain: boolean;
}

export interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  insuranceProvider: string;
  isEmergency: boolean;
  notes: string;
}
