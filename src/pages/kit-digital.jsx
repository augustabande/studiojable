import { useEffect } from "react";
import Layouts from "@layouts/Layouts";

import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import CountersSection from "@components/sections/Counters";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import { cursorSwiperAnimation } from "@/src/common/cursor";
import Link from "next/link";


const Kitdigital = ( props ) => {
  useEffect(() => {
    cursorSwiperAnimation();
  }, []);

 const Content = {
    "about1": {
    "subtitle": "¿Qué es el Kit Digital?",
    "title": "¿Qué es el Kit Digital?",
    "text_1": "El Kit Digital es una iniciativa del Gobierno de España para subvencionar la digitalización de pequeñas empresas, microempresas y autónomos de cualquier sector, a través de la adopción de soluciones digitales que impulsan su desarrollo.",
    "text_2": "Se trata de un Bono Digital 100% subvencionado con ayudas que parten desde los 3.000€ hasta los 29.000€, según el segmento al que pertenezca la empresa y el número de trabajadores. Nosotros nos encargamos de solicitarlo e implementarlo por ti.",
      "image1": "/img/content/1.jpg",
      "image2": "/img/content/2.jpg",
      "rotateText": "Kit Digital - Transformación - Ayudas - Subvención"
    },
    "about2": {
      "subtitle": "¿Por qué elegirnos?",
      "title": "Tu socio tecnológico de confianza",
      "text_1": "Con años de experiencia en digitalización de negocios, Studio Jable ofrece soluciones adaptadas a cada cliente, asegurando calidad, agilidad y resultados.",
      "text_2": "Nuestra misión es facilitar el acceso a la tecnología a través de proyectos subvencionados, formación y soporte continuo."
    },
    "button": {
      "label": "Solicita información",
      "link": "/contacto"
    },
    "gallery": [
      {
        "url": "/img/content/8.jpg",
        "width": 1000,
        "height": 1500
      },
      {
        "url": "/img/content/9.jpg",
        "width": 1920,
        "height": 1280
      },
      {
        "url": "/img/content/10.jpg",
        "width": 1000,
        "height": 1500
      },
      {
        "url": "/img/content/11.jpg",
        "width": 1920,
        "height": 1440
      }
    ]
  };
  const staticKitDigital = {
    bg_image: "img/content/3.jpg",
    items: [
      {
        num: "01",
        title: "Regístrate en Acelera Pyme",
        icon: "/img/icons/1.svg",
        text: "Regístrate en acelerapyme.es y completa el test de autodiagnóstico.",
        link: "https://www.acelerapyme.gob.es/quieres-conocer-el-grado-de-digitalizacion-de-tu-pyme"
      },
      {
        num: "02",
        title: "Selecciona tu solución",
        icon: "img/icons/2.svg",
        text: "Elige las diferentes soluciones de digitalización dentro del catálogo existente en el Programa Kit Digital.",
        link: "/services/diseno-web"
      },
      {
        num: "03",
        title: "Solicita el bono digital",
        icon: "img/icons/3.svg",
        text: "Obtén tu bono digital y canjéalo a través de un Agente Digitalizador como Studio Jable.",
        link: "/contacto"
      },
      {
        num: "04",
        title: "Creamos tu solución digital",
        icon: "img/icons/4.svg",
        text: "Nos encargamos de implementar la solución y de todo el proceso de justificación del bono.",
        link: "/services/kit-digital"
      }
    ]
  };


  return (
    <Layouts>
      <PageBanner pageImage={"img/content/2.jpg"} pageTitle={"About 2"} />
      
      {/* about */}
      <div className="container mil-content-frame mil-p-120-0">
          <div className="row justify-content-between align-items-center">
              <div className="mil-12 col-xl-5 mil-mb-90">

                  <div className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about1.subtitle}</div>
                  <h3 className="mil-appearance mil-mb-30">{Content.about1.title}</h3>
                  <p className="mil-appearance mil-mb-30">{Content.about1.text_1}</p>
                  <p className="mil-appearance mil-mb-30">{Content.about1.text_2}</p>

              </div>
              <div className="mil-12 col-xl-6 mil-mb-90">

                  {/* collage */}
                  <div className="mil-collage-1">
                      <div className="mil-circle-text-position" style={{"bottom": "62%", "left": "-75px"}}>
                          <div className="mil-circle-text mil-rotate mil-accent-inside mil-appearance" data-value="360">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                                  <defs>
                                      <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                  </defs>
                                  <circle cx="150" cy="100" r="75" fill="none" />
                                  <g>
                                      <use xlinkHref="#circlePath" fill="none" />
                                      <text className="mil-link mil-dark" style={{"letterSpacing": "5.5px"}}>
                                          {/* circle text */}
                                          <textPath xlinkHref="#circlePath"></textPath>
                                      </text>
                                  </g>
                              </svg>
                          </div>
                      </div>
                      <div className="mil-image-1 mil-appearance">
                          <div className="mil-just-image mil-image-square">
                              {/* back image */}
                              <img src={Content.about1.image1} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                          </div>
                      </div>
                      <div className="mil-image-2 mil-appearance">
                          <div className="mil-just-image">
                              {/* front image */}
                              <img src={Content.about1.image2} alt="img" style={{'objectPosition': "right"}} />
                          </div>
                      </div>
                  </div>
                  {/* collage end */}

              </div>
          </div>
      </div>
      {/* about end */}
      <div className="container mil-content-frame">
       <div className="row justify-content-center align-items-center text-center gap-4 flex-wrap">
          <div className="col-6 col-md-3 mil-mb-30">
            <img src="/img/kit-digital/Logo_union_europea.png" alt="Financiado por la Unión Europea" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-3 mil-mb-30">
            <img src="/img/kit-digital/Logo_Ministerio.png" alt="Gobierno de España" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-3 mil-mb-30">
            <img src="/img/kit-digital/Logo_Red.es.png" alt="red.es" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-3 mil-mb-30">
            <img src="/img/kit-digital/Logo_PRTR.png" alt="Plan de Recuperación, Transformación y Resiliencia" className="img-fluid logo-kitdigital" />
          </div>
        </div>
      </div>
      <div className="container mil-content-frame">
         <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-120">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">Sigue nuestro proceso para solicitar la ayuda</span>
                  <h3 className="mil-appearance mil-mb-30">Pasos para solicitar la ayuda</h3>

                  <p className="mil-appearance mil-mb-30"></p>
                  <p className="mil-appearance mil-mb-30"></p>

                  <div className="mil-deco mil-appearance"></div>
            </div>
            <div className="col-lg-7">
                <div className="row">
                      {staticKitDigital.items.map((item, key) => (
                      <div className="col-xl-6 col-lg-12" key={`step-${key}`}>
                        {item.link.startsWith("http") ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30"
                          >
                            <div className="mil-card-content">
                              <img src={item.icon} alt={item.title} className="mil-card-icon" style={{ width: "60px", marginBottom: "15px" }} />
                              <div>
                                <h5 className="mil-mb-10">{item.title}</h5>
                                <p className="mil-softened-40">{item.text}</p>
                              </div>
                            </div>
                          </a>
                        ) : (
                          <Link href={item.link} className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30">
                            <div className="mil-card-content">
                              <img src={item.icon} alt={item.title} className="mil-card-icon" style={{ width: "60px", marginBottom: "15px" }} />
                              <div>
                                <h5 className="mil-mb-10">{item.title}</h5>
                                <p className="mil-softened-40">{item.text}</p>
                              </div>
                            </div>
                          </Link>
                        )}

                      </div>
                    ))}                    
                </div>
              </div>
         </div>
        
      </div>
      
      <div className="container mil-content-frame mil-p-60-60">
  <h3 className="mil-appearance mil-mb-30">Soluciones disponibles por segmento</h3>
  <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Segmentos</th>
          <th>Categoría</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sitio Web Profesional</td>
          <td>I, II, III</td>
          <td>Presencia en internet</td>
          <td>Desarrollo web personalizado, responsive y optimizado para SEO.</td>
        </tr>
        <tr>
          <td>E-commerce Básico</td>
          <td>I, II</td>
          <td>Comercio electrónico</td>
          <td>Diseño y desarrollo de tienda online con carrito y pasarela de pago.</td>
        </tr>
        {/* Aggiungi altre righe qui */}
      </tbody>
    </table>
  </div>
