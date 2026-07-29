import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { useEffect } from "react";
import { getConfig } from "../data/siteConfig";

const SocialIcons = () => {
  const config = getConfig();

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={config.socialLinks.facebook} target="_blank">
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a href={config.socialLinks.linkedin} target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href={config.socialLinks.twitter} target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href={config.socialLinks.instagram} target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <div className="policy-links-container">
        <a className="policy-link" href="/terms">
          T&C
        </a>
        <a className="policy-link" href="/privacy">
          PP
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
