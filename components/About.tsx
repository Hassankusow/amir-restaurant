export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#3d2b1f",
        padding: "6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#c9a96e",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Our Story
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#f5efe4",
            marginBottom: "1rem",
          }}
        >
          From the Motherland to Portland
        </h2>

        <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto 2rem" }} />

        {/* Story */}
        <p
          style={{
            color: "#e8d5b0",
            fontSize: "1.05rem",
            lineHeight: 1.9,
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          Amir&rsquo;s Motherland Dish was opened by Ali Maryan and his family
          with one mission — to bring authentic, halal Somali and East African
          cuisine to the heart of Portland. Every dish is made with love,
          prepared fresh daily using traditional recipes passed down through
          generations. When you walk through our doors, you&rsquo;re family.
        </p>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {[
            { icon: "☪", label: "Halal Certified" },
            { icon: "✊", label: "Black-Owned" },
            { icon: "🌍", label: "East African Cuisine" },
            { icon: "👨‍👩‍👧‍👦", label: "Family-Owned" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                border: "1px solid rgba(201,169,110,0.4)",
                borderRadius: "100px",
                padding: "0.5rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#e8d5b0",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
              }}
            >
              <span>{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
