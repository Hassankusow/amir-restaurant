const categories = [
  {
    name: "Starters",
    items: [
      { name: "Sambusa", desc: "Homemade crispy pastry filled with spiced beef — a Somali classic", price: "$3.99" },
      { name: "Mendassi", desc: "House-made Somali flatbread, served warm", price: "" },
      { name: "Japati / Anjara", desc: "Soft layered bread with your choice of chicken or goat", price: "" },
    ],
  },
  {
    name: "Rice Plates",
    items: [
      { name: "Rice with Goat Meat", desc: "Fragrant basmati rice with tender goat — served with salad, hot sauce, and banana", price: "$20" },
      { name: "Rice with Beef", desc: "Seasoned beef over basmati rice — served with salad, hot sauce, and banana", price: "$20" },
      { name: "Rice with Chicken", desc: "Spiced chicken over basmati rice — served with salad, hot sauce, and banana", price: "$20" },
    ],
  },
  {
    name: "Pasta Plates",
    items: [
      { name: "Pasta with Goat Meat", desc: "East African-style pasta with slow-cooked goat — served with salad, hot sauce, and banana", price: "$20" },
      { name: "Pasta with Beef", desc: "East African-style pasta with seasoned beef — served with salad, hot sauce, and banana", price: "$20" },
      { name: "Pasta with Chicken", desc: "East African-style pasta with chicken — served with salad, hot sauce, and banana", price: "$20" },
    ],
  },
  {
    name: "Specialties",
    items: [
      { name: "Sports Combination", desc: "Feeds two — choice of beef, chicken, fish, or goat with all the sides", price: "$40" },
      { name: "Basmati Fried Rice & Goat", desc: "Wok-fried basmati rice with tender goat meat", price: "$19.99" },
      { name: "Basmati Fried Rice & Lamb Chops", desc: "Fried rice with grilled lamb chops", price: "$23.99" },
      { name: "Chicken Suqar & Fried Rice", desc: "Sautéed spiced chicken with basmati fried rice", price: "$19.99" },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Somali Tea (Shaah)", desc: "Spiced black tea brewed with cardamom, cloves, and cinnamon", price: "$2" },
      { name: "Somali Coffee (Qaxwo)", desc: "Traditional Somali coffee with cardamom — served black", price: "$2" },
      { name: "Mango Juice", desc: "Bottled mango juice", price: "$1" },
      { name: "Soda", desc: "Coke or Sprite", price: "$1" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" style={{ backgroundColor: "#f5efe4", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              color: "#c9a96e",
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Our Offerings
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
            The Menu
          </h2>
          <div style={{ width: "50px", height: "1px", backgroundColor: "#c9a96e", margin: "0 auto" }} />
        </div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
          {categories.map((cat) => (
            <div key={cat.name}>
              {/* Category heading */}
              <h3
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  color: "#2c6e8a",
                  marginBottom: "1.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid #e8d5b0",
                }}
              >
                {cat.name}
              </h3>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-playfair), serif',
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "#3d2b1f",
                        }}
                      >
                        {item.name}
                      </span>
                      <p style={{ color: "#8a7a6a", fontSize: "0.88rem", marginTop: "0.2rem", lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                    <span
                      style={{
                        color: "#c9a96e",
                        fontWeight: 600,
                        fontSize: "1rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          style={{
            textAlign: "center",
            color: "#8a7a6a",
            fontSize: "0.85rem",
            marginTop: "3rem",
            fontStyle: "italic",
          }}
        >
          All dishes are prepared fresh daily. Ask about our daily specials.
        </p>
      </div>
    </section>
  );
}
