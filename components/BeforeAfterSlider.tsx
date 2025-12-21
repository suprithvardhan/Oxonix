import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface Props {
  beforeImage: string;
  afterImage: string;
  beforeImageSrcSet?: string;
  afterImageSrcSet?: string;
  className?: string;
  priority?: boolean;
}

const BeforeAfterSlider: React.FC<Props> = ({ beforeImage, afterImage, beforeImageSrcSet, afterImageSrcSet, className = '', priority = false }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-xl border border-white/10 shadow-2xl ${className}`}>
      {/* After Image (Base) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          srcSet={afterImageSrcSet}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="After Retrofit"
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" } : {})}
        />
        <div className="absolute top-4 right-4 bg-primary text-black font-bold px-3 py-1 text-xs rounded uppercase">
          After (Electric)
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >

        <img
          src={beforeImage}
          srcSet={beforeImageSrcSet}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Before Retrofit"
          className="w-full h-full object-cover"
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchPriority: "high" } : {})}
        />
        <div className="absolute top-4 left-4 bg-white text-black font-bold px-3 py-1 text-xs rounded uppercase">
          Before (Petrol)
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute inset-y-0 w-1 bg-primary cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary">
          <MoveHorizontal className="w-4 h-4 text-black" />
        </div>
      </div>

      {/* Invisible Range Input for Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleDrag}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
};

export default BeforeAfterSlider;