"use client";
import { useState, useRef } from "react";
import { Pause, Play } from "lucide-react";
export default function HowWeWork() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    };
  }

  return (
    <section className="px-[5%] py-10 md:py-16 bg-white">
      <h2
        className="text-2xl md:text-3xl font-extrabold text-black"
        data-aos="fade-right"
      >
        How We Work
      </h2>
      <div className="w-full mt-8 relative">
        <button
          onClick={() => handlePlay()}
          className="absolute bottom-8 right-6 w-12 h-12 rounded-full bg-blue-600 z-10 flex justify-center items-center text-white cursor-pointer"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <video
          ref={videoRef}
          className={`w-full object-cover rounded-xl max-h-[80vh]`}
        >
          <source
            src="/TLB Services.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
