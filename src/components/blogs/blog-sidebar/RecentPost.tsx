import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import img_1 from "@/assets/imgs/blog/blog-sidebar-1.jpg"
import img_2 from "@/assets/imgs/blog/blog-sidebar-2.jpg"
import img_3 from "@/assets/imgs/blog/blog-sidebar-3.jpg"
import posts from '@/data/BlogPosts'

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   date: string
   slug: string;
}

// derive recent posts from central posts data (fallback to bundled images)
const recent_data: DataType[] = posts.slice(0, 3).map((p, idx) => ({
   id: idx + 1,
   thumb: (p as any).thumb ? (p as any).thumb : [img_1, img_2, img_3][idx % 3],
   title: p.title,
   date: p.date,
   slug: p.slug
}));

const RecentPost = () => {
   return (
      <div className="blog-widget-3 mb-30">
         <h5 className="blog-widget-title p-relative mb-45">Weitere Beiträge</h5>
         <div className="blog-post-sidebar-area">
            {recent_data.map((item) => (
               <div key={item.id} className="blog-post-sidebar">
                  <Link className="w-img blog-sidebar-thumb" href={`/blog/${item.slug}`}>
                     <Image src={item.thumb} alt={item.title} width={90} height={60} />
                  </Link>
                  <div className="content">
                     <span><i className="fal fa-calendar-alt"></i> {item.date}</span>
                     <h6 className="blog-sidebar-post-title mt-10"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h6>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default RecentPost
