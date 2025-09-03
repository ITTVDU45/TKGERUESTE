import Wrapper from '@/layouts/Wrapper'
import posts from '@/data/BlogPosts'
import { notFound } from 'next/navigation'
import BlogDetails from '@/components/blogs/blog-details'
// simple markdown -> HTML converter (small subset)
function renderMarkdownToHtml(md: string) {
  if (!md) return ''
  // headings ##, paragraphs separated by double newline
  const lines = md.split('\n')
  let out = ''
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith('### ')) {
      out += `<h3>${line.replace('### ', '')}</h3>`
    } else if (line.startsWith('## ')) {
      out += `<h2>${line.replace('## ', '')}</h2>`
    } else if (line.startsWith('# ')) {
      out += `<h1>${line.replace('# ', '')}</h1>`
    } else if (line === '') {
      out += `<p></p>`
    } else {
      out += `<p>${line}</p>`
    }
  }
  return out
}

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: 'Blog' }
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
  }
}

export default async function Page({ params }: { params: any }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return notFound()

  const contentHtml = renderMarkdownToHtml(post.content)

  return (
    <Wrapper>
      <BlogDetails slug={slug} />
    </Wrapper>
  )
}


