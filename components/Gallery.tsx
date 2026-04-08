"use client";

// Real Somali food images sourced from traditional Somali dish references
const images = [
  {
    src: "https://miro.medium.com/v2/resize:fit:1100/0*eRByhUyhwGeE0b7C",
    alt: "Bariis Iskukaris — Somali spiced rice",
    label: "Bariis Iskukaris",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1100/0*8z_e3IxLJcijJJpl",
    alt: "Sambuusa — Somali crispy pastry",
    label: "Sambuusa",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1100/0*MMSxK18-NnsRxI9U",
    alt: "Suqaar — Somali stir-fried meat",
    label: "Suqaar",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1100/0*4pxqJIF1ybZfz9PR",
    alt: "Baasto Soomaali — Somali-style pasta",
    label: "Baasto Soomaali",
  },
  {
    src: "https://miro.medium.com/v2/resize:fit:1100/0*L9iXYlPcvDW2D8P-",
    alt: "Hilib Ari — slow-cooked goat meat",
    label: "Hilib Ari",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{ backgroundColor: "#3d2b1f", padding: "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "#c9a96e",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            The Experience
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#f5efe4",
              marginBottom: "1rem",
            }}
          >
            A Taste of Mogadishu
          </h2>
          <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto" }} />
        </div>

        {/* Grid — 1 col on mobile, 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              style={{ overflow: "hidden", borderRadius: "2px", position: "relative", aspectRatio: "4/3" }}
              className={i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Dish name overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1rem",
                  background: "linear-gradient(to top, rgba(26,16,8,0.85) 0%, transparent 100%)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    color: "#e8d5b0",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    fontWeight: 600,
                  }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#8a7a6a",
            fontSize: "0.8rem",
            marginTop: "1.5rem",
            fontStyle: "italic",
          }}
        >
          All dishes made fresh daily with authentic East African ingredients.
        </p>
      </div>
    </section>
  );
}
