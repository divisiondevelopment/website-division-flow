import Image from "next/image";
import Link from "next/link";
import { serviceCards } from "@/data/service";

export default function Feature2() {
  return (
    <>
      {serviceCards.map((service) => (
        <div key={service.id} className="col-lg-4 col-md-6">
          <div
            data-aos={service.aos}
            data-aos-duration={900}
            data-aos-delay={service.delay}
          >
            <div className="feature-block2">
              <div className="feature-icon">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <h3 className="title">
                <Link href={service.href} title={service.title}>
                  {service.title}
                </Link>
              </h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
