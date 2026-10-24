import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";
import { faqItems } from "@/data/faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import FaqAccordion from "@/components/common/FaqAccordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: `Tire suas dúvidas sobre planos, cobrança, cancelamento e suporte do ${SITE_NAME}.`,
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="mb-5" style={{ paddingTop: "180px" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <h1>Perguntas Frequentes</h1>
                <p>
                  Respostas rápidas sobre planos, cobrança, cancelamento e
                  suporte. Não encontrou o que procurava? Fale com a gente
                  pelo e-mail contato@divisiondev.com.br.
                </p>

                <div className="mt-5">
                  <FaqAccordion items={faqItems} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
