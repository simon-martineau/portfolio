interface Tag {
  id: number;
  name: string;
  color: string;
}

interface Thumbnail {
  id: number;
  name: string;
  image: string;
  placeholder: string;
}

interface Project {
  id: number;
  href: string;
  title: string;
  description: string;
  link: string;
  tags: Tag[];
  thumbnail: Thumbnail;
}
