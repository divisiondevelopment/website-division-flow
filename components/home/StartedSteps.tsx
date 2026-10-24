import Image from "next/image";
import { startedStepsData } from "@/data/startedSteps";

export default function StartedSteps() {
  return (
    <>
      {startedStepsData.map((step) => (
        <div key={step.id} className="col-lg-4 col-md-6">
          <div
            className="h-100"
            data-aos={step.aos}
            data-aos-duration={900}
            data-aos-delay={step.delay}
          >
            <div id={`step-${step.id}`} className="choose-block h-100">
              <div className="choose-icon">
                <Image
                  src={step.icon}
                  alt={step.alt}
                  width={50}
                  height={50}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <h3 className="title">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
