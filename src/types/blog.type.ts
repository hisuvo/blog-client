export interface Blog {
  id: string | number;
  title: string;
  content: string;
  thumbnail?: string | null;
  isFeatured: boolean;
  _count: {
    comments: number;
  };
  tags?: string[];
  views: number;
}
