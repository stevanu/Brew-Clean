function Badge({ children, className = "" }) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-start

        rounded-full

        bg-lightBlue

        py-1.75

        text-[17px]
        font-bold
        uppercase
        leading-none
        tracking-[1.6px]

        text-primary

        ${className}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;
