import { PostHeaderProps } from '@/types/post';
import Link from 'next/link';

export default function PostHeader({ title, userId, userName }: PostHeaderProps) {
  return (
    <header className="border-b-2 border-blue-600 pb-4 mb-8">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">{title}</h1>
      <p className="text-gray-600 text-base">
        By{' '}
        <Link
          href={`/users/${userId}`}
          className="text-blue-600 underline hover:text-blue-700"
        >
          {userName} 
        </Link>
      </p>
    </header>
  );
}
