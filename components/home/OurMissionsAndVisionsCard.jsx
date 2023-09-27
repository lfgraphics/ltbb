export default function OurMissionsAndVisionsCard({ title, desc }) {
  return (
    <div className="flex-1 flex flex-col gap-2 p-4 bg-white drop-shadow-md">
      <h2 className="text-xl md:text-2xl lg:text-3xl">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