</div>

      {/* about */}
      <div className="container mil-content-frame mil-appearance mil-p-0-90">
          <div className="row justify-content-between">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about2.subtitle}</span>
                  <h3 className="mil-appearance mil-mb-30">{Content.about2.title}</h3>
              </div>
              <div className="col-lg-6">
                  <div className="row">
                      <div className="col-lg-6">
                          <p className="mil-first-letter mil-appearance mil-mb-30">{Content.about2.text_1}</p>
                      </div>
                      <div className="col-lg-6">
                          <p className="mil-appearance mil-mb-30">{Content.about2.text_2}</p>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className="row align-items-center">
                <div className="col-lg-9 mil-mb-30">
                    
                </div>
                <div className="col-lg-3 mil-mb-30">
                    <Link href="mailto:hello@studiojable.com" className="mil-float-right mil-button mil-button-lg mil-button-dark mil-scale-down-trigger mil-accent-trigger">
                        <span>Contactame</span>
                    </Link>
                </div>
            </div>
      </div>
      {/* about end */}
      
      {/* gallery */}
       {/*<div className="container mil-p-0-120">
          <Gallery>
          <Swiper
            {...sliderProps.milGallerySlider}
            className="swiper-container mil-gallery-slider mil-appearance"
          >
            {Content.gallery.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`gallery-item-${key}`}>
                    <Item
                        original={item.url}
                        thumbnail={item.url}
                        width={item.width}
                        height={item.height}
                    >
                    {({ ref, open }) => (
                    <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className="mil-just-image mil-image-hori mil-icon-3-trigger" style={{ "cursor" : "pointer" }}>
                        <img src={item.url} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                    </a>
                    )}
                    </Item>
                </SwiperSlide>
            ))}
          </Swiper>
          </Gallery>
      </div>*/}
      {/* gallery end */}
      
      {/*<CountersSection />
      <CallToActionSection />*/}
      {/*<LatestPostsSection posts={props.posts} layout={2} />
      <SubscribeSection />*/}
    </Layouts>
  );
};
export default Kitdigital;