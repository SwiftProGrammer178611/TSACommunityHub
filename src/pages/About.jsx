import { Link } from "react-router-dom";
import { HeartHandshake, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <section className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-800">
            Empowering the River Valley <br /> Community
          </h1>
          <p className="text-slate-600 text-lg md:text-xl">
            The River Valley Community Resource Hub connects residents to local
            organizations, programs, and events. Our goal is to make vital
            resources accessible and easy to discover, so everyone in the
            community can thrive.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Mission</h2>
            <p className="text-slate-600">
              To bridge the gap between residents and the support they need,
              providing a centralized, reliable, and user-friendly platform for
              local resources, events, and services.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Vision</h2>
            <p className="text-slate-600">
              A connected, empowered, and resilient community where every
              resident has access to education, healthcare, food, housing, and
              other essential services.
            </p>
          </div>
        </div>

        {/* Team / Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-24">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-emerald-200 transition">
            <HeartHandshake size={48} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">50+ Partners</h3>
            <p className="text-slate-500 text-sm">Local organizations we collaborate with</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-emerald-200 transition">
            <HeartHandshake size={48} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">100+ Resources</h3>
            <p className="text-slate-500 text-sm">Verified and up-to-date support listings</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-emerald-200 transition">
            <HeartHandshake size={48} className="text-emerald-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Community Driven</h3>
            <p className="text-slate-500 text-sm">Built to empower residents and local programs</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/directory"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg shadow hover:bg-emerald-700 transition-all"
          >
            Browse Resources <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
