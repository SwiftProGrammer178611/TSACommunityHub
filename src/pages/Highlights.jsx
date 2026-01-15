// src/pages/Highlights.jsx
import React, { useState, useMemo } from "react";
import * as lucide from "lucide-react";
import Footer from "../components/Footer";

// --- Mock Data ---
const RESOURCES = [
  {
    id: 1,
    name: "Valley Food Pantry",
    category: "Food Assistance",
    description: "Providing fresh produce and canned goods to families in need every Tuesday and Thursday.",
    address: "123 Main St, River Valley",
    phone: "(555) 123-4567",
    website: "www.example.com",
    highlight: true,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "Community Health Clinic",
    category: "Health",
    description: "Free and low-cost health screenings, vaccinations, and general check-ups for residents.",
    address: "456 Oak Ave, River Valley",
    phone: "(555) 987-6543",
    website: "www.example.com",
    highlight: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "River Valley Youth Mentors",
    category: "Education",
    description: "Connecting local professionals with high school students for career guidance and tutoring.",
    address: "789 Pine Ln, River Valley",
    phone: "(555) 456-7890",
    website: "www.example.com",
    highlight: true,
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1000",
  },
];

const CATEGORIES = ["All", "Food Assistance", "Health", "Education", "Legal", "Housing", "Community"];

// --- Icon Wrapper ---
const Icon = ({ name, size = 20, className = "" }) => {
  const IconComponent = lucide[name.charAt(0).toUpperCase() + name.slice(1)];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
};

const Highlights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return RESOURCES.filter((resource) => {
      const matchesSearch =
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="highlights" className="py-24 bg-slate-50 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Highlights</h2>
            <p className="text-slate-600">Explore featured resources in River Valley.</p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-3 top-3.5 text-slate-400">
              <Icon name="search" size={20} />
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resource cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="card-hover bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={resource.image}
                    alt={resource.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-2 py-1 rounded shadow-sm">
                    {resource.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{resource.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-1">{resource.description}</p>
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Icon name="map-pin" size={16} className="text-emerald-500" />
                      {resource.address}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="phone" size={16} className="text-emerald-500" />
                      {resource.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="globe" size={16} className="text-emerald-500" />
                      <a
                        href={`http://${resource.website}`}
                        className="hover:text-emerald-600 underline decoration-dotted"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500 bg-white rounded-xl border border-dashed border-slate-300">
              <Icon name="folder-open" size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No resources found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-2 text-emerald-600 font-medium hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
