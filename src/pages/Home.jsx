import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <div style={{
        background: "#8B1A1A",
        color: "#f5f0e8",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>Welcome to Bella Roma</h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>Authentic Italian cuisine in the heart of Toronto</p>
        <Link to="/reservations" style={{
          background: "#f5f0e8",
          color: "#8B1A1A",
          padding: "12px 30px",
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "4px"
        }}>
          Book a Table
        </Link>
      </div>

       {/* About section  */}
      <div style={{ maxWidth: "700px", margin: "50px auto", padding: "0 20px", textAlign: "center", flex: "1" }}>
        <h2 style={{ color: "#8B1A1A", marginBottom: "15px" }}>Our Story</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
          Bella Roma has been serving authentic Italian recipes since 1995.
          Our dishes are made with fresh ingredients and traditional techniques
          passed down through generations. Come experience the warmth of Italy
          right here in Toronto.
        </p>
      </div>

      
      <div style={{
        background: "#3b2a1a",
        color: "#f5f0e8",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        flexWrap: "wrap"
      }}>
        <div>
          <h2 style={{ color: "#e8c97a", marginBottom: "15px" }}>Hours</h2>
          <p>Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 10am - 11pm</p>
        </div>
        <div>
          <h2 style={{ color: "#e8c97a", marginBottom: "15px" }}>Location</h2>
          <p>123 Main Street</p>
          <p>Toronto, ON</p>
        </div>
        <div>
          <h2 style={{ color: "#e8c97a", marginBottom: "15px" }}>Contact</h2>
          <p>Phone: (416) 555-1234</p>
          <p>Email: info@bellaroma.com</p>
        </div>
      </div>


      <div style={{
        background: "#3b2a1a",
        color: "#f5f0e8",
        textAlign: "center",
        padding: "15px",
        fontSize: "14px",
        borderTop: "1px solid #5a3e28"
      }}>
        <p>© 2026 Bella Roma. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;