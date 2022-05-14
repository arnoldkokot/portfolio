import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p>Get in touch with me</p>
        <a href="mailto:hello@arnoldkokot.com" className="mail">
          hello@arnoldkokot.com
        </a>
        <div className="contact-links">
          <a
            href="https://github.com/arnoldkokot"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/deithyy"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/niearek/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
