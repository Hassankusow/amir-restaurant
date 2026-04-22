"use client";
import Image from "next/image";

const images = [
  {
    src: "https://amirsportland.com/images/1.jpg",
    alt: "Somali rice plate with goat meat and sides",
    label: "Rice Plate",
  },
  {
    src: "https://amirsportland.com/images/2.jpg",
    alt: "Homemade sambusa — crispy Somali pastry",
    label: "Sambusa",
  },
  {
    src: "https://amirsportland.com/images/3.jpg",
    alt: "East African pasta with spiced meat sauce",
    label: "Baasto",
  },
  {
    src: "https://amirsportland.com/images/4.jpg",
    alt: "Slow-cooked goat — Somali specialty",
    label: "Hilib Ari",
  },
  {
    src: "https://amirsportland.com/images/5.jpg",
    alt: "Somali tea and fresh-made flatbread",
    label: "Shaah & Japati",
  },
  {
    src: "https://amirsportland.com/images/6.jpg",
    alt: "Full East African spread with all the sides",
    label: "Full Spread",
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
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
                  zIndex: 1,
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
