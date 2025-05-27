import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

import { useEffect } from "react";

import { accordion } from "../../common/utilits";

import Link from "next/link";

import { getAllServicesIds, getServiceData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import PricingSection from "@components/sections/Pricing";

import seoData from "@data/seo.json";
import { useRouter } from "next/router";
import Head from "next/head";

const ServiceDetail = ( { postData } ) => {
   console.log("postData:", postData); 
    const router = useRouter();
    const { id } = router.query;

    const key = `services/${id}`;
    const seo = seoData[key] || {
      title: "Servicios digitales | Studio Jable",
      description: "Descubre nuestros servicios de diseño web, estrategia digital y mantenimiento.",
      keywords: "diseño web, servicios digitales, consultoría online"
    };
  
  const Content = {
    "title": "Soluciones digitales a tu medida", 
    "subtitle": "Servicios",
    "description1": "Diseño y desarrollo soluciones digitales para profesionales, autónomos y pequeñas empresas que quieren tener presencia online de forma clara y efectiva. Trabajo contigo para entender tu negocio y crear una web que funcione de verdad.",
    "description2": "En Studio Jable, combino funcionalidad, estética y estrategia digital para ayudarte a crecer en internet. Me encargo de todo el proceso: estructura, diseño, contenido y soporte."

  }

  useEffect(() => { 
    accordion();
  }, []);

  return (
    <Layouts>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      <PageBanner pageImage={postData.fullImage} pageTitle={postData.title} />

      {/* service */}
      <div className="container mil-content-frame mil-appearance mil-p-120-120">

            <div className="row justify-content-between">
                <div className="col-lg-4 mil-mb-120">
                    <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">Services</span>
                    <h3 className="mil-appearance mil-mb-30">{postData.title}</h3>

                    <p className="mil-appearance mil-mb-30">{postData.description}</p>

                    {/*<Link href={postData.button.link} className="mil-button mil-button-lg mil-scale-down-trigger mil-accent-trigger">
                        <span>{postData.button.label}</span>
                    </Link>*/}
                    
                   {Array.isArray(postData.buttons)
                    ? postData.buttons.map((btn, i) => (
                        <Link key={`button-${i}`} href={btn.link} legacyBehavior>
                          <a
                            target={btn.target}
                            rel={btn.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="mil-button mil-button-lg mil-scale-down-trigger mil-accent-trigger mil-mr-10"
                          >
                            <span>{btn.label}</span>
                          </a>
                        </Link>
                      ))
                    : postData.buttons && (
                        <Link href={postData.buttons.link} legacyBehavior>
                          <a
                            target={postData.buttons.target}
                            rel={postData.buttons.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="mil-button mil-button-lg mil-scale-down-trigger mil-accent-trigger"
                          >
                            <span>{postData.buttons.label}</span>
                          </a>
                        </Link>
                      )}

                </div>
                <div className="col-lg-6">
                    <div className="mil-accordion">
                        
                        {postData.list.map((item, key) => (

                        <div className="mil-accordion-group mil-appearance" key={`service-list-${key}`}>
                            <div className="mil-accordion-menu">
                                <h6>{item.label}</h6>

                                <div className="mil-accordion-plus">+</div>
                                <div className="mil-accordion-minus">-</div>
                            </div>
                            <div className="mil-accordion-content" dangerouslySetInnerHTML={{__html : item.value}} />
                        </div>

                        ))}

                    </div>
                </div>
            </div>
      </div>
      {/* service end */}
      
      <PricingSection />

      

      <CallToActionSection />
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
    const paths = getAllServicesIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getServiceData(params.id)

    return {
      props: {
        postData
      }
    }
}