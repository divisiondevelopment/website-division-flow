import Image from "next/image";
import DataLink from "@/components/common/DataLink";
import { callToActionContent } from "@/data/callToAction";

export default function CallToAction() {
  const { subTitle, title, description, buttonText, buttonHref, arrowIcon } =
    callToActionContent;

  return (
    <>
      <section className="cta-banner">
        <div className="carousel-container">
          <div className="cta-info space-md">
            <div
              className="cta-content"
              data-aos="zoom-in"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              <div className="sec-title">
                <span className="sub-title">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{description}</p>
                <DataLink href={buttonHref} className="btn-style1">
                  {buttonText}
                  <span>
                    <Image
                      src={arrowIcon.src}
                      alt={arrowIcon.alt}
                      width={arrowIcon.width}
                      height={arrowIcon.height}
                    />
                  </span>
                </DataLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
