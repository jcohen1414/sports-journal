import Link from 'next/link'

export default function PostPreview({ post }) {
  return (
    <article className="p-6 border rounded-lg">
      <h3 className="text-xl font-semibold mb-2"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
      {post.date && <p className="text-sm text-gray-500 mb-4">{post.date} • Editorial Team</p>}
      {post.excerpt && <p className="text-gray-700">{post.excerpt}</p>}
      <div className="mt-4">
        <Link href={`/blog/${post.slug}`} className="text-blue-600">Read →</Link>
      </div>
    </article>
  )
}
