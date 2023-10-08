export default function OurMissionsAndVisionsCard({ title, desc,animationType }) {
  return (
    <div className="flex-1 flex flex-col gap-2 p-4 bg-white drop-shadow-md rounded-md" data-aos={animationType}>
      <h2 className="text-xl md:text-2xl lg:text-3xl">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
