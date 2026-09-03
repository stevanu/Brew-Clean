import IconBox from "../../elements/IconBox";

function FeatureItem({ icon: Icon, title, subtitle, showDivider = true }) {
  return (
    <div className="relative flex min-w-0 items-center gap-2.5 sm:pr-4 lg:pr-5">
      <IconBox size="small" variant="outline" className="h-10.5 w-10.5">
        <Icon size={19} strokeWidth={1.8} />
      </IconBox>

      <div className="min-w-0">
        <p className="m-0 text-[9px] font-bold leading-[1.35] tracking-[0.65px] text-navy whitespace-nowrap">
          {title}
        </p>

        <p className="m-0 text-[9px] font-bold leading-[1.35] tracking-[0.65px] text-navy whitespace-nowrap">
          {subtitle}
        </p>
      </div>

      {showDivider && (
        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-border-light sm:block"
        />
      )}
    </div>
  );
}

export default FeatureItem;
