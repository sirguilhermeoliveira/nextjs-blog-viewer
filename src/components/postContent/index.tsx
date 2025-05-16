import { PostContentProps } from "@/types/post";

export default function PostContent({ body }: PostContentProps) {
  return (
    <section
      aria-label="Post content"
      className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm whitespace-pre-wrap text-lg"
    >
      {body}
    </section>
  );
}
