import {
  Doctor,
  DentalService,
  BeforeAfterItem,
  Testimonial,
  InsuranceProvider,
  BlogPost,
  FAQItem,
  ClinicLocation
} from '../types';
import yellowTeethBefore from '../assets/images/yellow_teeth_before_1785340818982.jpg';
import whiteTeethAfter from '../assets/images/white_teeth_after_1785340836729.jpg';

export const CLINIC_INFO = {
  name: 'Georgia Dental Care',
  tagline: 'Creating Healthy & Beautiful Smiles in Georgia',
  subheading: 'Premium, family-centered, and pain-free dental care tailored to your unique smile.',
  phone: '(404) 555-0199',
  emergencyPhone: '(404) 555-9111',
  email: 'care@georgiadental.com',
  rating: 4.9,
  reviewCount: 1284,
  yearsInPractice: 16,
  patientsTreated: 14500,
  mainAddress: '3400 Peachtree Rd NE, Suite 800, Atlanta, GA 30326',
  secondaryAddress: '11500 Brook Park Way, Alpharetta, GA 30022',
  hoursShort: 'Mon - Fri: 8:00 AM - 6:00 PM | Sat: By Appt',
};

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-jenkins',
    name: 'Dr. Sarah Jenkins, DMD',
    title: 'Lead Cosmetic & Implant Specialist',
    specialty: 'Cosmetic Dentistry, Porcelain Veneers & Dental Implants',
    credentials: ['ADA Member', 'Georgia Dental Association', 'AACD Accredited Fellow'],
    bio: 'Dr. Sarah Jenkins has been crafting flawless smiles across Greater Atlanta for over 16 years. Dedicated to comfortable, aesthetic dentistry, she blends artistic precision with state-of-the-art 3D laser technology.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    education: 'Doctor of Dental Medicine, Harvard School of Dental Medicine',
    experienceYears: 16
  },
  {
    id: 'dr-michael-vance',
    name: 'Dr. Michael Vance, DDS',
    title: 'Director of General & Restorative Care',
    specialty: 'General Dentistry, Sedation Dentistry & Root Canals',
    credentials: ['ADA Member', 'GDA Board Member', 'Academy of General Dentistry'],
    bio: 'Dr. Vance focuses on anxiety-free, pain-free patient experiences. His gentle touch and expertise in advanced sedation make dental visits effortless for both children and adults.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    education: 'Doctor of Dental Surgery, Emory University School of Dentistry',
    experienceYears: 14
  },
  {
    id: 'dr-elena-rodriguez',
    name: 'Dr. Elena Rodriguez, DMD',
    title: 'Pediatric & Orthodontic Specialist',
    specialty: 'Invisalign®, Pediatric Dentistry & Early Orthodontic Guidance',
    credentials: ['American Association of Orthodontists', 'AAPD Certified'],
    bio: 'Specializing in growth-focused orthodontic care and gentle pediatric visits, Dr. Rodriguez ensures young patients build healthy dental habits for life with a big smile.',
    image: 'https://images.unsplash.com/photo-1594824813566-78a932788e02?auto=format&fit=crop&q=80&w=800',
    education: 'DMD & Orthodontics Residency, Medical College of Georgia',
    experienceYears: 11
  }
];

