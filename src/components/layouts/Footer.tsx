function Footer() {
  return (
    <div
      style={{
        background: "#4D6B88",
        display: "flex",
        gap: 200,
        justifyContent: "center",
        padding: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          color: "white",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
          Features
        </p>
        <p style={{ fontSize: 17 }}>Quality</p>
        <p style={{ fontSize: 17 }}>Sustainable Products</p>
        <p style={{ fontSize: 17 }}>Unique Designs</p>
        <p style={{ fontSize: 17 }}>Affordable Prices</p>
        <p style={{ fontSize: 17 }}>Customer Satisfaction</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          color: "white",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
          Products
        </p>
        <p style={{ fontSize: 17 }}>Men's Clothing</p>
        <p style={{ fontSize: 17 }}>Women's Clothing</p>
        <p style={{ fontSize: 17 }}>Accessories</p>
        <p style={{ fontSize: 17 }}>Footwear</p>
        <p style={{ fontSize: 17 }}>Children's Apparel</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          color: "white",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
          About Us
        </p>
        <p style={{ fontSize: 17 }}>Our Story</p>
        <p style={{ fontSize: 17 }}>Mission & Vision</p>
        <p style={{ fontSize: 17 }}>Meet Our Team</p>
        <p style={{ fontSize: 17 }}>Careers</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          color: "white",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>
          Follow Us
        </p>
        <p style={{ fontSize: 17 }}>Facebook</p>
        <p style={{ fontSize: 17 }}>Instagram</p>
        <p style={{ fontSize: 17 }}>Tiktok</p>
        <p style={{ fontSize: 17 }}>Pinterest</p>
      </div>
    </div>
  );
}

export default Footer;
