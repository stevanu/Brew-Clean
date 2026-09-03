export const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-8">
      <p className="text-blue-700 font-semibold text-xl tracking-widest uppercase mb-1">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-3xl font-bold text-blue-900">{title}</h2>
    </div>
  );
};
