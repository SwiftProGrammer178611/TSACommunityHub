import { Link } from "react-router-dom";
import { RESOURCES } from "../data/resources";
import Footer from "../components/Footer";

export default function Directory() {
  return (
    <section className="pt-32 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Community Resource Directory</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {RESOURCES.map((r) => (
          <Link
            key={r.id}
            to={`/resource/${r.id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={r.image}
              alt={r.name}
              className="h-40 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{r.name}</h3>
              <p className="text-sm text-slate-600">{r.description}</p>
              <span className="text-xs text-emerald-600 font-semibold">
                {r.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
