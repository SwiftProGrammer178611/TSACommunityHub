import { Link } from "react-router-dom";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <HeartHandshake className="text-emerald-500" />
          River Valley Hub
        </Link>

        <div className="hidden md:flex gap-8">
          <Link to="/highlights">Highlights</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/events">Events</Link>
          <Link to="/submit" className="text-emerald-600 font-semibold">
            Submit Resource
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4">
          <Link to="/highlights">Highlights</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/events">Events</Link>
          <Link to="/submit">Submit Resource</Link>
        </div>
      )}
    </nav>
  );
}
