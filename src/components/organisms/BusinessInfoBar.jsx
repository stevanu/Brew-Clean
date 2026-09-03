import { Clock3, Map, MapPin, Truck } from "lucide-react";

import InfoItem from "../fragments/item/InfoItem";

function BusinessInfoBar() {
  const information = [
    {
      icon: MapPin,
      title: "Alamat Usaha",
      content: (
        <>
          <p>Jl.puskesmas rt 02/011</p>
          <p>pondok aren</p>
          <p>tangerang selatan</p>
        </>
      ),
    },
    {
      icon: Clock3,
      title: "Jam Operasional",
      content: (
        <>
          <p>09:00 - 21:00 WIB</p>
          <p>Setiap Hari</p>
        </>
      ),
    },
    {
      icon: Map,
      title: "Area Pelayanan",
      content: <p>Tangerang Selatan</p>,
    },
    {
      icon: Truck,
      title: "Layanan Antar Jemput",
      content: (
        <>
          <p>Pick up &amp; Delivery gratis jika</p>
          <p>jarak di bawah 3 KM dari toko</p>
        </>
      ),
    },
  ];

  return (
    <section
      className="relative z-20 -mt-px px-4 sm:px-6 md:px-8 lg:px-0"
      aria-label="Informasi Brewclean.shoes"
    >
      <div className="site-container relative -translate-y-7.5 sm:-translate-y-8.75 md:-translate-y-10 lg:-translate-y-12.5">
        <div className="grid overflow-hidden rounded-[15px] border border-border-light bg-white shadow-soft md:grid-cols-2 xl:grid-cols-4">
          {information.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex min-h-26.25 items-center px-5 py-4 sm:px-6 sm:py-5 md:px-6 md:py-5 xl:px-7 
                ${index !== information.length - 1 ? "border-b border-border-light" : ""} 
                md:border-b-0 
                ${index % 2 === 0 ? "md:border-r md:border-border-light" : ""} 
                ${index !== information.length - 1 ? "xl:border-r xl:border-border-light" : ""} 
                xl:border-b-0`}
            >
              <InfoItem
                icon={item.icon}
                title={item.title}
                className="scale-[0.9] origin-left sm:scale-95 md:scale-95 lg:scale-100"
              >
                {item.content}
              </InfoItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessInfoBar;
