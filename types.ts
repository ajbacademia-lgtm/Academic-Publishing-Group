export interface Journal {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  issn: string;
  category?: string;
  subject?: string;
}

export interface Issue {
  id: string;
  journalId: string;
  volume: number;
  number: number;
  year: number;
  month?: string;
  title?: string;
  published: boolean;
  coverImage?: string;
}

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  affiliation: string;
  email: string;
}

export type ArticleStatus = 'Draft' | 'Submitted' | 'In Review' | 'Accepted' | 'Paid' | 'Published' | 'Rejected';

export interface Article {
  id: string;
  issueId: string;
  journalId: string; // Denormalized for easier access
  title: string;
  abstract: string;
  authors: Author[];
  pageStart: number;
  pageEnd: number;
  pdfUrl?: string;
  doi?: string;
  keywords: string[];
  views: number;
  downloads: number;
  citations?: number;
  status: ArticleStatus;
  submissionDate?: string;
  volume?: number | string;
  issue?: number | string;
}

export interface User {
  id: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: 'admin' | 'editor' | 'reviewer' | 'author' | 'reader';
  affiliation?: string;
  department?: string;
  orcidId?: string;
  website?: string;
  bio?: string;
  avatarUrl?: string;
  paymentMethods?: {
    type: 'card' | 'paypal';
    lastFour?: string;
    email?: string;
  }[];
  notifications?: {
    reviewUpdates: boolean;
    manuscriptStatusChanges: boolean;
    citationAlerts: boolean;
    newsletter: boolean;
    marketing: boolean;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

export interface JournalEditor {
  id: string;
  journalId: string;
  name: string;
  email: string;
  affiliation: string;
  role: string;
  photoUrl?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}