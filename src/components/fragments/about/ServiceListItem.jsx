function ServiceListItem({ icon: Icon, name, duration, price }) {
  return (
    <div className="grid grid-cols-[32px_1fr_auto] items-center gap-2 px-5 py-3 sm:grid-cols-[36px_1fr_80px_100px] sm:px-6">
      <div className="flex h-7 w-7 items-center justify-center">
        <Icon size={21} strokeWidth={1.8} className="text-primary" />
      </div>

      <span className="text-[11px] font-semibold text-navy sm:text-[12px]">
        {name}
      </span>

      <span className="hidden text-[13px] font-normal text-text sm:block">
        {duration}
      </span>

      <span className="text-right text-[13px] font-bold text-primary sm:text-[15px]">
        {price}
      </span>
    </div>
  );
}

export default ServiceListItem;
