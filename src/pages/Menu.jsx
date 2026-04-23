import { useState, useEffect } from "react";

function Menu() {
    // State to store the menu items from the API
  const [items, setItems] = useState([]);
// Fetch menu items from the backend API when the component loads
  useEffect(() => {
    fetch("https://restaurant-admin-g0j5.onrender.com/api/menus")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  
  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ color: "#8B1A1A", textAlign: "center", marginBottom: "40px", fontSize: "36px" }}>
          Our Menu
        </h1>
{/* Show loading message while waiting for API response */}
        {items.length === 0 ? (
          <p style={{ textAlign: "center" }}>Loading menu...</p>
        ) : (
          categories.map((category) => (
            <div key={category} style={{ marginBottom: "40px" }}>
              <h2 style={{
                color: "#f5f0e8",
                background: "#8B1A1A",
                padding: "10px 20px",
                borderRadius: "4px",
                marginBottom: "15px"
              }}>
                {category}
              </h2>
               {/* Filter and display items  */}
              {items
                .filter((item) => item.category === category)
                .map((item) => (
                  <div key={item._id} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 10px",
                    borderBottom: "1px solid #c9b99a"
                  }}>
                    <span style={{ fontSize: "16px" }}>{item.name}</span>
                    <span style={{ color: "#8B1A1A", fontWeight: "bold" }}>${item.price}</span>
                  </div>
                ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;