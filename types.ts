export enum VehicleType {
  TWO_WHEELER = '2-Wheeler',
  THREE_WHEELER = '3-Wheeler',
  FOUR_WHEELER = '4-Wheeler'
}

export interface Product {
  id: string;
  name: string;
  category: VehicleType;
  description: string;
  features: string[];
  specs: {
    range: string;
    speed: string;
    chargingTime: string;
    motorPower: string;
    batteryCapacity?: string;
    warranty?: string;
  };
  image: string;
  gallery?: string[];
  priceEstimate: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  owner: string;
  vehicleType: string;
  savingsPerMonth: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}