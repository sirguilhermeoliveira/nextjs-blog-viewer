import { getPostByUser } from '@/api/posts';
import { getUser } from '@/api/users';
import BackButton from '@/components/backButton';
import { UserPageProps } from '@/types/user';
import Link from 'next/link';

export default async function UserPage({ params }: UserPageProps) {
    const { id } = await params; 
  const user = await getUser(id);
  const posts = await getPostByUser(id);

  return (
    <main style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <BackButton/>

        <section
          aria-label="Author details"
          className="mb-6 p-6 bg-blue-50 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-blue-700 border-b border-blue-600 pb-2 mb-6">
            {user.name} <span className="text-sm text-gray-500">({user.username})</span>
          </h2>

          <section aria-label="Contact info" className="mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Information</h3>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
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

          <section aria-label="Address info" className="mb-2">
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
    </main>
  );
}
