export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#3d2b1f",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
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
      <h2
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "#f5efe4",
          margin: 0,
        }}
      >
        From the Motherland to Portland
      </h2>
    </section>
  );
}
