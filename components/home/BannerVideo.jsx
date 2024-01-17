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
                    src="https://thelegalbase.com/wp-content/uploads/2022/07/My-Movie_Website.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default BannerVideo;

