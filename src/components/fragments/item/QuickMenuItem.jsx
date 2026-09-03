function QuickMenuItem({
  icon: Icon,
  children,
  href = "#",
  showDivider = true,
}) {
  return (
    <a
      href={href}
      className="relative flex min-h-19 flex-1 items-center justify-center gap-3 px-5 text-[11px] font-semibold text-navy transition-colors duration-150 hover:text-royal"
    >
      <Icon size={22} strokeWidth={1.8} className="shrink-0 text-royal" />

      <span className="text-center leading-[1.4]">{children}</span>

      {showDivider && (
        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 h-8.5 w-px -translate-y-1/2 bg-border-light"
        />
      )}
    </a>
  );
}

export default QuickMenuItem;
