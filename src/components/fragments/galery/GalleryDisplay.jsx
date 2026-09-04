export const GalleryDisplay = ({ photo, alt = "Hasil Treatment" }) => {
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm group">
      <img
        src={photo}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};
