import Badge from "../elements/Badge";
import AboutInfo from "../fragments/about/AboutInfo.jsx";
import AboutImage from "../fragments/about/AboutImage.jsx";
import AdvantageListItem from "../fragments/about/AdvantageListItem.jsx";
import ServiceListItem from "../fragments/about/ServiceListItem.jsx";

import { advantages } from "../../data/advantages.jsx";
import { services } from "../../data/services.jsx";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-8 sm:py-10 lg:py-1">
      <div className="site-container grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr_1.05fr_1.85fr] lg:items-stretch lg:gap-0">
        {/* TENTANG KAMI */}
        <AboutInfo />

        {/* FOTO SEPATU */}
        <AboutImage />

        {/* KEUNGGULAN KAMI */}
        <div
          id="services"
          className="flex h-full flex-col rounded-[20px] bg-light-blue px-12 py-4.5 sm:px-4 sm:py-6"
        >
          <Badge className="mb-6">Keunggulan Kami</Badge>

          <ul className="mt-2 flex-1 space-y-1 divide-y divide-border-light">
            {advantages.map((item, index) => (
              <AdvantageListItem
                key={index}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </ul>
        </div>

        {/* LAYANAN & HARGA */}
        <div
          id="pricing"
          className="flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-soft lg:ml-3 xl:ml-4"
        >
          <div className="px-6 pt-5 sm:px-7 sm:pt-6">
            <Badge>Layanan & Harga</Badge>
          </div>

          <div className="mt-3 flex-1 divide-y divide-border-light">
            {services.map((service) => (
              <ServiceListItem
                key={service.name}
                icon={service.icon}
                name={service.name}
                duration={service.duration}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
