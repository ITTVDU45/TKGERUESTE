import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import BlogComments from "./BlogComments";
import BlogForm from "@/components/forms/BlogForm";

import img_1 from "@/assets/imgs/blog/blog-details-1.jpg"
import img_2 from "@/assets/imgs/blog/blog-details-2.jpg"
import img_3 from "@/assets/imgs/blog/blog-details-3.jpg"

interface DataType {
   title_1: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   desc_5: string;
   blockquote: string;
   tags: string[];
}

import posts from '@/data/BlogPosts'

function renderMarkdownToHtml(md: string) {
	if (!md) return ''
	const lines = md.split('\n')
	let out = ''
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim()
		// CTA pattern: 👉 **Call to action** -> render as button
    const ctaMatch = line.match(/^👉\s*\*\*(.+)\*\*$/)
    if (ctaMatch) {
      const label = ctaMatch[1].trim()
      // phone link: +49 178 268 60 00 -> tel:+491782686000
      out += `<div class="cta-wrap"><a class="cta-button" href="tel:+491782686000" aria-label="Jetzt anrufen: +49 178 268 60 00">${label}</a></div>`
      continue
    }
		if (line.startsWith('### ')) out += `<h3>${line.replace('### ', '')}</h3>`
		else if (line.startsWith('## ')) out += `<h2>${line.replace('## ', '')}</h2>`
		else if (line.startsWith('# ')) out += `<h1>${line.replace('# ', '')}</h1>`
		else if (line === '') out += `<p></p>`
		else out += `<p>${line}</p>`
	}
	return out
}

function parseFaqFromContent(md: string) {
	// Sucht nach einer "### FAQs"-Sektion und extrahiert Frage/Antwort-Paare.
	if (!md) return { before: md, faqs: [] as { question: string; answer: string }[] }
	const lines = md.split('\n')
	let faqStart = -1
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].trim().toLowerCase().startsWith('### faqs')) {
			faqStart = i + 1
			break
		}
	}
	if (faqStart === -1) return { before: md, faqs: [] }
	const before = lines.slice(0, faqStart - 1).join('\n')
	const faqLines = lines.slice(faqStart)
	const faqs: { question: string; answer: string }[] = []
	let currentQ: string | null = null
	let currentALines: string[] = []
	for (let i = 0; i < faqLines.length; i++) {
		const l = faqLines[i].trim()
		if (!l) continue
		const qMatch = l.match(/^\*\*(.+)\*\*$/)
		if (qMatch) {
			if (currentQ) {
				faqs.push({ question: currentQ, answer: currentALines.join('\n') })
			}
			currentQ = qMatch[1].trim()
			currentALines = []
		} else {
			currentALines.push(l)
		}
	}
	if (currentQ) {
		faqs.push({ question: currentQ, answer: currentALines.join('\n') })
	}
	return { before: before, faqs }
}

const BlogDetailsArea = ({ slug }: { slug?: string }) => {
	const post = slug ? posts.find(p => p.slug === slug) : undefined
	if (!post) return null
	const parsed = parseFaqFromContent(post.content)
	const beforeHtml = renderMarkdownToHtml(parsed.before)

	return (
		<section className="blog-details-page section-space">
			<div className="small-container">
				<div className="row">
					<div className="col-xxl-8 col-xl-8 col-lg-8">
						<h3 className="blog-details-title mb-30 mt-20"><Link href="#">{post.title}</Link></h3>
						<p className="mb-30">{post.excerpt}</p>
						<div dangerouslySetInnerHTML={{ __html: beforeHtml }} />
						{parsed.faqs.length > 0 && (
							<section className="blog-faqs mt-40">
								<h4 className="mb-20">FAQs</h4>
								<div className="faq-accordion">
									{parsed.faqs.map((f, idx) => (
										<details className="faq-item mb-4 rounded-2xl border border-white/6 bg-white/5 p-4" key={idx}>
											<summary
												className="faq-question flex items-center justify-between cursor-pointer list-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-400 rounded-md"
												aria-controls={`faq-answer-${idx}`}
											>
												<span className="font-medium mr-4">{f.question}</span>
											<svg
												className="faq-icon w-5 h-5 text-gray-400 transition-transform duration-200"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</summary>
											<div id={`faq-answer-${idx}`} className="faq-answer mt-3 text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(f.answer) }} />
										</details>
									))}
								</div>
							</section>
						)}
					</div>
					<BlogSidebar />
				</div>
			</div>
					{/* Styles for CTA and accordion icon are in global stylesheet `src/styles/index.css` */}
			</section>
	)
}

export default BlogDetailsArea
