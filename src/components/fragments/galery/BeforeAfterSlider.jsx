import { useState } from "react";

export const BeforeAfterSlider = ({
  beforeImg,
  afterImg,
  alt = "Hasil Treatment",
}) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-sm select-none group">
      {/* After Image (Background) */}
      <img
        src={afterImg}
        alt={`${alt} After`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeImg}
          alt={`${alt} Before`}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm pointer-events-none">
        Before
      </span>
      <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm pointer-events-none">
        After
      </span>

      {/* Slider Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Circle Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-blue-600 text-xs font-bold">
          &#10094;&#10095;
        </div>
      </div>

      {/* Range Input Control */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />
    </div>
  );
};
