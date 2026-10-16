import { getPostBySlug, getAllPosts } from '../../lib/posts'
import Head from 'next/head'

export default function Post({ post }) {
  if (!post) return <p>Post not found</p>
  return (
    <article className="container mx-auto px-4 py-12">
      <Head>
        <title>{post.title} | Sports Desk</title>
        <meta name="description" content={post.excerpt || 'Sports Desk article'} />
      </Head>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date} • Editorial Team</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose max-w-none" />
    </article>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  return { props: { post } }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
