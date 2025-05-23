import { Comment } from "@/types/comment";

export async function getCommentsByPost(postId: number): Promise<Comment[]> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { next: { revalidate: 60 } });
  return res.json();
}