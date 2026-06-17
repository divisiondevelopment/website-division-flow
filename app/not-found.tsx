import Image from "next/image";
import Link from "next/link";

const notFoundContent = {
  code: "404",
  message: "Ops! A página que você está procurando não existe.",
  ctaText: "Voltar para o início",
  ctaHref: "/",
  arrowIcon: "/assets/images/icon/arrow.svg",
  arrowAlt: "Ícone de seta",
};

const NotFound = () => {
  return (
    <section className="error-sec">
      <div className="carousel-container">
        <div className="error-content">
          <h1 className="title">{notFoundContent.code}</h1>
          <p>{notFoundContent.message}</p>

          <Link href={notFoundContent.ctaHref} className="btn-style1">
            {notFoundContent.ctaText}
            <span>
              <Image
                src={notFoundContent.arrowIcon}
                alt={notFoundContent.arrowAlt}
                width={14}
                height={14}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
