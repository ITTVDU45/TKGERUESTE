"use client";
import { useEffect, useState } from "react";
import Image from "next/image"
import faq_data from "@/data/FaqData"

const faq_thumb = "/assets/imgs/project/projektbild6.jpeg"

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const FaqArea = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      setFaqData(faq_data);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) =>
            faq.id === faqId
               ? { ...faq, showAnswer: !faq.showAnswer }
               : { ...faq, showAnswer: false }
         )
      );
   };

   return (
      <section className="faq-page-section section-space">
         <div className="small-container">

            {/* Gallery removed from FAQ - projects gallery moved to Services page */}

            <div className="row">
               <div className="col-xxl-7 col-xl-7 col-lg-7">
                  <div className="faq-wrapper pr-80">
                     <div className="title-box mb-25 wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title no-border">FAQ</span>
                        <h3 className="section-title mt-10">Häufig gestellte Fragen</h3>
                     </div>
                     <div className="bd-faq">
                        <div className="accordion" id="accordionExample-st-2">
                           <div className="bd-faq-group">
                              {faqData.filter((items) => items.page === "home_2").map((item) => (
                                 <div key={item.id} className="accordion-item">
                                    <h2 className="accordion-header" id={`heading-st-2-${item.id}`}>
                                       <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} type="button" onClick={() => toggleAnswer(item.id)} >
                                          {item.title}
                                       </button>
                                    </h2>
                                    <div className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`} >
                                       <div className="accordion-body">{item.desc}</div>
                                    </div>
                                 </div>

                              ))}
                           </div>
                        </div>
                        <div className="faq-cta mt-40 text-center">
                           <h4>Haben Sie weitere Fragen?</h4>
                           <p>Kontaktieren Sie uns direkt – wir beraten Sie gerne.</p>
                           <div className="mt-20">
                              <a className="primary-btn-1 btn-hover brand-gradient" href="/contact">Kontaktieren Sie uns</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-5 col-xl-5 col-lg-5">
                  <figure className="w-img pt-15" style={{ borderRadius: 12, overflow: 'hidden' }}>
                     <div style={{
                        backgroundImage: `linear-gradient(rgba(6,29,57,0.22), rgba(6,29,57,0.12)), url(${faq_thumb})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                        minHeight: 320,
                     }} />


                     
                  </figure>
               </div>
            </div>
         </div>
      </section>
   )
}

export default FaqArea
