import type { Metadata } from "next";
import Image from "next/image";
import { SITE_NAME, SITE_TITLE_DEFAULT } from "@/data/site";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/onepage/Header";
import AnimImage from "@/components/common/AnimImage";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import Feature1 from "@/components/home/Feature1";
import Feature2 from "@/components/home/Feature2";
import StartedSteps from "@/components/home/StartedSteps";
import Solution from "@/components/home/Solution";
import Solution2 from "@/components/home/Solution2";
import Pricing from "@/components/pricing/Pricing";
import Testimonial2 from "@/components/home/Testimonial2";
import ContactSection from "@/components/common/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE_DEFAULT,
  },
  description: `Welcome to ${SITE_NAME}. CRM completo para equipes de vendas de alta performance.`,
};

const iconImgStyle = { width: "auto", height: "auto" } as const;

export default function Page() {
  return (
    <>
      {/* Header start */}
      <Header />
      {/* Header-end */}

      <section id="Home" className="main-sec space-md-bottom">
        <AnimImage />

        {/* hero-sec */}
        <Hero />
        {/* End hero-sec */}
      </section>

      {/* brand-sec */}
      <section className="brand-sec">
        <div className="container-fluid">
          <h2
            className="brand-title"
            data-aos="fade-down"
            data-aos-duration={900}
            data-aos-delay={200}
          >
            Confiado por mais de 10.000 empresas no Brasil e no mundo
          </h2>
          <div
            className="swiper brand"
            data-aos="fade-up"
            data-aos-duration={900}
          >
            <Testimonial />
          </div>
        </div>
      </section>
      {/* End brand-sec */}

      {/* feature-sec */}
      <section className="feature-sec space">
        <div className="carousel-container">
          <Feature1 />
        </div>
      </section>
      {/* End feature-sec */}

      {/* feature-sec2 */}
      <section className="feature-sec2 space" id="Features">
        <div className="carousel-container">
          <div className="sec-title white">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              Recursos do CRM
            </span>
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              Recursos Inteligentes. Resultados Reais.
            </h2>
          </div>
          <div className="row">
            <Feature2 />
          </div>
        </div>
      </section>
      {/* End feature-sec2 */}

      {/* intigration-sec */}
      <section className="intigration-sec space">
        <div className="carousel-container">
          <div className="sec-title">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              Integrações e Ferramentas
            </span>
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              Integre com as Principais Ferramentas
            </h2>
            <p data-aos="fade-up" data-aos-duration={700} data-aos-delay={300}>
              Conecte seu CRM às ferramentas que sua equipe já usa — de WhatsApp
              e e-mail a ERPs e softwares de analytics. Nosso sistema foi
              projetado para integrar tudo sem esforço.
            </p>
            <a
              href="#"
              className="btn-style1 v4"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              Ver Todas as Integrações
              <span>
                <Image
                  src="/assets/images/icon/arrow.svg"
                  alt="Ícone de seta"
                  width={14}
                  height={14}
                  style={iconImgStyle}
                />
              </span>
            </a>
          </div>
          <div
            className="intelligent-img"
            data-aos="zoom-in"
            data-aos-duration={900}
            data-aos-delay={300}
          >
            <Image
              src="/assets/images/event/int1-1.svg"
              alt="Ilustração de integrações e ferramentas do CRM"
              width={1200}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
      {/* End intigration-sec */}

      {/* choose-us-sec */}
      <section className="choose-us-sec">
        <div className="carousel-container">
          <div className="choose-info">
            <div className="sec-title white">
              <h2
                className="title"
                data-aos="fade-up"
                data-aos-duration={900}
                data-aos-delay={400}
              >
                Do primeiro contato ao contrato assinado, sem perder o fio
              </h2>
            </div>
            <div className="row gy-4">
              <StartedSteps />
            </div>
          </div>
        </div>
      </section>
      {/* End choose-us-sec */}

      {/* feature-sec3 */}
      <section className="feature-sec3 space">
        <div className="carousel-container">
          <div className="row">
            <Solution />
          </div>
        </div>
      </section>
      {/* End feature-sec3 */}

      {/* feature-sec4 */}
      <section className="feature-sec4 space-bottom">
        <div className="carousel-container">
          <div className="row">
            <Solution2 />
          </div>
        </div>
      </section>
      {/* End feature-sec4 */}

      {/* pricing-sec */}
      <section id="Pricing" className="pricing-sec space-top">
        <div className="carousel-container">
          <div className="sec-title white">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              Escolha um plano
            </span>
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              Planos Flexíveis para Cada Etapa do Crescimento
            </h2>
            <p data-aos="fade-up" data-aos-duration={700} data-aos-delay={300}>
              Seja no início ou escalando rapidamente, temos um plano de CRM
              que se encaixa nas suas necessidades. Pacotes transparentes e
              flexíveis para cada momento do seu negócio.
            </p>
          </div>
          <Pricing />
        </div>
      </section>
      {/* End pricing-sec */}

      {/* testimonial-sec */}
      <section id="Testimonials" className="testimonial-sec space-top">
        <div className="container-fluid">
          <div className="sec-title">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              Depoimentos
            </span>
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              Histórias de Sucesso dos Nossos Clientes
            </h2>
            <p data-aos="fade-up" data-aos-duration={700} data-aos-delay={300}>
              Confiado por mais de 10.000 empresas no Brasil e no mundo
            </p>
          </div>
          <div
            className="testi"
            data-aos="fade-up"
            data-aos-duration={900}
            data-aos-delay={400}
          >
            <Testimonial2 />
          </div>
        </div>
      </section>
      {/* End testimonial-sec */}

      {/* contct-sec */}
      <section className="contct-sec space" id="Contact">
        <div className="carousel-container">
          <div className="row">
            <ContactSection />
          </div>
        </div>
      </section>
      {/* End contct-sec */}

      {/* Footer area start */}
      <Footer />
      {/* Footer area start */}
    </>
  );
}
