export interface CommentResult {
  data: Comment[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface Comment {
  id: number;
  user: string;
  text: string;
  postid: number;
}