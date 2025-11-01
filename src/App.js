import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// ---- Data ----
const dishes = [
  {
    id: 1,
    title: "Sushi Platter",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    desc: "A delightful mix of nigiri, sashimi, and rolls with fresh ingredients.",
    price: "$25.00",
  },
  {
    id: 2,
    title: "Ramen Bowl",
    img: "https://embed.widencdn.net/img/beef/uvcfxwcidt/exact/Beef%20Ramen%20Noodle%20Bowl%20-%20NCBA%20Beef%20Aug%202024%20-%200047.jpg?keep=c&u=7fueml",
    desc: "Rich miso broth with pork, noodles, and a soft-boiled egg.",
    price: "$15.00",
  },
  {
    id: 3,
    title: "Okonomiyaki",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    desc: "Savory Japanese pancake with cabbage, pork, and special sauce.",
    price: "$12.00",
  },
];

// ---- Card Component ----
const CardBody = ({ title, img, desc, price, animationDelay }) => {
  const [liked, setLiked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const toggleLike = () => setLiked(!liked);
  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    setShowForm(false);
    setFormData({ name: "", email: "", number: "" });
  };

  return (
    <div
      className="card shadow animate__animated animate__zoomIn"
      style={{ animationDelay }}
    >
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">{price}</span>
          <div>
            <FontAwesomeIcon
              icon={faHeart}
              className={`me-3 ${liked ? "text-danger" : "text-secondary"}`}
              style={{ cursor: "pointer", fontSize: "1.3rem" }}
              onClick={toggleLike}
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-success"
              style={{ cursor: "pointer", fontSize: "1.3rem" }}
              onClick={toggleForm}
            />
          </div>
        </div>

        {showForm && (
          <form
            className="mt-3 border p-3 rounded bg-light animate__animated animate__fadeIn"
            onSubmit={handleSubmit}
          >
            <h6 className="mb-2">Buy Now 🛍️</h6>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// ---- Custom Navbar ----
const CustomNavbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div className="container">
      <a className="navbar-brand fw-bold fs-4 text-uppercase" href="#home">
        🍣 Nippon Eats
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// ---- Footer ----
const Footer = () => (
  <footer className="bg-dark text-white text-center py-4 mt-5">
    <div className="container">
      <p className="mb-0">
        © {new Date().getFullYear()} Nippon Eats | Built with ❤️ by GoMyCode
      </p>
    </div>
  </footer>
);
// ---- Main App ----
export default function App() {
  return (
    <>
      <CustomNavbar />
      <section id="home" className="hero-section text-white text-center">
        <div className="overlay">
          <div className="content">
            <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">
              Taste Japan’s Finest Dishes
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              Authentic flavors • Modern presentation • Unforgettable experience
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="container mt-5 pt-5">
        <h2 className="text-center mb-4 text-dark fw-semibold">
          🍱 Famous Japanese Dishes
        </h2>
        <div className="row cards-row">
          {dishes.map((d, idx) => (
            <div key={d.id} className="col-md-4 mb-4">
              <CardBody
                title={d.title}
                img={d.img}
                desc={d.desc}
                price={d.price}
                animationDelay={`${idx * 200}ms`}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="contact-section text-center py-5 bg-light"
      >
        <div className="container">
          <h2 className="fw-bold mb-4">📞 Contact Us</h2>
          <p>
            Have questions or special requests? Reach out to us — we’d love to
            hear from you!
          </p>
          <p>Email: contact@nippon-eats.jp | Phone: +81 123-456-789</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
