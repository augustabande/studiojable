import Layouts from "@/src/layouts/Layouts";

import { getSortedPostsData } from "../lib/posts";

import PageBanner from "@/src/components/PageBanner";
import SubscribeSection from "../components/sections/Subscribe";
import LatestPostsSection from "../components/sections/LatestPosts";
import CallToActionSection from "../components/sections/CallToAction";
import CountersSection from "../components/sections/Counters";
import TechnologiesSection from "../components/sections/Technologies";

import Link from "next/link";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery';

const About = ( props ) => {
  const Content = {
    "about": {
      "subtitle": "Mi historia",
      "title": "Desarrollo web con enfoque institucional y soluciones claras para pequeñas empresas",
      "text_1": "Soy Augusta Bande, desarrolladora freelance especializada en diseño web, accesibilidad y visualización de datos. Con más de 15 años de experiencia, colaboro con instituciones europeas como la Comisión Europea, aportando soluciones digitales claras, funcionales y adaptadas a entornos exigentes.",
      "text_2": "Desde mi base en Canarias, también trabajo con pequeñas empresas, profesionales y proyectos con impacto local. Diseño sitios web rápidos, bien estructurados y pensados para crecer contigo. Ya sea una landing de servicios, una web subvencionada con Kit Digital o una plataforma más completa, te ayudo a dar forma a tu proyecto digital."
    },
    "gallery": [
      {
        "url": "/img/content/augusta-bande-consultora-informatica-canarias.webp",
        "width": 640,
        "height": 640
      },
      {
        "url": "/img/content/presencia-online-sitio-responsive-canarias.webp",
        "width": 1134,
        "height": 2016
      },
      {
        "url": "/img/content/soluciones-digitales-empresas-canarias.webp",
        "width": 1134,
        "height": 2016
      }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageImage={"/img/content/augusta-bande-consultora-informatica-canarias.webp"} pageTitle={"About"} />
      
      {/* about */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30">{Content.about.title}</h3>
              </div>
              <div className="col-lg-6">
                  <div className="row">
                      <div className="col-lg-6">

                          <p className="mil-first-letter mil-appearance mil-mb-30">
                            {Content.about.text_1}
                          </p>

                      </div>
                      <div className="col-lg-6">

                          <p className="mil-appearance mil-mb-30">
                            {Content.about.text_2}
                          </p>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* about end */}

      {/* gallery */}
      <div className="container mil-content-frame mil-gallery-1 mil-p-0-90">
          <div className="row justify-content-between align-items-center mil-appearance">
            <Gallery>
              {Content.gallery.map((item, key) => (
              <div className="col-md-6 col-xl-3 mil-mb-30" key={`gallery-iten-${key}`}>
                  <Item
                      original={item.url}
                      thumbnail={item.url}
                      width={item.width}
                      height={item.height}
                  >
                  {({ ref, open }) => (
                  <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className={`mil-just-image${key % 2 == 0 ? " mil-image-vert" : " mil-image-square" } mil-icon-3-trigger`} style={{ "cursor" : "pointer" }}>
                      <img src={item.url} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                  </a>
                  )}
                  </Item>
              </div>
              ))}
            </Gallery>
            {/* buttons */}
              <div className="mil-appearance">
                   <a
                    href="/cv.pdf"
                    download
                    className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space"
                  >
                    <span>Descarga mi CV</span>
                  </a>
                  
                  <Link href="https://www.linkedin.com/in/augustabande/" target="_blank" className="mil-link-hover">
                   Mi perfil de LinkedIn
                  </Link>
              </div>
            {/* buttons end */}
          </div>
      </div>
      
      {/* gallery end */}
      
       {/*<CountersSection />*/}
      <TechnologiesSection />
      <CallToActionSection />
      {/*<LatestPostsSection posts={props.posts} />
      <SubscribeSection /> */}
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts
    }
  }
}