import Image from "next/image";
import DataLink from "@/components/common/DataLink";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <div className="col-lg-6">
        <div className="contact-content">
          <div className="sec-title">
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={400}
            >
              Estamos Aqui para Ajudar
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={500}
            >
              Dúvidas sobre o produto, planos ou como começar? Nossa equipe responde rápido.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div
                className="contact-block"
                data-aos="fade-up"
                data-aos-duration={900}
                data-aos-delay={300}
              >
                <p className="help-line">
                  <Image
                    src="/assets/images/icon/contact1-1.svg"
                    alt="Ícone de contato"
                    width={30}
                    height={30}
                  />
                  Precisa de Ajuda?
                </p>
                <DataLink
                  href="mailto:contato@divisiondev.com.br"
                  title=""
                  className="nmbr"
                >
                  contato@divisiondev.com.br
                </DataLink>
                <DataLink
                  href="tel:+18003308885544"
                  title=""
                  className="nmbr mb-0"
                >
                  +55 51 90203-0290
                </DataLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact number end  */}

      <div className="col-lg-6">
        <ContactForm />
      </div>
    </>
  );
}