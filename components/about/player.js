"use client"
import React, { useRef, useEffect, useState } from 'react';
import {
    Dialog,
    

    Transition,
} from '@headlessui/react';
import { IoIosCloseCircle } from "react-icons/io";

import './style.css'
const Player = () => {
    const props = {
        thumb: "/images/videoThumb2.jpg",
        thumbWidth: 600,
        thumbHeight: 150,
        thumbAlt: "video alt",
        video: "/TLB Services.mp4",
        videoWidth: 1000,
        videoHeight: 400
    }
    const [modalOpen, setModalOpen] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [videoRef]);

    return (
        <React.Fragment>
             <div className="flex justify-center mt-4">
      {/* Video thumbnail */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => setModalOpen(true)}
        aria-label="Watch the video"
      >
        <img
          className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
          src={props.thumb}
          width={props.thumbWidth}
          height={props.thumbHeight}
          alt="Modal video thumbnail"
        />
        {/* Play icon */}
    
         
        <svg
          className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
        >
          <circle className="fill-white" cx="36" cy="36" r="36" fill-opacity=".8" />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg>
      </button>
      {/* End: Video thumbnail */}

      <Transition.Root show={modalOpen} as="template">
        <Dialog onClose={() => setModalOpen(false)} initialFocus={videoRef}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
           <div className="max-w-5xl mx-auto">
              <Dialog.Panel className="w-full max-h-full rounded-3xl shadow-2xl bg-white overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-2 right-2 text-red text-xl cursor-pointer"
                >
                  <IoIosCloseCircle className='text-3xl text-black hover:text-3xl' />
                  
                </button>
                {/* End: Close Button */}
                <div className='container m-4 p-4'>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-center object-cover"
                    loop
                    controls
                  >
                    <source src={props.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Dialog.Panel>
            </div>
          
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition.Root>
    </div>

        </React.Fragment>
    )
}

export default Player;