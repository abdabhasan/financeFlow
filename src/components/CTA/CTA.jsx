import { useState } from "react";
import img from "../../assets/blog/cta.png";
import "./CTA.scss";
const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Show a success message or redirect the user to a thank-you page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show an error message
      });
  };

  return (
    <div className="cta">
      <div className="cta__container  section__padding">
        <div className="cta__container_img">
          <img src={img} alt="img" />
        </div>
        <div className="cta__container_heading">
          <h1>Subscribe to our crypto news weekly newsletter!</h1>
        </div>
        <div className="cta__container_mail">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTA;
