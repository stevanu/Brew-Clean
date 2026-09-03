function Text({
  children,
  as: Tag = "p",
  size = "body",
  color = "default",
  weight = "normal",
  className = "",
}) {
  const sizes = {
    xs: `
      text-[9px]
      leading-[1.5]
    `,

    small: `
      text-[10.5px]
      leading-[1.6]
    `,

    body: `
      text-[12px]
      leading-[1.7]
    `,

    large: `
      text-[14px]
      leading-[1.7]
    `,
  };

  const colors = {
    default: "text-text",
    navy: "text-navy",
    primary: "text-primary",
    white: "text-white",
    muted: "text-[#718096]",
  };

  const weights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Tag
      className={`
        m-0

        ${sizes[size]}
        ${colors[color]}
        ${weights[weight]}

        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default Text;
