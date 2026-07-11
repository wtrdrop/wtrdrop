import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { getConfig } from "../data/siteConfig";

const Contact = () => {
  const config = getConfig();


  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                {config.contact.email}
              </a>
            </p>
            <h4>Focus</h4>
            <p>{config.contact.focus}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={config.socialLinks.facebook}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href={config.socialLinks.linkedin}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href={config.socialLinks.twitter}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href={config.socialLinks.instagram}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href={config.socialLinks.googleMaps}
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Google Maps <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              A Product of <br /> 
              <span>
                WtrDrop
              </span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
