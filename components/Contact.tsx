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
            Call to order — also available on DoorDash, Uber Eats &amp; GrubHub.
          </p>
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
              lines: ["Sunday – Saturday", "11:00 AM – 8:00 PM", "Open every day"],
            },
            {
              label: "Location",
              lines: ["7100 NE Glisan St", "Portland, OR 97213", "Montavilla neighborhood"],
            },
            {
              label: "Order Online",
              lines: ["DoorDash · Uber Eats", "GrubHub · Seamless", "amirsportland.com"],
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
              {card.lines.map((line, i) => (
                <p key={i} style={{ color: "#3d2b1f", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
