import { User } from "./user";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostPageProps {
  params: {
    id: string;
  };
}

export interface PostsListProps {
  posts: Post[];
  users: User[];
}
export interface PostHeaderProps {
  title: string;
  userId: number;
  userName: string;
}
export interface PostContentProps {
  body: string;
}
