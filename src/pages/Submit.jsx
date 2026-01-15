import Footer from "../components/Footer";

export default function Submit() {
    
  return (
    <section className="pt-32 container mx-auto px-6 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Submit a Resource</h1>
      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <textarea className="w-full border p-3 rounded" placeholder="Description" />
        <button className="bg-emerald-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
