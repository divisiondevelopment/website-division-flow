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
                <h3 className="help-line">
                  <Image
                    src="/assets/images/icon/contact1-1.svg"
                    alt="Ícone de contato"
                    width={30}
                    height={30}
                  />
                  Precisa de Ajuda?
                </h3>
                <DataLink
                  href="mailto:divisiondevservices@gmail.com"
                  title=""
                  className="nmbr"
                >
                  divisiondevservices@gmail.com
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