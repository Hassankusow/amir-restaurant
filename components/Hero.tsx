export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1a1008 0%, #3d2b1f 60%, #c9a96e 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Horizontal rule accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "rgba(201,169,110,0.15)",
        }}
      />

      {/* Content */}
      <div style={{ textAlign: "center", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <p
          style={{
            color: "#c9a96e",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontFamily: 'var(--font-inter), sans-serif',
            fontWeight: 400,
          }}
        >
          Halal &mdash; Montavilla, Portland OR
        </p>

        {/* Main title */}
        <h1
          style={{
            fontFamily: 'var(--font-playfair), serif',
            color: "#f5efe4",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          Amir
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-playfair), serif',
            color: "#c9a96e",
            fontSize: "clamp(1rem, 3vw, 1.6rem)",
            fontStyle: "italic",
            fontWeight: 400,
            marginBottom: "2.5rem",
            letterSpacing: "0.02em",
          }}
        >
          East African Cuisine
        </p>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#c9a96e",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Tagline */}
        <p
          style={{
            color: "#e8d5b0",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            fontWeight: 300,
            maxWidth: "480px",
            lineHeight: 1.7,
            margin: "0 auto 3rem",
          }}
        >
          Authentic flavors of the Indian Ocean coast,<br />
          passed down through generations.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#menu"
            style={{
              backgroundColor: "#c9a96e",
              color: "#3d2b1f",
              padding: "0.9rem 2.5rem",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              display: "inline-block",
            }}
          >
            View Menu
          </a>
          <a
            href="#contact"
            style={{
              border: "1px solid #c9a96e",
              color: "#c9a96e",
              padding: "0.9rem 2.5rem",
              fontWeight: 400,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              display: "inline-block",
            }}
          >
            Order by Phone
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #f5efe4)",
        }}
      />
    </section>
  );
}
