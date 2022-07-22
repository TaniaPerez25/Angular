export interface PostResult {
  data: Post[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface Post {
  postid: number;
  day: string;
  month: string;
  name: string;
  text: string;
  user: string;
  category: string;
}