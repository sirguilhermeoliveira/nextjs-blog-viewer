import { PostsListProps } from '@/types/post';
import Link from 'next/link';

export default function PostsList({ posts, users }: PostsListProps) {
  return (
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
  );
}
