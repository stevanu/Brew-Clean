import Badge from "../../elements/Badge";

function AboutInfo() {
  return (
    <div className="self-start mt-5 xl:pr-1">
      <Badge className="text-[18px]">Tentang Kami</Badge>

      <h2 className="mt-4 text-[25px] font-bold leading-[1.15] tracking-[-0.8px] text-primary sm:text-[28px] lg:text-[26px] xl:text-[29px] pb-3">
        Brewclean
        <span className="font-medium text-dark-text">.</span>
        <span className="font-medium text-navy">shoes</span>
      </h2>

      <p className="mt-4 max-w-117.5 text-[11px] font-normal leading-[1.7] text-text sm:text-[14px]">
        Brewclean.shoes bergerak di bidang jasa treatment sepatu, segala jenis
        bahan sepatu dengan keadaan noda membandel mampu di tangani oleh kami.
      </p>
      <br />
      <p className="mt-3 max-w-117.5 text-[11px] font-normal leading-[1.7] text-text sm:text-[14px]">
        Kami menggunakan sabun dan alat seperti sikat dll premium dengan
        menyesuaikan bahan sepatu agar tidak membuat bahan sepatu menjadi rusak.
      </p>
    </div>
  );
}

export default AboutInfo;
