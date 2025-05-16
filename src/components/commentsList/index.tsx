import { Comment } from "@/types/comment";

export default function CommentsList({ comments }: {comments: Comment[]}) {
  return (
    <section aria-label="Comments section" className="mb-12">
      <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">
        Comments ({comments.length})
      </h2>

      {comments.length === 0 ? (
        <p className="italic text-gray-600">No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="list-none p-0">
          {comments.map(comment => (
            <li key={comment.id} className="mb-6 pb-4 border-b border-gray-300">
              <p className="mb-1">
                <strong>{comment.name}</strong>{' '}
                <a href={`mailto:${comment.email}`} className="text-blue-600 text-sm hover:underline">
                  ({comment.email})
                </a>
              </p>
              <p className="whitespace-pre-wrap">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