export const SERVICES: DentalService[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    category: 'general',
    shortDesc: 'Comprehensive oral checkups, digital X-rays, cavity fillings, and preventative oral health care.',
    fullDesc: 'Our general dentistry services keep your mouth healthy and disease-free. From routine checkups to tooth restorations, we emphasize early detection and comfortable preventive treatments.',
    benefits: ['Comprehensive digital X-rays', 'Early detection of oral issues', 'Custom mouthguards & nightguards', 'Gentle ultrasonic tartar removal'],
    duration: '45 - 60 Mins',
    recoveryTime: 'Immediate',
    priceRange: 'Covered by Most Insurance Plans',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    iconName: 'Stethoscope',
    badge: 'Essential Care',
    procedureSteps: [
      'Comprehensive oral examination and digital X-ray scan',
      'Gentle ultrasonic scaling and polishing',
      'Fluoride treatment and customized hygiene advice'
    ]
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'cosmetic',
    shortDesc: 'Transform your smile with custom aesthetic solutions tailored to your features and goals.',
    fullDesc: 'Achieve the smile of your dreams with personalized cosmetic treatments including smile design, tooth reshaping, and composite bonding.',
    benefits: ['Natural translucency & shade matching', 'Boosted self-confidence', 'Minimally invasive options', 'Digital smile preview before starting'],
    duration: '1 - 2 Visits',
    recoveryTime: '1 - 2 Days',
    priceRange: '$300 - $1,500 / tooth',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sparkles',
    badge: 'Popular',
    procedureSteps: [
      'Digital 3D smile analysis and consultation',
      'Mockup smile creation and shade selection',
      'Precision application and polished finishing'
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    category: 'cosmetic',
    shortDesc: 'In-office professional whitening that lightens teeth up to 8 shades in just 60 minutes.',
    fullDesc: 'Remove deep stains from coffee, wine, and aging with laser-assisted Zoom whitening treatment for safe, dramatic, long-lasting brightness.',
    benefits: ['Up to 8 shades whiter in 1 hour', 'Safe gel formulation prevents sensitivity', 'Includes custom home touch-up kit', 'Long-lasting radiant results'],
    duration: '60 Mins',
    recoveryTime: 'Immediate',
    priceRange: '$299 - $499',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sun',
    badge: 'Same Day Results',
    procedureSteps: [
      'Gums protection barrier application',
      'Professional whitening gel placement',
      'Laser light activation cycles for 45 minutes'
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'surgical',
    shortDesc: 'Permanent, natural-looking tooth replacements that restore function and jaw bone integrity.',
    fullDesc: 'The gold standard for missing teeth. Titanium posts fuse directly with your jawbone to support porcelain crowns that look and function like real teeth.',
    benefits: ['Prevents bone loss and facial sagging', 'Permanent solution that lasts decades', 'No diet restrictions—eat comfortably', 'Matches natural teeth perfectly'],
    duration: '2 - 3 Visits',
    recoveryTime: '3 - 5 Days',
    priceRange: '$1,800 - $3,500',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    iconName: 'ShieldCheck',
    badge: 'Lifetime Warranty',
    procedureSteps: [
      '3D Cone Beam CT scan and computer-guided plan',
      'Gentle implant post placement under local anesthesia',
      'Custom ceramic crown installation after osseointegration'
    ]
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    category: 'cosmetic',
    shortDesc: 'Ultra-thin custom porcelain shells that fix gaps, chips, stains, and misaligned teeth.',
    fullDesc: 'Porcelain veneers offer a dramatic smile makeover. Resistant to coffee and wine stains, they provide a durable, flawless aesthetic makeover.',
    benefits: ['Stain-resistant porcelain material', 'Covers chips, cracks, gaps & discolored teeth', 'Custom handcrafted by top dental master ceramists', 'Natural light-reflecting polish'],
    duration: '2 Visits',
    recoveryTime: '1 - 2 Days',
    priceRange: '$950 - $1,800 / tooth',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    iconName: 'Crown',
    badge: 'Top Cosmetic Choice',
    procedureSteps: [
      'Smile design consultation and digital preview',
      'Minimal enamel preparation and temporary veneer placement',
      'Final bonding of permanent porcelain veneers'
    ]
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    category: 'orthodontics',
    shortDesc: 'Straighten your teeth discreetly without metal brackets using custom clear aligners.',
    fullDesc: 'Straighten your teeth comfortably with virtually invisible aligners. Removable for eating and brushing, Invisalign fits seamlessly into adult lifestyles.',
    benefits: ['Nearly invisible clear aligner trays', 'Removable while eating & brushing', 'Faster treatment time than metal braces', 'No painful metal wires or bracket repairs'],
    duration: '6 - 18 Months',
    recoveryTime: 'Immediate',
    priceRange: '$3,200 - $5,500',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    iconName: 'Smile',
    badge: 'Discreet Ortho',
    procedureSteps: [
      'iTero® 3D digital intraoral scan (no messy impressions)',
      'Custom ClinCheck® 3D virtual treatment simulation',
      'Receive aligner sets with progress check-ups every 6 weeks'
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    category: 'general',
    shortDesc: 'Pain-relieving treatment that saves infected teeth and prevents extraction.',
    fullDesc: 'Modern root canals are comfortable and virtually pain-free. We remove infected pulp inside the tooth, seal it, and protect it with a durable crown.',
    benefits: ['Instant relief from severe tooth pain', 'Saves your natural tooth from extraction', 'High success rate (>98%)', 'Performed with gentle precision and modern anesthesia'],
    duration: '60 - 90 Mins',
    recoveryTime: '1 - 2 Days',
    priceRange: '$750 - $1,200',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    iconName: 'Activity',
    badge: 'Pain Relief',
    procedureSteps: [
      'Targeted local numbing for zero pain',
      'Infected nerve cleaning and disinfection',
      'Biocompatible sealing and protective crown restoration'
    ]
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    category: 'general',
    shortDesc: 'Restore damaged teeth or fill gaps with durable ceramic crowns and bridges.',
    fullDesc: 'Custom zirconia or porcelain crowns restore structural integrity to weakened or cracked teeth, matching your natural bite and color.',
    benefits: ['Same-day CEREC® crown options available', 'High-strength Zirconia materials', 'Seamless match to surrounding natural teeth', 'Restores full chewing power'],
    duration: '1 - 2 Visits',
    recoveryTime: 'Immediate',
    priceRange: '$850 - $1,400',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    iconName: 'Shield',
    badge: 'Same-Day Options',
    procedureSteps: [
      'Tooth shaping and 3D digital scanning',
      'Custom shade matching with surrounding teeth',
      'Precision bonding of high-durability porcelain crown'
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'general',
    shortDesc: 'Gentle, fun, and supportive dental visits created especially for children of all ages.',
    fullDesc: 'We make dental visits fun and relaxing for kids. From cavity sealants to gentle cleanings, our pediatric team builds confident, lifelong healthy habits.',
    benefits: ['Child-friendly, comforting treatment rooms', 'Preventative dental sealants & fluoride protection', 'Fun education on brushing and healthy habits', 'Free cavity-free club rewards'],
    duration: '30 - 45 Mins',
    recoveryTime: 'Immediate',
    priceRange: 'Covered by Most Insurance Plans',
    image: 'https://images.unsplash.com/photo-1594824813566-78a932788e02?auto=format&fit=crop&q=80&w=800',
    iconName: 'Heart',
    badge: 'Kids Favorite',
    procedureSteps: [
      'Fun tour of dental tools and chair rides',
      'Gentle cleaning, polishing and fluoride shield',
      'Treasure chest reward and cavity-free certificate'
    ]
  },
  {
    id: 'emergency-care',
    title: 'Emergency Dental Care',
    category: 'emergency',
    shortDesc: 'Same-day urgent appointments for severe toothaches, broken teeth, or sudden trauma.',
    fullDesc: 'Dental emergencies cannot wait. We offer guaranteed same-day appointments and a 24/7 emergency phone hotline for rapid pain relief.',
    benefits: ['Same-day guaranteed emergency appointments', '24/7 direct doctor hotline access', 'Immediate pain relief protocols', 'Trauma restoration and re-implantation'],
    duration: 'Immediate Priority',
    recoveryTime: 'Varies',
    priceRange: 'Emergency Exam + Relief From $99',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    iconName: 'Zap',
    badge: '24/7 Emergency',
    procedureSteps: [
      'Immediate priority triage upon arrival',
      'Rapid digital diagnostic imaging to isolate cause',
      'Instant pain relief and stabilizing procedure'
    ]
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery & Wisdom Teeth',
    category: 'surgical',
    shortDesc: 'Safe, comfortable surgical procedures including gentle wisdom tooth extractions.',
    fullDesc: 'From impacted wisdom tooth removal to bone grafting, our surgical care utilizes modern IV sedation so you stay relaxed throughout your procedure.',
    benefits: ['IV Sedation for stress-free sleep dentistry', 'Minimal swelling surgical techniques', 'Computer-guided precision', 'Comprehensive post-op healing kit'],
    duration: '45 - 90 Mins',
    recoveryTime: '3 - 5 Days',
    priceRange: '$250 - $650 / tooth',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    iconName: 'Scissors',
    badge: 'Sedation Available',
    procedureSteps: [
      'Pre-surgical sedation evaluation and comfort setup',
      'Painless extraction or surgical refinement',
      'Platelet-rich fibrin healing matrix application'
    ]
  },
  {
    id: 'dental-cleaning',
    title: 'Professional Dental Cleaning',
    category: 'general',
    shortDesc: 'Deep ultrasonic prophylaxis cleaning to eliminate plaque, prevent gum disease, and freshen breath.',
    fullDesc: 'Regular dental cleanings remove stubborn tartar that brushing cannot. Enjoy squeaky-clean teeth, fresh breath, and protected gums.',
    benefits: ['Ultrasonic tartar and stain removal', 'Gum health check & pocket depth measurement', 'Smooth tooth polishing', 'Fresh minty breath finish'],
    duration: '45 Mins',
    recoveryTime: 'Immediate',
    priceRange: 'Covered 100% by PPO Insurance',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    iconName: 'Sparkle',
    badge: '100% Covered',
    procedureSteps: [
      'Plaque and calculus ultrasonic scaling',
      'Interdental flossing and prophy polishing paste',
      'Remineralizing fluoride shield application'
    ]
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-whitening-1',
    title: 'In-Office Laser Whitening',
    category: 'Whitening',
    description: 'Transforming yellowed enamel from years of coffee and tea consumption into a 7-shade brighter Hollywood smile.',
    treatmentDuration: '60 Minutes (1 Visit)',
    beforeImage: yellowTeethBefore,
    afterImage: whiteTeethAfter,
    patientAge: '34 y/o',
    doctorName: 'Dr. Sarah Jenkins',
    highlights: ['7 Shades Whiter', 'Zero Sensitivity Gel', 'Zoom Laser Activated']
  },
  {
    id: 'ba-veneers-1',
    title: 'Porcelain Veneers Makeover',
    category: 'Veneers',
    description: 'Fixing chipped front teeth, uneven spacing, and yellow discoloration with 8 handcrafted E.max porcelain veneers.',
    treatmentDuration: '2 Visits over 10 Days',
    beforeImage: yellowTeethBefore,
    afterImage: whiteTeethAfter,
    patientAge: '29 y/o',
    doctorName: 'Dr. Sarah Jenkins',
    highlights: ['Custom Translucency', 'Fixed Gaps & Chips', 'Stain Resistant']
  },
  {
    id: 'ba-smile-makeover-1',
    title: 'Full Arch Smile Restoration',
    category: 'Smile Makeover',
    description: 'Complete upper and lower smile rebuild combining ceramic crowns, whitening, and gum contouring.',
    treatmentDuration: '3 Weeks',
    beforeImage: yellowTeethBefore,
    afterImage: whiteTeethAfter,
    patientAge: '48 y/o',
    doctorName: 'Dr. Michael Vance',
    highlights: ['Restored Chewing Function', 'Youthful Smile Line', 'Laser Gum Contouring']
  },
  {
    id: 'ba-implants-1',
    title: 'Front Tooth Dental Implant',
    category: 'Implants',
    description: 'Replacing a fractured central incisor with a titanium implant and custom zirconia crown.',
    treatmentDuration: '3 Months (Healing + Crown)',
    beforeImage: yellowTeethBefore,
    afterImage: whiteTeethAfter,
    patientAge: '42 y/o',
    doctorName: 'Dr. Sarah Jenkins',
    highlights: ['3D Guided Placement', 'Preserved Bone Density', 'Seamless Natural Shade']
  },
  {
    id: 'ba-invisalign-1',
    title: 'Invisalign® Alignment Correction',
    category: 'Orthodontics',
    description: 'Correcting severe lower crowding and a deep overbite using 14 months of clear removable aligners.',
    treatmentDuration: '14 Months',
    beforeImage: yellowTeethBefore,
    afterImage: whiteTeethAfter,
    patientAge: '26 y/o',
    doctorName: 'Dr. Elena Rodriguez',
    highlights: ['100% Metal-Free', 'Corrected Bite', 'Invisible Aligners']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Amanda B.',
    city: 'Atlanta, GA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    date: '2 weeks ago',
    treatment: 'Porcelain Veneers',
    review: 'Dr. Jenkins completely changed my confidence! I had severe staining and chips from a childhood injury. The entire team made me feel pampered like a luxury spa. My veneers look so natural people just think I have great genetics!',
    verified: true,
    featured: true
  },
  {
    id: 't2',
    name: 'Marcus Vance',
    city: 'Alpharetta, GA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    date: '1 month ago',
    treatment: 'Invisalign & Whitening',
    review: 'I used to dread going to the dentist due to severe anxiety. Dr. Vance and his staff used gentle sedation and explained every step. 12 months later, my teeth are straight, white, and healthy. Best dental experience in Georgia!',
    verified: true,
    featured: true
  },
  {
    id: 't3',
    name: 'Rachel K.',
    city: 'Sandy Springs, GA',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    date: '3 weeks ago',
    treatment: 'Dental Implant',
    review: 'Had an emergency broken tooth on a Friday afternoon. Georgia Dental Care squeezed me in within 45 minutes! The 3D scan and implant placement were completely painless. Exceptional care!',
    verified: true,
    featured: true
  },
  {
    id: 't4',
    name: 'David L.',
    city: 'Roswell, GA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    date: '1 month ago',
    treatment: 'Pediatric Care & Cleanings',
    review: 'Brought both my kids (7 and 10) here for their annual checkups. Dr. Rodriguez is magical with children! The kids were laughing and excited about their goody bags. We found our family dentist for life.',
    verified: true,
    featured: false
  },
  {
    id: 't5',
    name: 'Elena C.',
    city: 'Marietta, GA',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    date: '2 months ago',
    treatment: 'Teeth Whitening',
    review: 'Did the Zoom whitening before my wedding day. Wow! My teeth went 8 shades brighter in under an hour without any zingers or sensitivity. Super clean office and lovely team.',
    verified: true,
    featured: false
  }
];

export const INSURANCES: InsuranceProvider[] = [
  {
    name: 'Delta Dental PPO',
    category: 'PPO',
    logoText: 'DELTA DENTAL',
    color: 'bg-emerald-600',
    acceptedStatus: 'In-Network',
    description: 'Full coverage for preventative cleanings & exams. Preferred provider discounts on restorative procedures.'
  },
  {
    name: 'MetLife Dental',
    category: 'PPO',
    logoText: 'MetLife',
    color: 'bg-blue-600',
    acceptedStatus: 'In-Network',
    description: 'Direct billing with 100% preventative care coverage and high annual allowance benefits.'
  },
  {
    name: 'Cigna Dental PPO',
    category: 'PPO',
    logoText: 'Cigna',
    color: 'bg-teal-600',
    acceptedStatus: 'In-Network',
    description: 'In-network savings across all general, cosmetic, and emergency treatments.'
  },
  {
    name: 'Aetna Dental',
    category: 'PPO',
    logoText: 'aetna',
    color: 'bg-cyan-600',
    acceptedStatus: 'In-Network',
    description: 'Instant claims submission with low copays and zero deductible on bi-annual checkups.'
  },
  {
    name: 'Blue Cross Blue Shield GA',
    category: 'PPO',
    logoText: 'BCBS GA',
    color: 'bg-sky-700',
    acceptedStatus: 'In-Network',
    description: 'Comprehensive Georgia state PPO network provider with immediate claim pre-authorization.'
  },
  {
    name: 'Humana Dental',
    category: 'PPO',
    logoText: 'Humana',
    color: 'bg-emerald-700',
    acceptedStatus: 'In-Network',
    description: 'In-network benefits for individuals, families, and senior dental plans.'
  },
  {
    name: 'Guardian Dental',
    category: 'PPO',
    logoText: 'GUARDIAN',
    color: 'bg-indigo-600',
    acceptedStatus: 'In-Network',
    description: 'Full preventative benefit integration and quick electronic claim approvals.'
  },
  {
    name: 'UnitedHealthcare Dental',
    category: 'PPO',
    logoText: 'UHC Dental',
    color: 'bg-blue-800',
    acceptedStatus: 'In-Network',
    description: 'Covered checkups, digital X-rays, and discounted specialist rates.'
  },
  {
    name: 'CareCredit Financing',
    category: 'Financing',
    logoText: 'CareCredit',
    color: 'bg-amber-600',
    acceptedStatus: 'Financing Partner',
    description: '0% APR promotional financing for 6, 12, or 24 months on cosmetic, implant, and orthodontic treatments.'
  },
  {
    name: 'Sunbit Dental Financing',
    category: 'Financing',
    logoText: 'sunbit',
    color: 'bg-purple-600',
    acceptedStatus: 'Financing Partner',
    description: '90% approval rate with flexible monthly payment plans and no soft credit pull pre-qualification.'
  },
  {
    name: 'In-House Smiles Membership Plan',
    category: 'Discount',
    logoText: 'GA Smiles Club',
    color: 'bg-teal-700',
    acceptedStatus: 'In-Network',
    description: 'For uninsured patients: $29/mo covers 2 cleanings, annual X-rays, emergency exams, plus 20% OFF all procedures.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'tips-for-healthy-teeth',
    title: '10 Essential Habits for Maintaining Healthy Teeth Between Visits',
    slug: 'tips-for-healthy-teeth',
    excerpt: 'Discover simple daily routines that protect your enamel, prevent gum disease, and keep your breath fresh all day long.',
    content: `Maintaining optimal oral health requires more than just brushing twice a day. Modern preventative dentistry highlights the importance of timing, technique, and dietary choices.

1. **Brush for Two Full Minutes**: Most people brush for only 45 seconds. Use a soft-bristled electric toothbrush with an auto-timer.
2. **Floss Before Brushing**: Flossing dislodges plaque and food particles from between teeth so toothpaste fluoride can reach all surfaces.
3. **Use Fluoride or Hydroxyapatite Toothpaste**: Strengthen enamel against acidic erosion caused by coffee, citrus, and sodas.
4. **Don't Rinse Immediately After Brushing**: Spit out toothpaste excess but refrain from rinsing with water right away, allowing fluoride to remineralize your enamel.
5. **Clean Your Tongue Daily**: 80% of mouth bacteria live on the surface of the tongue. A scraper reduces bad breath significantly.
6. **Stay Hydrated with Fluoridated Water**: Drinking water throughout the day washes away food debris and stimulates saliva, your mouth's natural defense against cavities.
7. **Limit Acidic & Sugary Snacks**: Constant snacking keeps mouth pH acidic. Enjoy treats with main meals instead.
8. **Wear a Nightguard if You Grind**: Bruxism (teeth grinding) wears down enamel quickly. A custom nightguard preserves tooth structure.
9. **Replace Your Toothbrush Head Every 3 Months**: Frayed bristles cannot clean effectively and can harbor bacteria.
10. **Schedule Bi-Annual Professional Cleanings**: Tartar (calcified plaque) can only be removed safely by a dental hygienist.`,
    author: 'Dr. Sarah Jenkins',
    authorRole: 'Lead Dentist',
    authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    date: 'July 15, 2026',
    readTime: '4 min read',
    category: 'Oral Hygiene',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    tags: ['Oral Health', 'Brushing', 'Prevention', 'Family Care']
  },
  {
    id: 'benefits-of-invisalign',
    title: 'Invisalign® vs. Braces: Which Is Right for You in 2026?',
    slug: 'benefits-of-invisalign',
    excerpt: 'An in-depth guide comparing aesthetics, comfort, treatment duration, and cost for clear aligners versus traditional metal braces.',
    content: `Choosing the right orthodontic treatment is an exciting milestone toward a healthier smile. Today's adult patients overwhelmingly prefer clear aligners, but metal braces remain a powerhouse for complex cases.

### Why Patients Choose Invisalign®
- **Virtually Invisible**: Made of smooth SmartTrack® clear plastic, aligners are discreet in social and professional settings.
- **No Diet Restrictions**: Simply pop out your aligners to enjoy popcorn, apples, steak, or gum without worrying about broken brackets.
- **Easier Oral Hygiene**: Brush and floss naturally without specialized threaders or wire wax.
- **Predictable 3D Results**: Our iTero® scanner allows you to view a digital 3D model of your final smile before starting.

### When Metal or Ceramic Braces Are Recommended
For severe rotations, complex bite corrections, or younger patients who might misplace removable aligners, traditional braces offer continuous 24/7 force application.

### The Verdict
Schedule an orthodontic consultation at Georgia Dental Care. Our team will run a complimentary 3D scan to determine your ideal alignment plan!`,
    author: 'Dr. Elena Rodriguez',
    authorRole: 'Orthodontic Specialist',
    authorAvatar: 'https://images.unsplash.com/photo-1594824813566-78a932788e02?auto=format&fit=crop&q=80&w=200',
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    tags: ['Invisalign', 'Orthodontics', 'Straight Teeth', 'Cosmetic']
  },
  {
    id: 'dental-implant-guide',
    title: 'The Ultimate Guide to Dental Implants in Georgia: Costs & Recovery',
    slug: 'dental-implant-guide',
    excerpt: 'Everything you need to know about replacing missing teeth permanently with 3D-guided titanium implants.',
    content: `A missing tooth impacts more than just your appearance—it causes adjacent teeth to shift, changes your bite, and leads to jawbone deterioration over time.

### What Is a Dental Implant?
A dental implant consists of three parts:
1. **Titanium Post**: Inserted gently into the jawbone where it fuses naturally (osseointegration).
2. **Abutment**: Connector piece securing the crown to the implant.
3. **Porcelain Crown**: Custom ceramic tooth matched to your exact smile color and shape.

### Recovery Expectation
Most patients report far less discomfort than expected—often milder than a tooth extraction! Within 2-3 days, most return to normal daily activities.

### Cost & Financing in Georgia
At Georgia Dental Care, single dental implants start at $1,800 or around $99/month with zero-interest CareCredit financing. We pre-authorize insurance benefits to maximize your coverage!`,
    author: 'Dr. Michael Vance',
    authorRole: 'Restorative Director',
    authorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    date: 'May 19, 2026',
    readTime: '5 min read',
    category: 'Restorative Care',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    tags: ['Implants', 'Restorative', 'Georgia Dentistry', 'Smile Restoration']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'insurance',
    question: 'Do you accept my dental insurance plan?',
    answer: 'Yes! We are in-network with nearly all major PPO dental insurance providers in Georgia, including Delta Dental, MetLife, Cigna, Aetna, Blue Cross Blue Shield GA, Humana, Guardian, and UnitedHealthcare. Our insurance team will file claims directly on your behalf to maximize your benefits and minimize out-of-pocket expenses.'
  },
  {
    id: 'faq-2',
    category: 'costs',
    question: 'How much does professional teeth whitening or Invisalign cost?',
    answer: 'Our in-office laser Zoom whitening starts at $299 (includes custom home touch-up trays). Invisalign® treatment typically ranges between $3,200 and $5,500 depending on complexity. We offer zero-interest CareCredit financing and low monthly payments starting at $89/month.'
  },
  {
    id: 'faq-3',
    category: 'emergency',
    question: 'Do you offer same-day emergency appointments?',
    answer: 'Absolute priority is given to emergency dental cases! If you are experiencing severe tooth pain, a knocked-out tooth, broken crown, or swelling, call our emergency line at (404) 555-9111 immediately. We guarantee same-day appointments.'
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'Are new patients and children welcome?',
    answer: 'Warmly welcome! We love caring for whole families, from toddlers having their very first dental checkup to grandparents seeking dental implants or comfortable dentures. We strive to make every visit relaxed and celebratory.'
  },
  {
    id: 'faq-5',
    category: 'costs',
    question: 'What if I do not have dental insurance?',
    answer: 'We believe everyone deserves exceptional dental care regardless of insurance status. We offer our "GA Smiles Membership Plan" for $29/month, which includes 2 annual cleanings, digital X-rays, emergency visits, plus 20% OFF all restorative and cosmetic treatments.'
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'How often should I visit the dentist?',
    answer: 'The American Dental Association recommends visiting your dentist every 6 months for a professional cleaning, exam, and oral cancer screening. Regular visits catch small issues before they become painful or expensive problems.'
  },
  {
    id: 'faq-7',
    category: 'treatments',
    question: 'Are sedation dentistry options available for nervous patients?',
    answer: 'Yes! We specialize in anxiety-free dentistry. We offer Nitrous Oxide (laughing gas), oral conscious sedation, and IV sedation. You can drift peacefully through your treatment with zero discomfort or stress.'
  }
];

export const LOCATIONS: ClinicLocation[] = [
  {
    id: 'atlanta-main',
    name: 'Atlanta Buckhead Main Office',
    address: '3400 Peachtree Rd NE, Suite 800',
    cityStateZip: 'Atlanta, GA 30326',
    phone: '(404) 555-0199',
    email: 'atlanta@georgiadental.com',
    hours: [
      { days: 'Monday - Thursday', time: '8:00 AM - 6:00 PM' },
      { days: 'Friday', time: '8:00 AM - 4:00 PM' },
      { days: 'Saturday', time: 'By Appointment Only' }
    ],
    mapCoordinates: { lat: 33.8471, lng: -84.3662 },
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    isMain: true
  },
  {
    id: 'alpharetta-north',
    name: 'Alpharetta Family Center',
    address: '11500 Brook Park Way, Suite 210',
    cityStateZip: 'Alpharetta, GA 30022',
    phone: '(770) 555-0288',
    email: 'alpharetta@georgiadental.com',
    hours: [
      { days: 'Monday - Friday', time: '8:30 AM - 5:30 PM' },
      { days: 'Saturday', time: '9:00 AM - 2:00 PM' }
    ],
    mapCoordinates: { lat: 34.0754, lng: -84.2941 },
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    isMain: false
  },
  {
    id: 'sandy-springs',
    name: 'Sandy Springs Dental Studio',
    address: '6100 Peachtree Dunwoody Rd, Bldg B',
    cityStateZip: 'Sandy Springs, GA 30328',
    phone: '(404) 555-0377',
    email: 'sandysprings@georgiadental.com',
    hours: [
      { days: 'Monday - Thursday', time: '8:00 AM - 5:00 PM' },
      { days: 'Friday', time: '8:00 AM - 2:00 PM' }
    ],
    mapCoordinates: { lat: 33.9213, lng: -84.3524 },
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    isMain: false
  }
];
