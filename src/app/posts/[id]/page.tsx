import { PostPageProps } from '@/types/post';
import { getCommentsByPost } from '@/api/comments';
import { getPost } from '@/api/posts';
import { getUser } from '@/api/users';
import BackButton from '@/components/backButton';
import PostHeader from '@/components/postHeader';
import PostContent from '@/components/postContent';
import CommentsList from '@/components/commentsList';
import AuthorDetails from '@/components/authorDetails';

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const comments = await getCommentsByPost(id);
  const user = await getUser(post.userId);

  return (
    <>
      <div className="p-5">
        <BackButton />
      </div>

      <main className="max-w-3xl mx-auto p-5 font-sans text-gray-800 leading-relaxed">
        <article>
          <PostHeader title={post.title} userId={user.id} userName={user.name} />
          <PostContent body={post.body} />
          <AuthorDetails
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address}
            company={user.company}
          />
          <CommentsList comments={comments} />
        </article>
      </main>
    </>
  );
}
