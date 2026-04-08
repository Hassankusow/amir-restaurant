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

      </div>
    </section>
  );
}
