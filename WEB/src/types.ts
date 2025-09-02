export interface IMenuItem {
    text: string;
    url: string;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar?: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}
// types/blog.ts
export interface Blog {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  
  // Content fields
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  featuredImage?: string;
  category: string;
  tags?: string[];
  readTime: number;
  
  // Status fields
  isPublished: boolean;
  publishedAt?: string;
  views: number;
  
  // SEO fields
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogCreate {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  featuredImage?: string;
  category: string;
  tags?: string[];
  readTime: number;
  isPublished: boolean;
  publishedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogUpdate {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  authorId?: string;
  featuredImage?: string;
  category?: string;
  tags?: string[];
  readTime?: number;
  isPublished?: boolean;
  publishedAt?: string;
  views?: number;
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogList {
  documents: Blog[];
  total: number;
}

export interface BlogFilters {
  category?: string;
  authorId?: string;
  isPublished?: boolean;
  tags?: string[];
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'publishedAt' | 'createdAt' | 'views' | 'title';
  sortOrder?: 'ASC' | 'DESC';
}

// types/news.ts
export interface News {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  
  // Content fields
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  featuredImage?: string;
  category: string;
  
  // Status fields
  isBreaking: boolean;
  isPublished: boolean;
  publishedAt?: string;
  views: number;
  
  // Source information
  source?: string;
  sourceUrl?: string;
  location?: string;
  
  // SEO fields
  metaTitle?: string;
  metaDescription?: string;
}

export interface NewsCreate {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorId: string;
  featuredImage?: string;
  category: string;
  isBreaking: boolean;
  isPublished: boolean;
  publishedAt?: string;
  source?: string;
  sourceUrl?: string;
  location?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface NewsUpdate {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  authorId?: string;
  featuredImage?: string;
  category?: string;
  isBreaking?: boolean;
  isPublished?: boolean;
  publishedAt?: string;
  source?: string;
  sourceUrl?: string;
  location?: string;
  views?: number;
  metaTitle?: string;
  metaDescription?: string;
}

export interface NewsList {
  documents: News[];
  total: number;
}

export interface NewsFilters {
  category?: string;
  isBreaking?: boolean;
  isPublished?: boolean;
  location?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'publishedAt' | 'createdAt' | 'views' | 'title';
  sortOrder?: 'ASC' | 'DESC';
}