function AdvantageListItem({ icon: Icon, text }) {
  return (
    <li className="flex items-center gap-2">
      <div className="flex h-12 w-6 shrink-0 items-center justify-center">
        <Icon size={22} strokeWidth={1.8} className="text-primary" />
      </div>

      <span className="text-[10px] font-medium leading-[1.45] text-navy sm:text-[11px]">
        {text}
      </span>
    </li>
  );
}

export default AdvantageListItem;
