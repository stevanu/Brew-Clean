import bgAbout from "../../../assets/images/bg/bg-about1.webp";

function AboutImage() {
  return (
    <div className="relative flex min-h-90 items-center justify-center lg:min-h-90">
      <div className="absolute bottom-2 left-1/2 h-52 w-44 -translate-x-1/2 rounded-full bg-light-blue blur-[25px]" />

      <img
        src={bgAbout}
        alt="Sepatu Brewclean.shoes"
        className="relative z-10 w-172 max-w-none object-contain sm:w-80 lg:w-75 xl:w-85"
      />
    </div>
  );
}

export default AboutImage;
