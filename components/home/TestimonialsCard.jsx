export default function TestimonialsCard({ data }) {
  const { review, name, designation } = data;
  return (
    <div className="bg-white p-4 rounded-xl h-full">
      <p>{review}</p>
      <div className="mt-3">
        <h4 className="text-black text-xl">{name}</h4>
        <h4>{designation}</h4>
      </div>
    </div>
  );
}
