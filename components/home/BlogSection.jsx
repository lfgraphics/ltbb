import { homeBlogData } from "@/constants/homeBlogData";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <section className=" mb-10">
      <div className="bg-homeBg px-[5%] flex flex-col py-10 items-center text-center gap-4 text-white">
        <div className="bg-gray-500 py-2 px-4 rounded-3xl">Our blog</div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          Resources and insights
        </h2>
        <p>
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-10 flex-wrap px-[5%]">
       {
        homeBlogData?.map((item)=>{
            return <BlogCard key={item.id} data={item}/>
        })
       }
      </div>
    </section>
  );
}
