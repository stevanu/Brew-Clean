function Image({ src, alt = "", width, height, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      draggable="false"
      className={`
        block
        max-w-full

        select-none

        ${className}
      `}
      {...props}
    />
  );
}

export default Image;
