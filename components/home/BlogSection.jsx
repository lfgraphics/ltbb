import { homeBlogData } from "@/constants/homeBlogData";
import BlogCard from "./BlogCard";
export default function BlogSection() {
  return (
    <section className=" text-black">
      <div className="bg-homeBg px-[5%] flex flex-col py-10 items-center text-center gap-4 ">
        <div className="bg-gray-500 py-2 px-4 rounded-3xl">Our blog</div>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
          div
          data-aos="fade-left"
        >
          Resources and insights
        </h2>
        <p div data-aos="fade-right">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <div className="py-10 flex flex-col md:flex-row gap-10 flex-wrap px-[5%] bg-white">
        {homeBlogData?.map((item,i) => {
          return <BlogCard key={item.id} data={item} animationType="zoom-in" animationDelay={i*150}/>;
        })}
      </div>
    </section>
  );
}
