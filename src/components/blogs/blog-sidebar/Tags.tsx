import Link from "next/link"

const tags: string[] = ["Fassadengerüst", "Planung", "Kosten", "Sicherheit", "Raumgerüst", "Innenausbau", "Industriegerüste", "Checkliste"]

const Tags = () => {
   return (
      <div className="blog-widget-4 mb-30">
         <h5 className="blog-widget-title p-relative mb-45">Stichworte</h5>
         <div className="tagcloud">
            {tags.map((tag, i) => (
               <Link key={i} href={`/blog?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
            ))}
         </div>
      </div>
   )
}

export default Tags
