import { useParams } from "react-router-dom";
import { RESOURCES } from "../data/resources";
import Footer from "../components/Footer";

export default function ResourceDetails() {
  const { id } = useParams();
  const resource = RESOURCES.find((r) => r.id === Number(id));

  if (!resource) {
    return (
      <div className="pt-32 text-center text-slate-600">
        Resource not found.
      </div>
    );
  }

  return (
    <section className="pt-32 container mx-auto px-6 max-w-3xl">
      <img
        src={resource.image}
        alt={resource.name}
        className="rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{resource.name}</h1>
      <p className="text-slate-600 mb-4">{resource.description}</p>

      <div className="space-y-2 mb-6 text-sm">
        <p><strong>Category:</strong> {resource.category}</p>
        <p><strong>Address:</strong> {resource.address}</p>
        <p><strong>Phone:</strong> {resource.phone}</p>
      </div>

      <a
        href={`https://${resource.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg"
      >
        Visit Website
      </a>
    </section>
  );
}
