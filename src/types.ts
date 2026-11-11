export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'school' | 'kids' | 'family' | 'farmer' | 'culture' | 'market';
  season: '봄' | '여름' | '가을' | '겨울' | '연중';
  duration: string;
  targetGroup: string;
  groupSize: string;
  pricePerPerson: number;
  highlight: string;
  description: string;
  schedule: { time: string; activity: string }[];
  includes: string[];
  image: string;
}

export interface InquiryFormData {
  name: string;
  organization: string;
  phone: string;
  email: string;
  groupType: 'school' | 'kindergarten' | 'organization' | 'family' | 'consulting' | 'market_tour';
  programId: string;
  participantCount: number;
  desiredDate: string;
  notes: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  programTitle: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: '예약/비용' | '진행/날씨' | '시설/식사' | '맞춤기획';
}
