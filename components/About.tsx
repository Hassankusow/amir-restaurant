export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#3d2b1f",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
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

        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#f5efe4",
            marginBottom: "1.5rem",
          }}
        >
          From the Motherland to Portland
        </h2>

        <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto 2.5rem" }} />

        <p
          style={{
            color: "#e8d5b0",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: 1.9,
            marginBottom: "1.5rem",
            fontWeight: 300,
          }}
        >
          Ubax was born from a simple truth: the best food carries memory. Every
          plate we serve — from slow-cooked goat rice to hand-folded sambusa — is
          a recipe carried across oceans, passed down through family, and prepared
          with the same love it always has been.
        </p>

        <p
          style={{
            color: "#e8d5b0",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: 1.9,
            marginBottom: "1.5rem",
            fontWeight: 300,
          }}
        >
          Rooted in Somali and East African tradition, we cook the way our
          grandmothers cooked — with whole spices, fresh ingredients, and no
          shortcuts. Bariis, suqaar, baasto, japati: these aren&apos;t just dishes,
          they are culture on a plate.
        </p>

        <p
          style={{
            color: "#e8d5b0",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: 1.9,
            fontWeight: 300,
          }}
        >
          We&apos;re a family-owned restaurant in Montavilla, Portland. Come as a
          stranger, leave as family.
        </p>

        {/* Halal badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "2.5rem",
            border: "1px solid rgba(201,169,110,0.4)",
            borderRadius: "2px",
            padding: "0.6rem 1.25rem",
          }}
        >
          <span style={{ color: "#c9a96e", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Halal Certified &nbsp;·&nbsp; Family Owned &nbsp;·&nbsp; Portland, OR
          </span>
        </div>
      </div>
    </section>
  );
}
