const reviews = [
  {
    name: "Jamie Sutherlin",
    quote: "Wonderful food. Friendly warm atmosphere. Attentive owners.",
    stars: 5,
  },
  {
    name: "Shasta Tresan",
    quote: "Samosas, chai tea, lamb, and perfectly flaky flatbreads. Every bite was incredible.",
    stars: 5,
  },
  {
    name: "Charles",
    quote: "Samosas crunchy outside with savory inside. Highly recommend the vegetarian options — I bought 20 to go.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section style={{ backgroundColor: "#f5efe4", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            Google Reviews
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#3d2b1f",
              marginBottom: "1rem",
            }}
          >
            What People Are Saying
          </h2>
          {/* Rating badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#3d2b1f",
              borderRadius: "2px",
              padding: "0.5rem 1.25rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ color: "#c9a96e", fontSize: "1rem", fontWeight: 700 }}>4.5</span>
            <span style={{ color: "#c9a96e", fontSize: "0.9rem" }}>★★★★½</span>
            <span style={{ color: "#8a7a6a", fontSize: "0.8rem" }}>· 216 Google reviews</span>
          </div>
          <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto" }} />
        </div>

        {/* Review cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e8d5b0",
                borderRadius: "2px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span style={{ color: "#c9a96e", fontSize: "1.1rem", letterSpacing: "0.05em" }}>
                {"★".repeat(r.stars)}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  color: "#3d2b1f",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flexGrow: 1,
                }}
              >
                &ldquo;{r.quote}&rdquo;
              </p>
              <p style={{ color: "#8a7a6a", fontSize: "0.8rem", fontWeight: 500 }}>— {r.name}</p>
            </div>
          ))}
        </div>

        {/* Link to Google */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.google.com/maps/search/Amir+Motherland+Dish+Portland"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2c6e8a",
              fontSize: "0.88rem",
              textDecoration: "none",
              borderBottom: "1px solid #2c6e8a",
              paddingBottom: "1px",
            }}
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
