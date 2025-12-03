import { NavItem, Product, VehicleType, CaseStudy, FAQItem } from './types';

export const BRAND_NAME = "Oxonix Pvt. Ltd.";
export const WHATSAPP_NUMBER = "9618402450"; // Updated number
export const WHATSAPP_MSG = "Hello Oxonix Team, I'm interested in retrofitting my vehicle.";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Technology', path: '/technology' },
  { label: 'Products', path: '/products' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'FAQ', path: '/faq' },
  { label: 'About', path: '/about' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'oxonix-ev-scooty',
    name: 'Oxonix EV Scooty',
    category: VehicleType.TWO_WHEELER,
    description: "A smart, efficient electric scooter designed for daily commuting.",
    features: ["Smart lock", "Digital dashboard"],
    specs: {
      range: '60 km',
      speed: '40 km/h',
      chargingTime: '3-4 hrs', // Estimated
      motorPower: 'Unknown', // Not provided
      batteryCapacity: 'Unknown', // Not provided
      warranty: 'Unknown' // Not provided
    },
    image: 'https://images.unsplash.com/photo-1623054467661-6e50d19f2903?auto=format&fit=crop&w=800&q=80', // Placeholder
    gallery: [],
    priceEstimate: 'Contact for Price'
  },
  {
    id: 'ev-retrofit-kit',
    name: 'EV Retrofit Kit',
    category: VehicleType.TWO_WHEELER,
    description: "Convert petrol scooters to EV in 3–4 hours. 75% cheaper than new EVs.",
    features: ["Quick Installation", "Cost Effective"],
    specs: {
      range: '60 km',
      speed: 'Unknown', // Not provided
      chargingTime: 'Unknown', // Not provided
      motorPower: 'Unknown', // Not provided
      batteryCapacity: 'Unknown', // Not provided
      warranty: 'Unknown' // Not provided
    },
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80', // Placeholder
    gallery: [],
    priceEstimate: '75% cheaper than new EVs'
  },
  {
    id: 'hybrid-motorcycle-kit',
    name: 'Hybrid Motorcycle Kit',
    category: VehicleType.TWO_WHEELER,
    description: "Petrol + Electric dual mode for versatile riding.",
    features: ["Dual Mode", "Extended Range"],
    specs: {
      range: '70+ km combined',
      speed: '55+ km/h',
      chargingTime: 'Unknown', // Not provided
      motorPower: 'Unknown', // Not provided
      batteryCapacity: 'Unknown', // Not provided
      warranty: 'Unknown' // Not provided
    },
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80', // Placeholder
    gallery: [],
    priceEstimate: 'Contact for Price'
  },
  {
    id: 'full-electric-motorcycle-kit',
    name: 'Full Electric Motorcycle Kit',
    category: VehicleType.TWO_WHEELER,
    description: "High performance mid-drive BLDC motor kit.",
    features: ["Mid-drive BLDC motor"],
    specs: {
      range: '70+ km',
      speed: '55+ km/h',
      chargingTime: 'Unknown', // Not provided
      motorPower: 'Mid-drive BLDC',
      batteryCapacity: 'Unknown', // Not provided
      warranty: 'Unknown' // Not provided
    },
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80', // Placeholder
    gallery: [],
    priceEstimate: 'Contact for Price'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Fleet Transformation',
    owner: 'Rahul Logistics',
    vehicleType: 'Delivery Van',
    savingsPerMonth: '₹18,500',
    beforeImage: 'https://images.unsplash.com/photo-1615887023516-9bd8856454e7?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1591382696684-38c427c7547a?auto=format&fit=crop&w=800&q=80',
    quote: "Converting our fleet to electric saved us 60% in operational costs in the first year."
  },
  {
    id: 'cs-2',
    title: 'Daily Commuter',
    owner: 'Arjun K.',
    vehicleType: 'Splendor Bike',
    savingsPerMonth: '₹3,200',
    beforeImage: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80',
    quote: "My old bike feels brand new. No noise, no vibration, just smooth riding."
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "Is retrofitting legal in India?",
    answer: "Yes, retrofitting is 100% legal in India. Oxonix uses ARAI-approved kits, and we facilitate the endorsement of the fuel type change to 'Electric' on your vehicle's RC (Registration Certificate) through the RTO."
  },
  {
    category: "Technical",
    question: "How long does the battery last?",
    answer: "Our Lithium-Ion battery packs (LFP/NMC) are designed for 1500-2000 charge cycles. For a typical daily user, this translates to a lifespan of 5-7 years before any significant degradation occurs."
  },
  {
    category: "Technical",
    question: "Can I charge at home?",
    answer: "Absolutely. Every kit comes with a portable charger that fits into a standard 15A (3-pin) household socket. You do not need special infrastructure for 2 and 3-wheelers."
  },
  {
    category: "Process",
    question: "How long does the installation take?",
    answer: "Once you bring your vehicle to our center, the physical installation takes 1-2 days. RTO processing and testing may take an additional 3-5 days depending on local authority speed."
  },
  {
    category: "Cost",
    question: "Is EMI available?",
    answer: "Yes, we have partnered with several financing firms to provide easy EMI options for retrofitting, allowing you to pay the EMI using your monthly fuel savings."
  }
];