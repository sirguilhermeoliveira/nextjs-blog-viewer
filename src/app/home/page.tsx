import { getPosts } from '@/api/posts';
import { getUsers } from '@/api/users';
import Link from 'next/link';

export default async function HomePage() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
<main className="max-w-3xl mx-auto p-5 min-h-screen">
<header className="mb-8">
  <h1 className="text-4xl font-extrabold text-gray-900">Latest Posts</h1>
  <p className="text-gray-500 mt-2">Read what our community is sharing today</p>
</header>
  <ul className="space-y-6">
    {posts.map(post => {
      const user = users.find(user => user.id === post.userId);

      return (
        <li
          key={post.id}
          className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
        >
          <Link
            href={`/users/${user?.id}`}
            className="text-blue-600 hover:text-blue-700 font-semibold block mb-1"
          >
            {user?.name} <span className="text-sm text-gray-500">({user?.email})</span>
          </Link>

          <p className="text-lg font-bold text-gray-800 mb-2">{post.title}</p>
          <p className="text-gray-600 mb-3">{post.body.slice(0, 100)}...</p>

          <Link
            href={`/posts/${post.id}`}
            className="text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            View full post
          </Link>
        </li>
      );
    })}
  </ul>
</main>

  );
}
