import Image from "next/image";
import { feature1Data } from "@/data/feature1";

const iconImgStyle = { width: "auto", height: "auto" } as const;

export default function Feature1() {
  const { leftImages, centerImage, content, featuresList, rightImages } =
    feature1Data;

  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="row mb-0">
            {leftImages.map((img) => (
              <div key={img.id} className="col-lg-12 col-md-6 col-sm-6">
                <div
                  className="feature-img"
                  data-aos="fade-right"
                  data-aos-duration={900}
                  data-aos-delay={200}
                >
                  <Image
                    src={img.light}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="light"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Image
                    src={img.dark}
                    alt={`${img.alt} dark mode`}
                    width={img.width}
                    height={img.height}
                    className="dark"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="feature-card">
            <div
              className="feature-img-one"
              data-aos="zoom-in"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              <Image
                src={centerImage.light}
                alt={centerImage.alt}
                width={centerImage.width}
                height={centerImage.height}
                className="light"
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                src={centerImage.dark}
                alt={`${centerImage.alt} dark mode`}
                width={centerImage.width}
                height={centerImage.height}
                className="dark"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div
              className="feature-info"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-delay={200}
            >
              {content.map((item, index) => (
                <div
                  key={item.id}
                  className={`feature-content ${
                    index === content.length - 1 ? "mb-0" : ""
                  }`}
                >
                  <h2 className="title">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              ))}
              <ul className="feature-list">
                {featuresList.map((item) => (
                  <li key={item.id}>
                    <Image
                      src={item.icon}
                      alt="check icon"
                      width={20}
                      height={20}
                      style={iconImgStyle}
                    />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="row mb-0">
            {rightImages.map((img) => (
              <div key={img.id} className="col-lg-12 col-md-6 col-sm-6">
                <div
                  className="feature-img"
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={200}
                >
                  <Image
                    src={img.light}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="light"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Image
                    src={img.dark}
                    alt={`${img.alt} dark mode`}
                    width={img.width}
                    height={img.height}
                    className="dark"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
