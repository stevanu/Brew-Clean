function IconBox({
  children,
  size = "medium",
  variant = "outline",
  className = "",
}) {
  const sizes = {
    small: "h-10 w-10",
    medium: "h-11 w-11",
    large: "h-12 w-12",
  };

  const variants = {
    outline: `
      border
      border-[#b8d4f3]
      bg-white
      text-primary
    `,

    blue: `
      bg-primary
      text-white
    `,

    light: `
      bg-lightBlue
      text-primary
    `,
  };

  return (
    <span
      aria-hidden="true"
      className={`
        inline-flex
        shrink-0

        items-center
        justify-center

        rounded-full

        ${sizes[size]}
        ${variants[variant]}

        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default IconBox;
