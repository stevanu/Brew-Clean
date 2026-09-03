function SocialButton({ icon: Icon, href = "#", label, className = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-light bg-white text-royal 
        transition-colors duration-150 hover:border-primary hover:bg-light-blue ${className}`}
    >
      <Icon size={17} strokeWidth={1.8} />
    </a>
  );
}

export default SocialButton;
