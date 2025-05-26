export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type Testimonial = {
  testimonial: string;
  author: string;
};

export type Menu = {
  title: string;
  href: string;
  description: string;
  imageUrl?: string;
};

export type FAQs = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  faqs: FAQs[];
};

export type Metrics = {
  label: string;
  value: string;
  description: string;
};

export type Staff = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export type StaffTeams = {
  category: string;
  subtitle?: string;
  description?: string;
  members: Staff[];
};
