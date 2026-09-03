function Heading({
  children,
  as: Tag = "h2",
  size = "section",
  className = "",
}) {
  const sizes = {
    hero: `
      text-[39px]
      leading-[1.05]
      tracking-[-0.045em]
    `,

    section: `
      text-[26px]
      leading-[1.15]
      tracking-[-0.035em]
    `,

    card: `
      text-[20px]
      leading-[1.2]
      tracking-[-0.025em]
    `,

    small: `
      text-[16px]
      leading-[1.3]
      tracking-[-0.02em]
    `,
  };

  return (
    <Tag
      className={`
        m-0
        font-bold
        text-navy

        ${sizes[size]}

        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

export default Heading;
