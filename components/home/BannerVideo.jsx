import { useState } from 'react';
import Image from 'next/image';

const BannerVideo = () => {
    const [isVideoError, setIsVideoError] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleVideoError = () => {
        setIsVideoError(true);
    };

    const handleVideoCanPlay = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className="relative w-full h-full">
            {isVideoError || !isVideoLoaded ? (
                <Image
                    src="/Litigation Support/pexels-zachary-caraway-17630959.jpg"
                    alt="Fallback Image"
                    fill
                    className="rounded-xl object-cover"
                />
            ) : null}
            <video
                className={`w-full h-full object-cover rounded-xl ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                autoPlay
                muted
                loop
                onError={handleVideoError}
                onCanPlay={handleVideoCanPlay}
            >
                <source
                    src="https://thelegalbase.com/wp-content/uploads/2022/07/My-Movie_Website.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default BannerVideo;
