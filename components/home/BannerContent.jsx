import Link from "next/link";

export default function BannerContent({ data }) {
  const { title, desc, link } = data;
  return (
    <div className="flex w-full flex-col gap-3 text-white">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className="text-gray-300">{desc}</p>
      <Link
        href={link}
        className="bg-homeCTA rounded-xl py-2 px-6 hover:opacity-90 max-w-fit"
      >
        Enquire Now
      </Link>
    </div>
  );
}
