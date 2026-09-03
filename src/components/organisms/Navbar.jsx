import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Keunggulan", href: "#services" },
  { label: "Layanan dan Harga", href: "#pricing" },
  { label: "Galeri", href: "#gallery" },
  { label: "Lokasi", href: "#location" },
];

const whatsappUrl = "https://wa.me/+6285117625687";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    setActiveNav(href);
    closeMenu();

    const target = document.querySelector(href);

    if (!target) return;

    const navbarHeight = 70;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#e5e9f0] shadow-md py-0"
            : "border-b border-[#e5e9f0] shadow-none py-1"
        }`}
      >
        <div className="mx-auto flex h-17.5 max-w-350 items-center justify-between px-6 sm:px-8">
          {/* LOGO */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "#home")}
            aria-label="Brewclean.shoes - Home"
            className="flex shrink-0 items-center gap-2.5"
          >
            <img
              src="/images/logo/brew-logo-nav.jpg"
              alt="Brewclean.shoes Logo"
              className="h-15 w-15 rounded-full object-cover"
            />

            <span className="text-[22px] font-extrabold leading-none tracking-[-0.06em] text-[#0b1a33]">
              Brewclean
              <span className="ml-0.5 font-medium text-[#1a4f8b]">.shoes</span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden h-full items-center xl:flex"
          >
            <ul className="flex h-full items-center gap-8">
              {navigation.map((item) => {
                const isActive = activeNav === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative inline-flex py-1.5 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-[#1a4f8b]"
                          : "text-[#0b1a33] hover:text-[#1a4f8b]"
                      }`}
                    >
                      {item.label}

                      {/* UNDERLINE */}
                      <span
                        className={`absolute bottom-0 left-1/2 h-[2.5px] w-full -translate-x-1/2 rounded-full bg-[#1a4f8b] transition-transform duration-300 ease-out ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* DESKTOP WHATSAPP */}
          <div className="hidden shrink-0 xl:flex">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan melalui WhatsApp"
              className="inline-flex h-10.5 items-center justify-center gap-2 rounded-[5px] bg-[#14549d] px-5 text-[11px] font-semibold leading-none text-white shadow-[0_2px_8px_rgba(26,79,139,0.25)] transition-all duration-200 hover:bg-[#0f3d6b]"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-2xl text-white"
              />

              <span className="text-white">Pesan via WhatsApp</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-[5px] text-[#0b1a33] transition-colors duration-150 hover:bg-[#eef3fa] xl:hidden"
          >
            {isMenuOpen ? (
              <X size={22} strokeWidth={1.8} />
            ) : (
              <Menu size={22} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 xl:hidden ${
          isMenuOpen
            ? "pointer-events-auto visible bg-black/30"
            : "pointer-events-none invisible bg-black/0"
        } transition-colors duration-300`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      >
        <aside
          className={`absolute right-0 top-0 flex h-full w-[80%] max-w-95 flex-col bg-white shadow-[-4px_0_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex h-17.5 shrink-0 items-center justify-between border-b border-[#e5e9f0] px-6">
            {/* MOBILE LOGO */}
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "#home")}
              aria-label="Brewclean.shoes - Home"
              className="flex shrink-0 items-center gap-2.5"
            >
              <img
                src="/images/logo/brew-logo-nav.jpg"
                alt="Brewclean.shoes Logo"
                className="h-10 w-10 rounded-full object-cover"
              />

              <span className="text-[22px] font-extrabold leading-none tracking-[-0.06em] text-[#0b1a33]">
                Brewclean
                <span className="ml-0.5 font-medium text-[#1a4f8b]">
                  .shoes
                </span>
              </span>
            </a>

            <button
              type="button"
              aria-label="Tutup menu"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-[5px] text-[#0b1a33] transition-colors duration-150 hover:bg-[#eef3fa]"
            >
              <X size={22} strokeWidth={1.8} />
            </button>
          </div>

          {/* MOBILE NAVIGATION */}
          <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto px-6 py-8"
          >
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => {
                const isActive = activeNav === item.href;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative flex min-h-12 items-center rounded-lg px-4 text-base font-semibold transition-colors duration-150 ${
                        isActive
                          ? "bg-[#eef3fa] text-[#1a4f8b]"
                          : "text-[#0b1a33] hover:bg-[#eef3fa] hover:text-[#1a4f8b]"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
