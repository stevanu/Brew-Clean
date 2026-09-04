import { BadgeCheck, ShieldCheck, ShoppingBag, Truck } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import bgHero from "../../assets/images/bg/bg-home1.webp";

function HeroSection() {
  const features = [
    {
      icon: BadgeCheck,
      title: "TREATMENT",
      subtitle: "PREMIUM",
    },
    {
      icon: ShoppingBag,
      title: "AMAN UNTUK",
      subtitle: "SEMUA BAHAN",
    },
    {
      icon: Truck,
      title: "PICK UP & DELIVERY",
      subtitle: "GRATIS*",
    },
    {
      icon: ShieldCheck,
      title: "GARANSI",
      subtitle: "KEPUASAN",
    },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* HERO BACKGROUND */}

      <img
        src={bgHero}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto grid min-h-107.5 max-w-340 grid-cols-1 px-6 sm:px-8 lg:min-h-125 lg:grid-cols-2">
        {/* CONTENT LEFT */}
        <div className="relative z-10 flex flex-col justify-center py-12 lg:py-8 lg:pr-8">
          {/* BADGE */}
          <span className="w-fit rounded-full bg-[#d1e1f9] px-4 py-1.5 text-[11px] font-semibold text-[#0a2d69]">
            Cuci Sepatu Profesional
          </span>

          <h1
            id="hero-title"
            className="mt-4 text-3xl font-extrabold leading-[1.1] text-[#0b1a33] sm:text-4xl lg:text-[50px]"
          >
            <span className="text-[#1a4f8b]">Jasa Cuci Sepatu</span>

            <br />

            <span>Tangerang Selatan</span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-4 max-w-135 text-[13px] font-normal leading-[1.8] text-[#4a5a72] lg:text-[14px]">
            <strong className="font-bold text-[#1a4f8b]">
              Brewclean.shoes
            </strong>{" "}
            adalah jasa cuci dan perawatan sepatu di Pondok Aren, Tangerang
            Selatan. Kami menangani berbagai jenis bahan sepatu dan noda
            membandel dengan treatment yang disesuaikan dengan kondisi sepatu.
          </p>

          {/* FEATURES */}
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:gap-y-3 lg:mt-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`flex items-center gap-2.5 pr-2 sm:pr-4 ${
                    index !== features.length - 1
                      ? "sm:mr-4 sm:border-r sm:border-[#d0d8e3]"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <Icon
                    size={18}
                    className="shrink-0 text-[#1a4f8b]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  {/* Feature Text */}
                  <div className="min-w-0">
                    <span className="block truncate text-[9px] font-bold leading-tight tracking-wide text-[#0b1a33] sm:text-[10px]">
                      {feature.title}
                    </span>

                    <span className="block truncate text-[9px] font-medium leading-tight text-[#1a4f8b] sm:text-[10px]">
                      {feature.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center lg:mt-6">
            {/* Primary CTA */}
            <a
              href="#services"
              className="inline-flex h-11 w-full items-center justify-center rounded-[5px] bg-[#14549d] px-6 text-[12px] font-semibold text-white! transition-colors duration-150 hover:bg-[#104681] sm:w-auto"
            >
              Lihat Layanan Kami
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+6285117625687"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan layanan cuci sepatu melalui WhatsApp"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[5px] border border-[#1a4f8b] bg-white px-6 text-[12px] font-semibold leading-none text-[#1a4f8b] transition-colors duration-150 hover:bg-[#eef3fa] sm:w-auto"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                aria-hidden="true"
                className="text-2xl text-blue-900"
              />

              <span>Pesan via WhatsApp</span>
            </a>
          </div>

          {/* DELIVERY NOTE */}
          <p className="pb-7 pt-2 text-[10px] font-normal text-[#718096]">
            *Pengiriman maksimal 15 km dari Kota Tangerang Selatan
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
