interface ITag {
  id: number;
  name: string;
  color: string;
}

interface IProject {
  id: number;
  href: string;
  title: string;
  description: string;
  link: string;
  tags: ITag[];
  thumbnail: string | null;
}
