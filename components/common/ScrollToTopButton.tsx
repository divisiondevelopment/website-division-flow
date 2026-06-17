"use client";

import Image from "next/image";

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrol-btn-box">
      <span>Voltar ao topo</span>
      <button id="scrollTopBtn" type="button" onClick={handleScrollToTop}>
        <Image
          src="/assets/images/icon/check1-3.svg"
          alt="Scroll to top arrow icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
