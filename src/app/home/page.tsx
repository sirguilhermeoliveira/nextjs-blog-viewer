import { getPosts } from '@/api/posts';
import { getUsers } from '@/api/users';
import HeaderHome from '@/components/headerHome';
import PostsList from '@/components/postsList';

export default async function HomePage() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
    <main className="max-w-3xl mx-auto p-5 min-h-screen">
      <HeaderHome />
      <PostsList posts={posts} users={users} />
    </main>
  );
}
