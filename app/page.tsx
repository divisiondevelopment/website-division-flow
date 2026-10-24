import type { Metadata } from "next";
import { SITE_NAME, SITE_TITLE_DEFAULT } from "@/data/site";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MobileMenu from "@/components/header/MobileMenu";
import CallToAction from "@/components/common/CallToAction";
import AnimImage from "@/components/common/AnimImage";
import Hero from "@/components/home/Hero";
import StartedSteps from "@/components/home/StartedSteps";
import Solution from "@/components/home/Solution";
import Solution2 from "@/components/home/Solution2";
import Pricing from "@/components/pricing/Pricing";
import ContactSection from "@/components/common/ContactSection";

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE_DEFAULT,
  },
  description: `Bem-vindo ao ${SITE_NAME}. CRM completo para equipes de vendas de alta performance.`,
};

export default function Page() {
  return (
    <>
      {/* Header start */}
      <Header />
      {/* Header-end */}

      {/* MobileMenu start */}
      <MobileMenu />

      <section className="main-sec main-sec--home space-md-bottom">
        <AnimImage clip />

        {/* hero-sec */}
        <Hero />
        {/* End hero-sec */}
      </section>

      {/* choose-us-sec */}
      <section id="how-it-works" className="choose-us-sec space">
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

      {/* pricing-sec */}
      <section id="pricing" className="pricing-sec space">
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

      {/* contct-sec */}
      <section className="contct-sec space" id="Contact">
        <div className="carousel-container">
          <div className="row">
            <ContactSection />
          </div>
        </div>
      </section>
      {/* End contct-sec */}

      {/* CallToAction area start */}
      <CallToAction />
      {/* CallToAction area start */}

      {/* Footer area start */}
      <Footer />
      {/* Footer area start */}
    </>
  );
}
