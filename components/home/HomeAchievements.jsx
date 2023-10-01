import { homeAchievementData } from "@/constants/homeAchievementsData";
export default function HomeAchievements() {
  return (
    <section className="mb-16 py-10 px-[5%]">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
          TLB’S ACHIEVEMENTS
        </h2>
        <p className="mt-4 text-xl">
          Everything you need to convert, engage, and retain more users.
        </p>
      </div>
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between text-base text-black max-w-3xl mx-auto mt-6 text-center">
        {homeAchievementData?.map(({ id, title, numbers }) => {
          return (
            <div
              key={id}
              className={`flex-1 border-r-2 border-[#EAECF0] ${
                id === homeAchievementData.length && "border-none"
              }`}
            >
              <div className="text-3xl font-extrabold text-homeCTA">
                {numbers}
              </div>
              <div>{title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
