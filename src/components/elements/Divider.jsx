function Divider({ orientation = "horizontal", className = "" }) {
  const isVertical = orientation === "vertical";

  return (
    <span
      aria-hidden="true"
      className={`
        block
        shrink-0
        bg-borderLight

        ${isVertical ? "h-full w-px" : "h-px w-full"}

        ${className}
      `}
    />
  );
}

export default Divider;
