import { useState, useEffect } from "react";

function Reservations() {
  // State to store reservations fetched from the API
  const [reservations, setReservations] = useState([]);
  const [customer, setCustomer] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  // State to show a success message after booking
  const [message, setMessage] = useState("");
 // Fetch existing reservations from the API when the page loads
  useEffect(() => {
    fetch("https://restaurant-admin-g0j5.onrender.com/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://restaurant-admin-g0j5.onrender.com/admin/reservation/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customer, guests, date }),
    }).then(() => {
      // Refresh the reservations list after adding a new one
      fetch("https://restaurant-admin-g0j5.onrender.com/api/reservations")
        .then((res) => res.json())
        .then((data) => setReservations(data));

      
      setCustomer("");
      setGuests("");
      setDate("");
      // Show a success message to the customer
      setMessage("Reservation booked successfully! We look forward to seeing you.");
    });
  };

  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ color: "#8B1A1A", textAlign: "center", marginBottom: "40px", fontSize: "36px" }}>
          Reservations
        </h1>

        {/* Booking Form */}
        <div style={{ background: "#3b2a1a", padding: "30px", borderRadius: "8px", marginBottom: "40px" }}>
          <h2 style={{ color: "#e8c97a", marginBottom: "20px" }}>Book a Table</h2>

          {message && (
            <p style={{ color: "#e8c97a", marginBottom: "15px" }}>{message}</p>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ color: "#f5f0e8", display: "block", marginBottom: "5px" }}>Your Name:</label>
              <input
                type="text"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ color: "#f5f0e8", display: "block", marginBottom: "5px" }}>Number of Guests:</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#f5f0e8", display: "block", marginBottom: "5px" }}>Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "none" }}
              />
            </div>
            <button type="submit" style={{
              background: "#8B1A1A",
              color: "#f5f0e8",
              border: "none",
              padding: "12px 30px",
              fontSize: "16px",
              borderRadius: "4px",
              width: "100%"
            }}>
              Book Table
            </button>
          </form>
        </div>

       
        <h2 style={{ color: "#8B1A1A", marginBottom: "20px" }}>Current Reservations</h2>
        {reservations.length === 0 ? (
          <p>No reservations yet.</p>
        ) : (
          // Loop through and display each reservation
          reservations.map((r) => (
            <div key={r._id} style={{
              background: "white",
              padding: "15px 20px",
              borderRadius: "8px",
              marginBottom: "10px",
              borderLeft: "4px solid #8B1A1A"
            }}>
              <h3 style={{ color: "#8B1A1A", marginBottom: "5px" }}>{r.customer}</h3>
              <p>Guests: {r.guests}</p>
              <p>Date: {r.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Reservations;