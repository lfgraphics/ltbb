"use client";
import BannerContent from "./BannerContent";
import BannerVideo from "./BannerVideo";
export default function Banner() {
  return (
    <div className="min-h-[85vh] sm:min-h-[75vh] py-10 justify-center bg-homeBg md:homeClipPath relative flex items-center px-[5%]">
      <div className="flex flex-col-reverse sm:flex-row  gap-12 items-center h-full">
        <BannerContent />
        <div className="flex-1 w-full h-full max-h-80">
          <BannerVideo />
        </div>
      </div>
    </div>
  );
}
