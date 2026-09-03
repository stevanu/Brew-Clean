import { ArrowRight } from "lucide-react";

function Button({
  children,
  href = "#",
  variant = "primary",
  icon = "arrow",
  className = "",
  ...props
}) {
  const variants = {
    primary: `
      border-primary
      bg-primary
      text-white
      hover:bg-royal
    `,

    outline: `
      border-primary
      bg-white
      text-primary
      hover:bg-veryLightBlue
    `,

    ghost: `
      border-transparent
      bg-transparent
      text-primary
      hover:bg-veryLightBlue
    `,
  };

  return (
    <a
      href={href}
      className={`
        inline-flex
        h-11
        items-center
        justify-center
        gap-2

        rounded-[5px]
        border

        px-5

        text-[11px]
        font-semibold
        leading-none

        transition-colors
        duration-150

        ${variants[variant]}

        ${className}
      `}
      {...props}
    >
      <span>{children}</span>

      {icon === "arrow" && (
        <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
      )}
    </a>
  );
}

export default Button;
