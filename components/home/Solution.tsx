import Image from "next/image";
import { homeSolutionData } from "@/data/solution";

export default function Solution() {
  const { content, images } = homeSolutionData;

  return (
    <>
      <div className="col-lg-6">
        <div className="feature-content3">
          <div className="sec-title">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              {content.subtitle}
            </span>
            <h2
              className="title"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={300}
            >
              {content.title}
            </h2>
            <p data-aos="fade-up" data-aos-duration={700} data-aos-delay={300}>
              {content.description}
            </p>
          </div>
          <a
            href={content.button.link}
            className="btn-style1"
            data-aos="fade-up"
            data-aos-duration={900}
            data-aos-delay={400}
          >
            {content.button.text}
            <span>
              <Image
                src={content.button.icon}
                alt="Arrow Icon"
                width={14}
                height={14}
              />
            </span>
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="feature-img3"
          data-aos="zoom-in"
          data-aos-duration={900}
          data-aos-delay={300}
        >
          <Image
            src={images.mainLight}
            alt="Feature Image 1 Light"
            width={600}
            height={600}
            className="one light"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src={images.mainDark}
            alt="Feature Image 1 Dark"
            width={600}
            height={600}
            className="one dark"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src={images.secondary}
            alt="Feature Image 2"
            width={300}
            height={300}
            className="two"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
