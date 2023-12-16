"use client"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);

const data = [
  {
    title: "TLB’s Custom Legal Management Software Solutions",
    description: "We provide unique Legal Management Software Solutions to assist legal offices, law firms and attorneys in automating tedious operations, streamlining workflows, and storing legal material in a single platform.",
    images: "/bespoke-it-services/legal-mang-soft.png"
  },
  {
    title: "Legal Management Mobile Applications",
    description: "We provide Legal Management Mobile Applications that allow lawyers to create case lifecycles, assign duties within their teams, exchange calendars and events, take notes, connect with clients, and manage data.",
    images: "/bespoke-it-services/legal-management.png"
  },
  {
    title: "Legal Billing Software Solutions",
    description: "We provide full Legal Billing Software Solutions that are connected to your existing back-office systems to provide automatic batch invoice generation, modification, and approval in order to improve accounting procedures.",
    images: "/bespoke-it-services/legal-billing-software.png"
  },
  {
    title: "Virtual Law Firm Solutions",
    description: "We create cloud-based Virtual Law Firm Solutions with powerful features like video conferencing and collaboration tools, user and client-facing portals, and more for better legal practice administration.",
    images: "/bespoke-it-services/virtual-law.png"
  },
  {
    title: "Calendar and Event Management Software",
    description: "We integrate Calendar and Events Management features, which allow legal offices to manage meetings, calendar invitations, events, and client and internal communications in a consolidated, structured platform.",
    images: "/bespoke-it-services/calander-and-event.webp"
  },
  {
    title: "Court Diary Administration",
    description: "Our legal software development team provides court diary management modules as an add-on to current legal software. This system automatically updates schedules on a daily basis and alerts legal professionals of upcoming court dates.",
    images: "/bespoke-it-services/court-diary.webp"
  },
  {
    title: "Embedded Document Management",
    description: "With our integrated document management system, you can effortlessly store, organize, and find all of your papers in one place.",
    images: "/bespoke-it-services/court-manag.webp"
  },
  {
    title: "Account Management",
    description: "We provide integration of law firm administration systems with account management systems so that you may see all account information and costs in one place.",
    images: "/bespoke-it-services/account-manag.webp"
  }
];


export default function Four() {
  return (
    <div className="relative my-8 px-[5%]">
      <div className="relative w-full mx-auto h-full">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            300: { slidesPerView: 1 },
            650: { slidesPerView: 2 },
            980: { slidesPerView: 3 },
            1350: { slidesPerView: 4 },
          }}
          loop
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}

          autoHeight={true}
        >
          {data?.map(({ title, description, images }, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex-1 min-w-[300px] md:max-w-[320px] h-full rounded-xl p-3 bg-white drop-shadow-md border border-[#79808A80]" data-aos="zoomIn" data-aos-delay={100 * (i + 1)}>
                  <div className="relative w-full h-56">
                    <Image
                      src={images}
                      fill
                      alt={title}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="text-black mt-4 flex flex-col gap-3">
                    <h3 className="text-2xl md:text-2xl line-clamp-1 hover:underline underline-offset-4 transition duration-200">
                      {title}
                    </h3>
                    <p className="line-clamp-5">{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
