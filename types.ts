export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}