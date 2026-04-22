"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ backgroundColor: "rgba(61,43,31,0.92)", backdropFilter: "blur(8px)" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none">
          <span
            style={{ fontFamily: 'var(--font-playfair), serif', color: "#c9a96e", fontSize: "1.4rem", fontWeight: 700 }}
          >
            Ubax
          </span>
          <span style={{ color: "#e8d5b0", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            East African Cuisine
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Menu", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ color: "#e8d5b0", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
              className="hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: "#c9a96e",
              color: "#3d2b1f",
              padding: "0.5rem 1.25rem",
              borderRadius: "2px",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
            className="hover:opacity-80 transition-opacity"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span style={{ backgroundColor: "#e8d5b0", height: "2px", width: "24px", display: "block" }} />
          <span style={{ backgroundColor: "#e8d5b0", height: "2px", width: "24px", display: "block" }} />
          <span style={{ backgroundColor: "#e8d5b0", height: "2px", width: "24px", display: "block" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: "#3d2b1f" }} className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {["Menu", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ color: "#e8d5b0", fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
