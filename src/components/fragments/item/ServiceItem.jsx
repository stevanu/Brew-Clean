function ServiceItem({ icon: Icon, name, duration, price }) {
  return (
    <div className="flex min-h-14.5 items-center gap-3 border-b border-border-light">
      {/* Icon */}

      <div className="flex h-8 w-8 shrink-0 items-center justify-center text-royal">
        <Icon size={20} strokeWidth={1.8} />
      </div>

      {/* Service information */}

      <div className="min-w-0 flex-1">
        <p className="m-0 text-[12px] font-semibold leading-[1.35] text-navy">
          {name}
        </p>

        <p className="mt-0.5 m-0 text-[9.5px] font-normal leading-[1.4] text-text">
          {duration}
        </p>
      </div>

      {/* Price */}

      <span className="shrink-0 text-[17px] font-bold leading-none text-royal">
        {price}
      </span>
    </div>
  );
}

export default ServiceItem;
