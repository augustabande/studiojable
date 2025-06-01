import { useEffect } from "react";
import Layouts from "@layouts/Layouts";

import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import PageBanner from "@components/PageBanner";
import { accordion } from "../common/utilits";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import { cursorSwiperAnimation } from "@/src/common/cursor";
import Link from "next/link";

import Seo from "@components/Seo";
import seoData from "@data/seo.json";


const Kitdigital = ( props ) => {
  useEffect(() => {
    cursorSwiperAnimation();
     accordion();
  }, []);
  const seo = seoData.kitdigital;
  const postData = {
  title: "Soluciones Kit Digital",
  description: "Como Agente Digitalizador autorizado, Jable Studio ofrece soluciones subvencionadas por el programa Kit Digital para impulsar la transformación digital de pymes y autónomos.",
  buttons: {
    label: "SOLICITA TU BONO",
    link: "https://www.acelerapyme.gob.es/kit-digital",
    target: "_blank"
  },
  list: [
    {
      label: "Sitio web y presencia basica en internet",
      description: "Diseño y desarrollo de páginas web adaptadas a móviles, optimizadas para SEO y con alojamiento incluido.",
      amount: "Hasta 2.000€",
      segments: "Exclusiva para los segmentos I, II y III"
    },
    {
      label: "Comercio electrónico",
      description: "Creación de tiendas online con pasarelas de pago, gestión de productos y optimización del proceso de compra.",
      amount: "Hasta 5.000€",
      segments: "-"
    },
    {
      label: "Gestión de redes sociales",
      description: "Planificación estratégica, generación de contenido y gestión de campañas en redes sociales.",
      amount: "Hasta 5.000€",
      segments: "-"
    },
    {
      label: "Presencia avanzada en internet",
      description: "SEO avanzado, analítica web, posicionamiento estratégico y mejora de rendimiento.",
      amount: "Hasta 5.000€",
      segments: "Excluida de la primera convocatoria"
    }
  ]

};


 const Content = {
    "about1": {
    "subtitle": "¿Qué es el Kit Digital?",
    "title": "¿Qué es el Kit Digital?",
    "text_1": "El Kit Digital es una iniciativa del Gobierno de España para subvencionar la digitalización de pequeñas empresas, microempresas y autónomos de cualquier sector, a través de la adopción de soluciones digitales que impulsan su desarrollo.",
    "text_2": "Se trata de un Bono Digital 100 % subvencionado con ayudas que parten desde los 3.000 € hasta los 29.000 €, según el segmento al que pertenezca la empresa y el número de trabajadores. Nosotros nos encargamos de solicitarlo e implementarlo por ti. Estas ayudas están financiadas por la Unión Europea a través de los fondos “Next Generation EU”, en el marco del Plan de Recuperación, Transformación y Resiliencia del Gobierno de España.",     
      "image1": "/img/content/studio-jable-agente-para-kit-digital.webp",
      "image2": "/img/content/kit-digital-studio-jable.webp",
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
      "link": "/contact"
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
        icon: "/img/kit-digital/1.svg",
        text: "Regístrate en acelerapyme.es y completa el test de autodiagnóstico.",
        link: "https://www.acelerapyme.gob.es/quieres-conocer-el-grado-de-digitalizacion-de-tu-pyme"
      },
      {
        num: "02",
        title: "Selecciona tu solución",
        icon: "/img/kit-digital/2.svg",
        text: "Elige las diferentes soluciones de digitalización dentro del catálogo existente en el Programa Kit Digital.",
        link: "/kit-digital#kit-digital-soluciones"
      },
      {
        num: "03",
        title: "Solicita el bono digital",
        icon: "/img/kit-digital/3.svg",
        text: "Obtén tu bono digital y canjéalo a través de un Agente Digitalizador como Studio Jable.",
        link: "https://www.acelerapyme.gob.es/kit-digital/solicitud-bono-digital"
      },
      {
        num: "04",
        title: "Creamos tu solución digital",
        icon: "/img/kit-digital/4.svg",
        text: "Nos encargamos de implementar la solución y de todo el proceso de justificación del bono.",
        link: "/services/kit-digital"
      }
    ]
  };


  return (
    <Layouts>
      <Seo title={seo.title} description={seo.description} keywords={seo.keywords} />
      <PageBanner pageImage={"/img/content/desarrollo-web-fuerteventura-consultor.webp"} pageTitle={"About 2"} />
      
      {/* about */}
      <div className="container mil-content-frame mil-p-120-0">
          <div className="row justify-content-between align-items-center">
              <div className="mil-12 col-xl-5 mil-mb-90">

                  <div className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about1.subtitle}</div>
                  <h1 className="mil-appearance mil-mb-30">{Content.about1.title}</h1>
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
          <div className="col-12 col-md-12 mil-mb-30">Programa Kit Digital financiado por la Unión Europea - NextGenerationEU, en el marco del Plan de Recuperación, Transformación y Resiliencia.</div>
        </div>
       <div className="row justify-content-center align-items-center text-center gap-4 flex-wrap">
          <div className="col-6 col-md-2 mil-mb-30">
            <img src="/img/kit-digital/Logo_union_europea.png" alt="Financiado por la Unión Europea" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-2 mil-mb-30">
            <img src="/img/kit-digital/Logo_Ministerio.png" alt="Gobierno de España" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-2 mil-mb-30">
            <img src="/img/kit-digital/Logo_Red.es.png" alt="red.es" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-2 mil-mb-30">
            <img src="/img/kit-digital/Logo_kitdigital.png" alt="Kit digital" className="img-fluid logo-kitdigital" />
          </div>
          <div className="col-6 col-md-2 mil-mb-30">
            <img src="/img/kit-digital/Logo_PRTR.png" alt="Plan de Recuperación, Transformación y Resiliencia" className="img-fluid logo-kitdigital" />
          </div>
        </div>
      </div>
      <div className="container mil-content-frame">
         <div className="row justify-content-between">
            <div className="col-lg-4 mil-mb-120">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">Sigue nuestro proceso para solicitar la ayuda</span>
                  <h2 className="mil-appearance mil-mb-30">Pasos para solicitar la ayuda</h2>

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
      
      <div className="container mil-content-frame mil-p-60-60" id="kit-digital-soluciones">
        <div className="row justify-content-between">
            <div className="container mil-content-frame mil-appearance mil-p-120-120">

            <div className="row justify-content-between">
                <div className="col-lg-4 mil-mb-120">
                    <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">Kit Digital • Servicios subvencionados</span>
                    <h2 className="mil-appearance mil-mb-30">Soluciones digitales con el Kit Digital</h2>

                    <p className="mil-appearance mil-mb-30">Si eres autónomo, profesional o pequeña empresa y quieres digitalizar tu negocio con ayuda del Kit Digital, estás en el lugar adecuado.
  En Studio Jable te ofrecemos soluciones completas, personalizadas y subvencionadas: desde páginas web y tiendas online hasta herramientas de gestión y automatización de procesos.
  Nos encargamos de todo: diagnóstico, solicitud del bono, ejecución técnica y soporte posterior. Así tú puedes centrarte en lo que mejor sabes hacer.</p>

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
                          <div className="mil-accordion-content-kitdigital">
                            <p>{item.description}</p>

                             
                              <ul>
                                <li><strong>Importe máximo:</strong> {item.amount}</li>
                                <li><strong>Segmentos:</strong> {item.segments}</li>
                              </ul>
                            
                            
                          </div>
                        </div>

                        ))}

                    </div>
                </div>
            </div>
      </div>
      {/* service end */}
            
        </div>        
      </div>

      {/* about */}
      <div className="container mil-content-frame mil-appearance mil-p-0-90">
          <div className="row justify-content-between">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">{Content.about2.subtitle}</span>
                  <h2 className="mil-appearance mil-mb-30">{Content.about2.title}</h2>
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