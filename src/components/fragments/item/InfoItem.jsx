function InfoItem({ icon: Icon, title, children, className = "" }) {
  return (
    <div className={`flex w-full min-w-0 items-center gap-3.5 ${className}`}>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center text-royal">
        <Icon size={34} strokeWidth={1.6} />
      </div>

      <div className="min-w-0">
        <h3 className="m-0 text-[12px] font-bold leading-[1.35] text-navy">
          {title}
        </h3>

        <div className="mt-1 text-[10px] font-normal leading-[1.55] text-text">
          {children}
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
