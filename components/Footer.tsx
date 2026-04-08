export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1008",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-playfair), serif',
          color: "#c9a96e",
          fontSize: "1.3rem",
          fontWeight: 700,
          marginBottom: "0.25rem",
        }}
      >
        Amir
      </p>
      <p
        style={{
          color: "#8a7a6a",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        East African Cuisine
      </p>
      <div
        style={{ width: "30px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto 1.5rem" }}
      />
      <p style={{ color: "#8a7a6a", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} Amir Restaurant. All rights reserved.
      </p>
    </footer>
  );
}
