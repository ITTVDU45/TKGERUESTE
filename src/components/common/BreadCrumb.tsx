import Link from "next/link";

interface DataType {
   sub_title: string;
   title: string;
   bgImage?: string;
}
const BreadCrumb = ({ sub_title, title, bgImage }: DataType) => {
   const bg = bgImage ?? '/assets/imgs/shapes/shape-35.png';
   return (
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
         <div className="breadcrumb__thumb" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '100%', height: '100%', position: 'absolute', inset: 0 }} ></div>
         {/* dark blue overlay to improve text contrast (increased opacity) */}
         <div className="breadcrumb__overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(6,29,57,0.78)', zIndex: 1 }} />
         <div className="small-container">
            <div className="row justify-content-center">
               <div className="col-xxl-12">
                  <div className="breadcrumb__wrapper p-relative" style={{ position: 'relative', zIndex: 2 }}>
                     <h2 className="breadcrumb__title">{sub_title}</h2>
                     <div className="breadcrumb__menu">
                        <nav>
                           <ul>
                              <li><span><Link href="/">Home</Link></span></li>
                              <li><span>{title}</span></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BreadCrumb
