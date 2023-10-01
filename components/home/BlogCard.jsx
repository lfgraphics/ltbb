import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }) {
  const { image, title, desc, link } = data;
  return (
    <div className="flex-1 min-w-[300px] md:max-w-[320px] rounded-md p-4 bg-white drop-shadow-md">
      <div className="relative w-full h-56">
        <Link href={link} className="absolute z-10 inset-0"></Link>
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover rounded-md"
        />
      </div>
      <div className="text-black mt-4 flex flex-col gap-3">
        <h3 className="text-2xl md:text-2xl line-clamp-1 hover:underline underline-offset-4 transition duration-200">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="line-clamp-4">{desc}</p>
      </div>
    </div>
  );
}
