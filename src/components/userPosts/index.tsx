import React from 'react';
import Link from 'next/link';
import { Post } from '@/types/post';

function UserPosts({ posts }: {posts: Post[]} ) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-600 pb-2 mb-6">
        User's Posts:
      </h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 10 }}>
          {posts.map(post => (
            <li
              key={post.id}
              className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 mb-4"
            >
              <p className="text-lg font-bold text-gray-800 mb-2">{post.title}</p>
              <p className="text-gray-600 mb-3">{post.body.slice(0, 100)}...</p>

              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 hover:text-blue-700 font-semibold underline"
              >
                View full post
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UserPosts;
