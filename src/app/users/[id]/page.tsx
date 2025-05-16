import { getPostByUser } from '@/api/posts';
import { getUser } from '@/api/users';
import AuthorDetails from '@/components/authorDetails';
import BackButton from '@/components/backButton';
import UserPosts from '@/components/userPosts';
import { UserPageProps } from '@/types/user';

export default async function UserPage({ params }: UserPageProps) {
    const { id } = await params; 
  const user = await getUser(id);
  const posts = await getPostByUser(id);

  return (
    <>
    <div className="p-5">
  <BackButton/>
    </div>
    <main
      className="max-w-3xl mx-auto p-5 font-sans text-gray-800 leading-relaxed"
    >
          <AuthorDetails
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address}
            company={user.company}
            title={`${user.name} (${user.username})`}
          />

 <UserPosts posts={posts} />
    </main>
      </>
  );
}
