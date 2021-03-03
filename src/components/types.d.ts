interface ITag {
  id: number;
  name: string;
  color: string;
}

interface IThumbnail {
  id: number;
  name: string;
  image: string;
  placeholder: string;
}

interface IProject {
  id: number;
  href: string;
  title: string;
  description: string;
  link: string;
  tags: ITag[];
  thumbnail: IThumbnail;
}
