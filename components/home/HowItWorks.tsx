import Image from "next/image";
import DataLink from "@/components/common/DataLink";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { callToActionContent } from "@/data/callToAction";
import { howItWorksData } from "@/data/howItWorks";

export default function HowItWorks() {
  const { buttonText, buttonHref } = callToActionContent;

  return (
    <div
      className="mx-auto max-w-[1150px]"
      data-aos="fade-up"
      data-aos-duration={900}
      data-aos-delay={300}
    >
      {/* Top banner card: its own rounded corners + overflow-hidden (to clip
          the dots layer to its own rounded shape). Higher z-index than the
          strip card below, so it reads as the main card with the strip
          tucked in behind it where they overlap. */}
      <div
        className="relative z-20 overflow-hidden rounded-t-[40px] rounded-b-[20px]"
        style={{
          background:
            "linear-gradient(135deg, var(--color-violeta), var(--primary))",
        }}
      >
        {/* Dots concentrated on the right half (future image area) via mask,
            instead of physically shrinking the component — legacy site CSS
            (public/assets/css/style.css) sets `p`/`h1..h6` color unlayered,
            which always outranks Tailwind's layered utility classes
            regardless of specificity, so text colors below are set inline. */}
        <div
          className="absolute inset-0 z-0"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 58%, black 59%, black 100%)",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 58%, black 59%, black 100%)",
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <DottedGlowBackground
            gap={14}
            radius={1.5}
            opacity={0.5}
            color="rgba(255,255,255,0.35)"
            glowColor="rgba(255,255,255,0.8)"
          />
        </div>

        {/* Decorative light streaks behind the photo: subtle diagonal
            white-to-transparent bands, z-index between the dots background
            (z-0) and the content/photo (z-10). Hidden on mobile where the
            photo isn't bled to the edge, so they'd just look like stray
            marks over plain gradient. */}
        <div
          className="pointer-events-none absolute inset-0 z-[3] hidden overflow-hidden md:block"
          aria-hidden="true"
        >
          <div
            className="absolute"
            style={{
              left: "58%",
              top: "-25%",
              width: "130px",
              height: "150%",
              background:
                "linear-gradient(to top, rgba(255,255,255,0.28), transparent 75%)",
              transform: "rotate(15deg)",
            }}
          />
          <div
            className="absolute"
            style={{
              left: "86%",
              top: "-30%",
              width: "155px",
              height: "155%",
              background:
                "linear-gradient(to top, rgba(255,255,255,0.18), transparent 70%)",
              transform: "rotate(15deg)",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-6 px-6 py-14 md:grid-cols-2 md:gap-10 md:px-14 md:py-20 md:min-h-[420px]">
          <div>
            <h2
              className="title mb-4 text-4xl font-bold leading-tight md:text-5xl"
              style={{ color: "#fff" }}
            >
              Do primeiro contato ao pós-venda, sem perder o fio
            </h2>
            <p
              className="mb-[39px] text-lg md:text-xl"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Contatos, propostas e contratos num só lugar. O
              relacionamento continua depois que o cliente fecha.
            </p>
            <DataLink
              href={buttonHref}
              className="inline-flex h-[38px] items-center justify-center whitespace-nowrap rounded-[var(--radius-md)] bg-white px-[18px] text-[15px] font-semibold text-[#1B0051] transition-colors hover:bg-white/90"
            >
              {buttonText}
            </DataLink>
          </div>

          {/* Mobile: a contained, rounded box in normal flow. Desktop
              (md+): the image breaks out of this grid cell's own padding
              (absolute positioning offsets from a positioned ancestor's
              padding box ignore that ancestor's own padding) and bleeds
              all the way to the banner's real top/bottom/right edges,
              clipped cleanly by the banner's own overflow-hidden + rounded
              corners. */}
          <div
            className="relative max-md:mt-2 aspect-[4/3] w-full overflow-hidden rounded-3xl md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[38%] md:rounded-none"
            aria-hidden="true"
          >
            <Image
              src="/assets/images/people/people.png"
              alt=""
              fill
              className="object-cover"
              style={{ objectPosition: "center 0%" }}
              sizes="(max-width: 768px) 90vw, 46vw"
            />
          </div>
        </div>
      </div>

      {/* Icon strip: a visually independent card, its own rounded corners
          (not inherited from a shared outer container), overlapping the
          banner above by a small negative margin so it reads as a second
          card tucked slightly behind the first (lower z-index than the
          banner, so the banner's bottom edge covers the overlap). */}
      <div
        className="relative z-0 -mt-4 grid grid-cols-1 gap-6 rounded-[28px] px-6 py-8 md:grid-cols-3 md:gap-8 md:px-14 md:py-10"
        style={{
          backgroundColor: "#F5F5F7",
          boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
        }}
      >
        {howItWorksData.map((item, index) => (
          <div
            key={item.id}
            className={
              index > 0
                ? "flex items-center gap-4 md:border-l md:border-[rgba(0,0,0,0.08)] md:px-6"
                : "flex items-center gap-4 md:px-6"
            }
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
              aria-hidden="true"
            >
              <Image
                src={item.icon}
                alt=""
                width={18}
                height={18}
                style={{ width: "auto", height: "18px" }}
              />
            </div>
            <p
              className="m-0 text-sm md:text-base"
              style={{ color: "var(--body-color)" }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
