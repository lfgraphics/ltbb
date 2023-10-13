import Image from "next/image";

export default function TestimonialsCard({ data, animationDelay }) {
  const { review, name, designation, image } = data;
  return (
    <div
      className="bg-white py-6 px-8 rounded-xl h-full flex flex-col justify-center"
      data-aos="zoom-in"
      data-aos-delay={animationDelay}
    >
      <p className="line-clamp-5 sm:line-clamp-4">{review}</p>
      <div className="flex items-center gap-4 mt-3">
        <div className="w-16 h-16 rounded-[50%] bg-[#E6E4FF] relative overflow-hidden">
          <Image src={image} className="object-contain" fill />
        </div>
        <div className="flex-1">
          <h4 className="text-lg">{name}</h4>
          <h4 className="text-gray-500 text-base line-clamp-1">{designation}</h4>
        </div>
      </div>
    </div>
  );
}
