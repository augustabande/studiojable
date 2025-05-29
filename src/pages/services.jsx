import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import PricingSection from "@components/sections/Pricing";

import Link from "next/link";
import Seo from "@components/Seo";
import seoData from "@data/seo.json";

const Services = (props) => {
  const seo = seoData.servicios;
  
  const Content = {
    "title": "Soluciones digitales a tu medida",
    "subtitle": "Servicios",
    "description1": "Diseño y desarrollo páginas web para profesionales, autónomos y pequeñas empresas que quieren tener presencia online de forma clara y efectiva. Me encargo de todo el proceso: estructura, diseño, contenido y soporte.",
    "description2": "En Studio Jable, combino funcionalidad, estética y estrategia digital para ayudarte a crecer en internet. Trabajo contigo para entender tu negocio y crear una web que funcione de verdad."
  }

  return (
    <Layouts>
      <Seo title={seo.title} description={seo.description} keywords={seo.keywords} />
      <PageBanner pageImage={"img/content/13.jpg"} pageTitle={"Srvicios"} />

      {/* services */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

          <div className="row justify-content-between">
              <div className="col-lg-4 mil-mb-120">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30">{Content.title}</h3>

                  <p className="mil-appearance mil-mb-30">{Content.description1}</p>
                  <p className="mil-appearance mil-mb-30">{Content.description2}</p>

                  <div className="mil-deco mil-appearance"></div>
              </div>
              <div className="col-lg-7">
                  <div className="row">
                      {props.services.map((item, key) => (
                      <div className="col-xl-6 col-lg-12" key={`services-item-${key}`}>

                          {/* service card */}
                          <Link href={`/services/${item.id}`} className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30">
                              <div className="mil-card-content">
                                  {/* icon */}
                                  <img src={item.image} alt={item.title} className="mil-card-icon" />
                                  <div>
                                      {/* text */}
                                      <h5 className="mil-mb-10">{item.title}</h5>
                                      <p className="mil-softened-40">{item.short}</p>
                                  </div>
                              </div>
                          </Link>
                          {/* service card end */}

                      </div>
                      ))}                      
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">

              </div>
          </div>
      </div>
      {/* services end */}
      
      <PricingSection />
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}