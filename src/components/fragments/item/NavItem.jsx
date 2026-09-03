function NavItem({ children, href = "#", active = false }) {
  return (
    <a
      href={href}
      className={`relative inline-flex h-18.5 items-center text-[13px] font-medium leading-none transition-colors duration-150
        ${active ? "text-royal" : "text-navy hover:text-royal"} after:absolute after:bottom-0 after:left-1/2 after:h-0.5 
        after:-translate-x-1/2 after:bg-royal ${active ? "after:w-14" : "after:w-0"}`}
    >
      {children}
    </a>
  );
}

export default NavItem;
