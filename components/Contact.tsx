export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#f5efe4", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        {/* Header */}
        <p
          style={{
            color: "#c9a96e",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Get In Touch
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#3d2b1f",
            marginBottom: "1rem",
          }}
        >
          Order & Visit
        </h2>
        <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto 2.5rem" }} />

        {/* Phone CTA */}
        <div
          style={{
            backgroundColor: "#3d2b1f",
            borderRadius: "4px",
            padding: "2.5rem 2rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              color: "#e8d5b0",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Call to Order
          </p>
          <a
            href="tel:+15039337368"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              color: "#c9a96e",
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              fontWeight: 700,
              textDecoration: "none",
              display: "block",
              marginBottom: "0.75rem",
              letterSpacing: "0.02em",
            }}
          >
            (503) 933‑7368
          </a>
          <p style={{ color: "#8a7a6a", fontSize: "0.85rem" }}>
            Also available for delivery online:
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
            {[
              { label: "DoorDash", href: "https://www.doordash.com/search/store/amir%27s+motherland+dish+portland/" },
              { label: "Uber Eats", href: "https://www.ubereats.com/search?q=amir%27s+motherland+dish+portland" },
              { label: "GrubHub", href: "https://www.grubhub.com/search?queryText=amir+motherland+portland" },
            ].map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c9a96e",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(201,169,110,0.4)",
                  paddingBottom: "1px",
                }}
              >
                {platform.label}
              </a>
            ))}
          </div>
        </div>

        {/* Info cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              label: "Hours",
              content: (
                <>
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>Sunday – Saturday</p>
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>11:00 AM – 8:00 PM</p>
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>Open every day</p>
                </>
              ),
            },
            {
              label: "Location",
              content: (
                <a
                  href="https://maps.google.com/?q=7100+NE+Glisan+St+Portland+OR+97213"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>7100 NE Glisan St</p>
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>Portland, OR 97213</p>
                  <p style={{ color: "#2c6e8a", fontSize: "0.82rem", lineHeight: 1.7, marginTop: "0.25rem" }}>
                    View on Google Maps →
                  </p>
                </a>
              ),
            },
            {
              label: "Order Online",
              content: (
                <>
                  <a
                    href="https://amirsportland.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2c6e8a", fontSize: "0.88rem", lineHeight: 1.7, display: "block", textDecoration: "none" }}
                  >
                    amirsportland.com
                  </a>
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>DoorDash · Uber Eats</p>
                  <p style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>GrubHub · Seamless</p>
                </>
              ),
            },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                border: "1px solid #e8d5b0",
                borderRadius: "2px",
                padding: "1.5rem",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  color: "#c9a96e",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  fontWeight: 500,
                }}
              >
                {card.label}
              </p>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
