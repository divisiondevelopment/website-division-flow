"use client";

import Image from "next/image";
import DataLink from "@/components/common/DataLink";
import { useCallback, useState } from "react";
import {
  type BillingPeriod,
  type PricingPlan,
  pricingAssets,
  pricingPlans,
} from "@/data/pricing";

const AOS_DURATION = 900;
const PRICING_PANEL_ID = "pricing-plans-panel";
const iconImgStyle = { width: "auto", height: "auto" } as const;

function PlanTitle({ plan }: { plan: PricingPlan }) {
  if (plan.titleTag === "h2") {
    return <h2 className="title">{plan.title}</h2>;
  }
  return <h3 className="title">{plan.title}</h3>;
}

function PlanPrice({
  plan,
  billing,
}: {
  plan: PricingPlan;
  billing: BillingPeriod;
}) {
  const p = billing === "monthly" ? plan.monthly : plan.yearly;
  const inner = (
    <>
      {p.amount}
      <span>{p.periodNote}</span>
    </>
  );
  if (plan.priceTag === "h4") {
    return <h4 className="price">{inner}</h4>;
  }
  return <h3 className="price">{inner}</h3>;
}

function PricingCard({
  plan,
  billing,
}: {
  plan: PricingPlan;
  billing: BillingPeriod;
}) {
  const cardClass = plan.cardVariant
    ? `pricing-card ${plan.cardVariant} h-100`
    : "pricing-card h-100";

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className={cardClass}
        data-aos="fade-up"
        data-aos-duration={AOS_DURATION}
        data-aos-delay={plan.aosDelay}
      >
        <div className="price-info">
          <div className="price-icon">
            <Image
              src={plan.icon}
              alt={plan.iconAlt}
              width={64}
              height={64}
              style={iconImgStyle}
            />
          </div>
          <PlanTitle plan={plan} />
          <p>{plan.description}</p>
          <PlanPrice plan={plan} billing={billing} />
          <DataLink href={plan.ctaHref} className="btn-style1">
            {plan.ctaLabel}
            <span>
              <Image
                src={pricingAssets.arrowIcon}
                alt={pricingAssets.arrowAlt}
                width={14}
                height={14}
                style={iconImgStyle}
              />
            </span>
          </DataLink>
        </div>
        <ul className="price-list">
          {plan.features.map((feature) => (
            <li key={feature}>
              <Image
                src={pricingAssets.checkIcon}
                alt={pricingAssets.checkAlt}
                width={18}
                height={18}
                style={iconImgStyle}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  const onTabClick = useCallback((id: BillingPeriod) => {
    setBilling(id);
  }, []);

  return (
    <>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id={PRICING_PANEL_ID}
          role="tabpanel"
          aria-labelledby={`pricing-tab-${billing}`}
        >
          <div className="row justify-content-center gy-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
