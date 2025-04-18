export interface NavItem {
  title: string;
  href: string;
  description: string;
}
export interface NavItemwithChildren extends NavItem {
  card: NavItemwithChildren[];
  menu: NavItemwithChildren[];
}

export type mainNavItem = NavItemwithChildren;
export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[];
  categoryId: string;
  price: number;
  discount: number;
  rating: number;
  inventory: number;
  status: string;
};
export type Post = {
  id: string;
  author: string;
  title: string;
  content: string;
  image: string;
  body: string;
  tags: string[];
  updated_at: string;
};
