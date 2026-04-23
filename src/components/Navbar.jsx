import { Link } from "react-router-dom";

function Navbar() {
  return (
    //Main navigation bar with dark red background
    <nav style={{
      background: "#8B1A1A",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ color: "#f5f0e8", fontFamily: "Georgia, serif", fontSize: "24px" }}>
        🍝 Bella Roma
      </h1>
         {/* Navigation links on the right */}
      <div>
        <Link to="/" style={{ color: "#f5f0e8", marginRight: "25px", fontSize: "16px" }}>Home</Link>
        <Link to="/menu" style={{ color: "#f5f0e8", marginRight: "25px", fontSize: "16px" }}>Menu</Link>
        <Link to="/reservations" style={{ color: "#f5f0e8", fontSize: "16px" }}>Reservations</Link>
      </div>
    </nav>
  );
}

export default Navbar;