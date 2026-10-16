import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import PostPreview from '../../components/PostPreview'

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Latest from Sports Desk</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
