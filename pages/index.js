import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import PostPreview from '../components/PostPreview'

export default function Home({ posts }) {
  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-12">
        <h1 className="text-5xl font-extrabold">Sports Desk</h1>
        <p className="mt-3 text-lg text-gray-600">Reporting and commentary on sports — written by an editorial team.</p>
      </header>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Articles</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.slice(0,4).map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-blue-600">See all articles →</Link>
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-bold">About</h3>
        <p className="mt-2 text-gray-600">Sports Desk is an independent sports journalism site focused on reporting, long-form features, and commentary. The site is run by an editorial team and the author’s name is only published in the About page. Ready to publish your first article? Create a Markdown file in the <code>posts/</code> folder.</p>
        <p className="mt-2 text-sm text-gray-500">Want help writing the first post? Tell me the topic and I can draft one.</p>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
