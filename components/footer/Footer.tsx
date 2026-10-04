import Image from "next/image";
import DataLink from "@/components/common/DataLink";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import { footerColumns, socialLinks } from "@/data/footer";

const iconImgStyle = { width: "auto", height: "auto" } as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-style1">
        <div className="widget-area">
          <div className="carousel-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div
                  className="footer-widget about-widget"
                  data-aos="fade-right"
                  data-aos-duration={900}
                  data-aos-delay={100}
                >
                  <div className="footer-logo">
                    <Image
                      src="/assets/images/logo.png"
                      alt="Division Flow"
                      width={600}
                      height={465}
                      className="site-logo site-logo--footer"
                    />
                  </div>

                  <p>
                    Plataforma SaaS desenvolvida para simplificar seu fluxo de
                    trabalho e automatizar tarefas do dia a dia.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="widget-info">
                  <div className="row">
                    {footerColumns.map((column) => (
                      <div
                        key={column.title}
                        className="col-lg-3 col-md-3 col-sm-4"
                      >
                        <div
                          className="footer-widget link-widgets"
                          data-aos="fade-right"
                          data-aos-duration={900}
                          data-aos-delay={column.delay}
                        >
                          <h2 className="link-title">{column.title}</h2>
                          <ul className="footer-links">
                            {column.links.map((link) => (
                              <li key={link.label}>
                                <DataLink href={link.href} title="">
                                  {link.label}
                                </DataLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-content">
          <span className="footer-brand-bg" aria-hidden="true">
            DIVISION FLOW
          </span>
        </div>

        <div className="footer-box">
          <div className="carousel-container">
            <div
              className="footer-bottom"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={200}
              data-aos-anchor-placement="center-bottom"
            >
              <p>Division Flow, {currentYear} © Todos os direitos reservados</p>

              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
