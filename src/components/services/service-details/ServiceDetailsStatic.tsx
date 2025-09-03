"use client"
import Image from "next/image";
import Link from "next/link";

interface DataType {
   title_1: string;
   title_2: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   list: string[];
}

import service_thumb1 from "@/assets/imgs/service/service-details-1.jpg"
import service_thumb2 from "@/assets/imgs/service/service-details-2.jpg"
import service_thumb3 from "@/assets/imgs/service/service-details-3.jpg"
import service_thumb4 from "@/assets/imgs/service/service-details-4.jpg"
import ServiceSidebar from "./ServiceSidebar";

const ServiceDetailsStatic = ({ data }: { data: DataType }) => {
  const { title_1, title_2, desc_1, desc_2, desc_3, desc_4, list } = data;
  return (
    <section className="service-details-page section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="service-details-page-content">
              <figure className="w-img">
                <Image src={service_thumb1} alt="" />
              </figure>
              <h3 className="service-details-title mt-45 mb-25">{title_1}</h3>
              <p className="mb-25">{desc_1}</p>
              <p className="mb-35">{desc_2}</p>

              <div className="mt-30 mb-30">
                <Link href="/contact" className="primary-btn-1 btn-hover brand-gradient">Jetzt anfragen &nbsp; | <i className="icon-right-arrow"></i></Link>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <figure className="w-img">
                    <Image src={service_thumb2} alt="" />
                  </figure>
                </div>
                <div className="col-lg-6">
                  <figure className="w-img">
                    <Image src={service_thumb3} alt="" />
                  </figure>
                </div>
              </div>
              <p className="mt-25 mb-35">{desc_3}</p>

              <h4>{title_2}</h4>

              <p className="mt-25 mb-35">{desc_4}</p>
              <div className="row">
                <div className="col-lg-7">
                  <figure className="w-img">
                    <Image src={service_thumb4} alt="" />
                  </figure>
                </div>
                <div className="col-lg-5">
                  <ul className="service-details-page-list pt-20 pb-10">
                    {list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ServiceSidebar />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsStatic;


