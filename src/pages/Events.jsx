import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, MapPin, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EVENTS = [
  {
    id: 1,
    date: "Oct 15",
    title: "Community Food Drive",
    time: "10:00 AM - 2:00 PM",
    location: "Town Square",
    description:
      "Join us to support local families. Donations of canned goods and volunteers are welcome!",
    image: "https://images.unsplash.com/photo-1583337130417-3b6b84d73514?fit=crop&w=800&q=80",
  },
  {
    id: 2,
    date: "Oct 22",
    title: "Free Legal Clinic",
    time: "9:00 AM - 12:00 PM",
    location: "Public Library",
    description:
      "Get free legal advice from licensed attorneys. First-come, first-served.",
    image: "https://images.unsplash.com/photo-1555374015-3a1e4bbd5a42?fit=crop&w=800&q=80",
  },
  {
    id: 3,
    date: "Nov 05",
    title: "Housing Workshop",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center",
    description:
      "Learn about affordable housing programs and how to apply for support.",
    image: "https://images.unsplash.com/photo-1560184897-40b6c6bb5624?fit=crop&w=800&q=80",
  },
  {
    id: 4,
    date: "Nov 12",
    title: "Youth Coding Camp",
    time: "9:00 AM - 3:00 PM",
    location: "Tech Hub",
    description:
      "A full-day coding camp for students aged 12-18. Learn Python, web dev, and robotics.",
    image: "https://images.unsplash.com/photo-1581091870629-4f4d4f5ffec2?fit=crop&w=800&q=80",
  },
];

const Events = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const [modalEvent, setModalEvent] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false); // <-- new state for full calendar popup

  // GSAP animation
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".event-card");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // Check query string for eventId on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventId = params.get("eventId");
    if (eventId) {
      const eventToShow = EVENTS.find((e) => e.id === parseInt(eventId));
      if (eventToShow) setModalEvent(eventToShow);
    }
  }, [location.search]);

  return (
    <section
      id="events"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/cubes.png")',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
            Upcoming
          </span>
          <h2 className="text-4xl font-bold mt-2">Community Events</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4">
            Stay engaged with what's happening in River Valley. From workshops to
            fundraisers, our calendar is full of opportunities to connect and
            participate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="event-card bg-slate-800 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setModalEvent(event)}
            >
              <div className="h-48 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 via-transparent p-4">
                  <div className="text-white font-bold text-xl">{event.title}</div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="mb-4 text-slate-300 text-sm line-clamp-3">
                  {event.description}
                </div>
                <div className="flex justify-between text-slate-400 text-sm mt-auto">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} /> {event.time}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 mt-2">
                  <MapPin size={16} /> {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
            onClick={() => setCalendarOpen(true)}
          >
            View Full Calendar
          </button>
        </div>
      </div>

      {/* Individual Event Modal */}
      {modalEvent && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setModalEvent(null)}
        >
          <div
            className="bg-white text-black p-8 rounded-2xl max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold"
              onClick={() => setModalEvent(null)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{modalEvent.title}</h2>
            <p className="text-slate-700 mb-4">
              {modalEvent.date} • {modalEvent.time} • {modalEvent.location}
            </p>
            <p>{modalEvent.description}</p>
          </div>
        </div>
      )}

      {/* Full Calendar Modal */}
      {calendarOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setCalendarOpen(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-2xl max-w-3xl w-full overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-2xl font-bold"
              onClick={() => setCalendarOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Full Calendar</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-100 p-4 rounded-lg cursor-pointer hover:bg-slate-200"
                  onClick={() => {
                    setModalEvent(event);
                    setCalendarOpen(false); // close calendar popup
                  }}
                >
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm text-slate-600">
                    {event.date} • {event.time}
                  </p>
                  <p className="text-slate-700">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
