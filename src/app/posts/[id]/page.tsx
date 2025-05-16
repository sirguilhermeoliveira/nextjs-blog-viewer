import { PostPageProps } from '@/types/post';
import Link from 'next/link';
import { getCommentsByPost } from '@/api/comments';
import { getPost } from '@/api/posts';
import { getUser } from '@/api/users';
import BackButton from '@/components/backButton';

export default async function PostPage({ params }: PostPageProps) {
      const { id } = await params; 
  const post = await getPost(id);
  const comments = await getCommentsByPost(id);
  const user = await getUser(post.userId);

  return (
    <main
      className="max-w-3xl mx-auto p-5 font-sans text-gray-800 leading-relaxed"
    >
      <BackButton/>
      <article>
        <header className="border-b-2 border-blue-600 pb-4 mb-8">
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900">{post.title}</h1>
          <p className="text-gray-600 text-base">
            By{' '}
            <Link
              href={`/users/${user.id}`}
              className="text-blue-600 underline hover:text-blue-700"
            >
              {user.name}
            </Link>
          </p>
        </header>

        <section
          aria-label="Post content"
          className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm whitespace-pre-wrap text-lg"
        >
          {post.body}
        </section>

        <section
          aria-label="Author details"
          className="mb-12 p-6 bg-blue-50 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-600 pb-2 mb-6">
            About the Author
          </h2>

          <section aria-label="Contact info" className="mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Information</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${user.email}`}
                className="text-blue-600 hover:underline"
              >
                {user.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </section>

          <section aria-label="Address info" className="mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Address</h3>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city} - {user.address.zipcode}
            </p>
            <p>
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </section>

          <section aria-label="Company info">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Company</h3>
            <p className="font-bold">{user.company.name}</p>
            <p className="italic text-gray-600">"{user.company.catchPhrase}"</p>
            <p>{user.company.bs}</p>
          </section>
        </section>

        <section
          aria-label="Comments section"
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">
            Comments ({comments.length})
          </h2>

          {comments.length === 0 ? (
            <p className="italic text-gray-600">No comments yet. Be the first to comment!</p>
          ) : (
            <ul className="list-none p-0">
              {comments.map((comment) => (
                <li
                  key={comment.id}
                  className="mb-6 pb-4 border-b border-gray-300"
                >
                  <p className="mb-1">
                    <strong>{comment.name}</strong>{' '}
                    <a
                      href={`mailto:${comment.email}`}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      ({comment.email})
                    </a>
                  </p>
                  <p className="whitespace-pre-wrap">{comment.body}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </article>
    </main>
  );
}
