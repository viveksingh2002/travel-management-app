// TravelPackages.jsx
import React, { useEffect, useState } from "react";
import "./BrowsePackages.css";


const BrowsePackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Simulated fetch from backend
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          title: "Beach Paradise",
          duration: "5 Days, 4 Nights",
          price: "$799",
          description: "Relax on pristine beaches with crystal-clear water.",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          title: "Mountain Adventure",
          duration: "7 Days, 6 Nights",
          price: "$999",
          description: "Explore mountain trails, camping, and breathtaking views.",
          image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          title: "City Explorer",
          duration: "3 Days, 2 Nights",
          price: "$499",
          description: "Discover vibrant city life, museums, and fine dining.",
          image:
            "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
        },
      ];
      setPackages(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Our Travel Packages</h1>
      <div className="row gy-4">
        {packages.map(({ id, title, duration, price, description, image }) => (
          <div key={id} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={image} className="card-img-top" alt={title} style={{ height: 160, objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted flex-grow-1">{description}</p>
                <p className="fw-bold text-primary">
                  {duration} - {price}
                </p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => alert(`You selected the "${title}" package!`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowsePackages;