import { useState } from "react";
import { MapPin, Navigation, Copy, Check } from "lucide-react";
import Badge from "../elements/Badge";
import Heading from "../elements/Heading";

const ADDRESS_TEXT = "Jl. Puskesmas RT 02/011 Pondok Aren Tangerang Selatan";
const GOOGLE_MAPS_NAV_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_TEXT,
)}`;

const CLEAN_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0143890356073!2d106.7118323!3d-6.2618529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fa802fa9c6c1%3A0xb3a8bb8ff310d5e1!2sJl.%20Puskesmas%2C%20Pondok%20Aren%2C%20Tangerang%20Selatan!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ADDRESS_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="bg-blue-50 py-10 sm:py-16 lg:py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 lg:mb-12">
          <Badge>Lokasi Kami</Badge>
          <Heading
            as="h2"
            size="section"
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Temukan Lokasi Brewclean.shoes
          </Heading>
          <p className="mx-auto mt-2 text-center max-w-xl text-xs sm:text-sm text-slate-500">
            Kunjungi workshop kami untuk perawatan sepatu terbaik Anda.
          </p>
        </div>

        {/* Outer Container Wrapper */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 shadow-lg sm:shadow-xl">
          {/* Container Iframe Peta */}
          <div className="relative h-95 sm:h-105 lg:h-120 w-full">
            <iframe
              title="Lokasi Brewclean.shoes"
              src={CLEAN_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0 contrast-[1.02] saturate-[0.85]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Soft Shadow Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-slate-900/5" />
          </div>

          {/* Floating Card: Mepet Pojok Kiri Atas */}
          <div className="absolute left-0 top-0 z-10 w-[calc(100%-16px)] max-w-70 xs:max-w-[320px] sm:max-w-xs md:max-w-sm">
            <div className="rounded-br-2xl border-b border-r border-white/80 bg-white/95 p-3.5 sm:p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-start gap-2.5 sm:gap-4">
                {/* Icon MapPin */}
                <div className="flex h-8 w-8 sm:h-10 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 truncate">
                    Brewclean.shoes
                  </h3>

                  <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-slate-600 line-clamp-2 sm:line-clamp-none">
                    {ADDRESS_TEXT}
                  </p>

                  {/* Tombol Aksi */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-1.5 sm:gap-2 border-t border-slate-100 pt-2.5 sm:pt-3.5">
                    <a
                      href={GOOGLE_MAPS_NAV_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
                    >
                      <Navigation className="text-blue-100 h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />
                      <span className="text-white">Arah</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 active:scale-[0.98]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
