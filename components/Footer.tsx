export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1008",
        padding: "3rem 1.5rem",
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
        Ubax
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

      {/* Quick nav */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {[
          { label: "Menu", href: "#menu" },
          { label: "Gallery", href: "#gallery" },
          { label: "Contact", href: "#contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: "#8a7a6a",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Social links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginBottom: "2rem" }}>
        <a
          href="https://www.instagram.com/amirs.motherland.dish/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c9a96e", fontSize: "0.8rem", textDecoration: "none" }}
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/amirsmotherlanddish/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c9a96e", fontSize: "0.8rem", textDecoration: "none" }}
        >
          Facebook
        </a>
      </div>

      <div
        style={{ width: "30px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto 1.5rem" }}
      />
      <p style={{ color: "#8a7a6a", fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} Ubax Restaurant. All rights reserved.
      </p>
    </footer>
  );
}
