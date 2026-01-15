import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom"; // IMPORTANT: Added this
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as lucide from "lucide-react";
import Navbar from "../components/Navbar";



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
  }
];

const CATEGORIES = ["All", "Food Assistance", "Health", "Education", "Legal", "Housing", "Community"];

// --- Icon Wrapper ---
const Icon = ({ name, size = 20, className = "" }) => {
  const IconComponent = lucide[name.charAt(0).toUpperCase() + name.slice(1)];
  return IconComponent ? <IconComponent size={size} className={className} /> : null;
};

// --- Shared Resource Card Component (Fixes the undefined error) ---
const ResourceCard = ({ resource }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
    <div className="h-40 overflow-hidden relative">
      <img src={resource.image} alt={resource.name} className="w-full h-full object-cover" />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-2 py-1 rounded shadow-sm">
        {resource.category}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{resource.name}</h3>
      <p className="text-slate-600 text-sm mb-4">{resource.description}</p>
      <div className="space-y-2 mt-auto pt-4 border-t border-slate-100 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Icon name="map-pin" size={16} className="text-emerald-500" />
          {resource.address}
        </div>
      </div>
    </div>
  </div>
);

// --- Hero Section ---
const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <header ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
         <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000')`}}></div>
      </div>
      <div ref={textRef} className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">River Valley Hub</h1>
        <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">Connecting you to vital community services.</p>
        <div className="flex justify-center gap-4">
          <a href="#directory" className="px-8 py-4 bg-emerald-600 rounded-lg font-bold">Find Help</a>
        </div>
      </div>
    </header>
  );
};

// --- Highlights Section ---
const Highlights = () => {
  const highlightedResources = RESOURCES.filter((r) => r.highlight);
  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Spotlight Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlightedResources.map((resource) => (
            <div key={resource.id} className="relative h-96 rounded-2xl overflow-hidden shadow-xl group">
              <img src={resource.image} className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 p-8 flex flex-col justify-end text-left text-white">
                <h3 className="text-2xl font-bold">{resource.name}</h3>
                <Link to="/directory" className="text-emerald-400 mt-2">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Directory PREVIEW (Home Page Version) ---
const DirectoryPreview = () => {
  const previewResources = RESOURCES.slice(0, 3);

  return (
    <section id="directory" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">Resource Directory</h2>
            <p className="text-slate-600">Find vital services in River Valley.</p>
          </div>
          <Link
            to="/highlights"
            className="text-emerald-600 font-bold hover:underline flex items-center gap-2"
          >
            View All Resources <Icon name="arrow-right" size={20} />
          </Link>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {previewResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Events Section ---
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    { id: 1, date: "Oct 15", title: "Community Food Drive", time: "10:00 AM - 2:00 PM", loc: "Town Square" },
    { id: 2, date: "Oct 22", title: "Free Legal Clinic", time: "9:00 AM - 12:00 PM", loc: "Public Library" },
    { id: 3, date: "Nov 05", title: "Housing Workshop", time: "6:00 PM - 8:00 PM", loc: "Community Center" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Upcoming Events</h2>
        <div className="grid gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800 p-6 rounded-lg flex items-center gap-6 border border-slate-700 hover:bg-slate-700 cursor-pointer transition-colors"
              onClick={() => navigate(`/events?eventId=${event.id}`)}
            >
              <div className="bg-slate-700 p-4 rounded-lg text-center min-w-[80px]">
                <div className="text-emerald-400 font-bold">{event.date}</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-slate-400">{event.time} • {event.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Submission Form ---
const SubmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="submit" className="py-24 bg-emerald-50">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-12 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Suggest a Resource</h2>
        {submitted ? (
          <div className="text-center py-10">Thanks for your submission!</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-4">
            <input placeholder="Organization Name" className="border p-3 rounded" required />
            <textarea placeholder="Description" className="border p-3 rounded" rows="4" required />
            <button className="bg-emerald-600 text-white py-3 rounded font-bold">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
};



// --- Home Component ---
const Home = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Highlights />
    <DirectoryPreview /> {/* Fixed: Changed from Directory to DirectoryPreview */}
    <Events />
    <SubmissionForm />
  
  </div>
);

export default Home;