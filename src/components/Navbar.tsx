import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { getConfig } from "../data/siteConfig";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | undefined;

const Navbar = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!ScrollTrigger.isTouch) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        speed: 1,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);
    }

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          const elem = e.currentTarget as HTMLAnchorElement;
          const href = elem.getAttribute("href");
          if (href && href.startsWith("/#") && window.location.pathname === "/") {
            e.preventDefault();
            const section = href.replace("/", "");
            smoother?.scrollTo(section, true, "top top");
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  const config = getConfig();
  return (
    <>
      <div className={`header${pathname === "/" ? "" : " header-solid"}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/logo.png" alt="WtrDrop Dashboard Logo" className="navbar-logo-img" />
        </a>
        <a
          href={config.downloadLink}
          className="navbar-connect download-btn"
          data-cursor="disable"
        >
          <img src="/3d-icons/playstore.png" alt="Playstore" className="playstore-icon" />
          <span>Download Now</span>
        </a>
        <ul>
          <li>
            <a href="/">
              <HoverLinks text="HOME" />
            </a>
          </li>
          <li>
            <a href="/#about">
              <HoverLinks text="ABOUT US" />
            </a>
          </li>
          <li>
            <a href="/#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li>
            <a href="/help">
              <HoverLinks text="HELP CENTER" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
