import { useState } from "react";
import { Feature, Button } from "../../components";
import img from "../../assets/contact.png";
import "./ContactUs.scss";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send the form data to the server or a third-party service
    console.log("Form data:", { name, email, company, subject, message });
  };
  return (
    <section className="contact section__padding">
      <div className="contact__container">
        <div className="contact__container_heading">
          <h1>Get in touch</h1>
        </div>
        <div className="contact__container_touch">
          <div className="contact__container_touch_from">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="row my-2">
                  <div
                    className="col-lg-6 d-flex flex-column
d-flex flex-column gap-2 "
                  >
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Full Name"
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="email@example.com"
                    />
                  </div>
                  <div
                    className="col-lg-6  d-flex flex-column
d-flex flex-column gap-2  "
                  >
                    <label htmlFor="company">Company:</label>
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Name"
                    />
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div className="row my-2">
                  <div
                    className="col d-flex flex-column
d-flex flex-column gap-2 "
                  >
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Your Message"
                    />
                  </div>
                </div>
              </div>

              <Button text={"Send Message"} color={"btn-primary"} />
            </form>
          </div>
          <div className="contact__container_touch_reach">
            <h4>Want to reach us directly?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>
            <div className="contact__container_touch_reach_features">
              <Feature icon={img} text={"contact@example.com"} />
              <Feature icon={img} text={"support@example.com"} />
              <Feature icon={img} text={"press@example.com"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
