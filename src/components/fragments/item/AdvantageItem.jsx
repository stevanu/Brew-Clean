import IconBox from "../../elements/IconBox";

function AdvantageItem({ icon: Icon, children }) {
  return (
    <li
      className="
        flex
        items-center
        gap-3
      "
    >
      <IconBox
        size="small"
        variant="light"
        className="
          h-9
          w-9
        "
      >
        <Icon size={18} strokeWidth={1.8} />
      </IconBox>

      <span
        className="
          text-[11px]
          font-medium
          leading-normal
          text-navy
        "
      >
        {children}
      </span>
    </li>
  );
}

export default AdvantageItem;
