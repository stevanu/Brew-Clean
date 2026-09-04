import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  const menu = [
    { label: "Home", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Harga", href: "#pricing" },
    { label: "Galeri", href: "#gallery" },
    { label: "Kontak", href: "#contact" },
  ];

  const services = [
    { label: "Deep Cleaning", href: "#services" },
    { label: "Fast Cleaning", href: "#services" },
    { label: "Hard Cleaning", href: "#services" },
    { label: "Kids Shoes Clean", href: "#services" },
    { label: "Express Treatment", href: "#services" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      type: "fontawesome",
      icon: faInstagram,
      href: "https://instagram.com/brewclean.shoes",
    },
    {
      name: "TikTok",
      type: "fontawesome",
      icon: faTiktok,
      href: "https://tiktok.com/@brewclean.shoes",
    },
    {
      name: "Email",
      type: "lucide",
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=brewcleanshoes29@gmail.com",
    },
  ];

  return (
    <footer className="bg-blue-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2 lg:py-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block">
              <div>
                <div className="flex items-baseline pb-5">
                  <span className="text-2xl font-black tracking-tight text-white">
                    Brewclean
                  </span>
                  <span className="ml-0.5 text-2xl font-bold tracking-tight text-blue-400">
                    .shoes
                  </span>
                </div>
                <p className="mt-1 text-[10px] font-semibold tracking-widest text-white">
                  CLEAN SHOES, CLEAN STEP
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-400">
              Brewclean.shoes bergerak di bidang jasa treatment sepatu dengan
              hasil bersih maksimal menggunakan produk dan peralatan premium
              berkualitas tinggi.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const LucideIcon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Kunjungi ${social.name} Brewclean.shoes`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    {social.type === "fontawesome" ? (
                      <FontAwesomeIcon icon={social.icon} className="text-lg" />
                    ) : (
                      <LucideIcon size={18} strokeWidth={1.8} />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-5">
              Menu
            </h3>
            <ul className="mt-4 space-y-2">
              {menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-white transition-colors hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white pb-5">
              Layanan
            </h3>
            <ul className="mt-2 space-y-2">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-slate-400 transition-colors hover:text-blue-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-5">
              Kontak
            </h3>

            <ul className="mt-4 space-y-3 text-xs text-white">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-blue-400" />
                <span className="leading-relaxed">
                  Jl. Puskesmas RT 02/011, Pondok Aren, Tangerang Selatan
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock size={16} className="shrink-0 text-blue-400" />
                <span>09:00 - 21:00 WIB</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-blue-400" />
                <a
                  href="https://wa.me/+6285117625687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-400"
                >
                  0851-1762-5687 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-4 text-center">
          <p className="text-xs text-slate-400">
            © {currentYear} Brewclean.shoes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
