const BannerVideo = () => {
    return (
        <div className="relative w-full h-full">
            <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                poster='/Litigation Support/pexels-zachary-caraway-17630959.jpg'
            >
                <source
                    src="/banner-video.webm"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default BannerVideo;

