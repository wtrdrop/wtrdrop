import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          A<span className="hat-h2">PP</span>
          <div>
            F<span className="do-h2">EATURES</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FOR CUSTOMERS</h3>
              <h4>Customer App Features</h4>
              <p>
                Schedule deliveries, track orders live on the map, and enjoy
                flexible payment options including cash or UPI on delivery. Get
                high-quality water delivered fast.
              </p>
              <h5>Key Capabilities</h5>
              <div className="what-content-flex">
                <div className="what-tags">Live Tracking</div>
                <div className="what-tags">Subscriptions</div>
                <div className="what-tags">Multiple Addresses</div>
                <div className="what-tags">Easy Ordering</div>
                <div className="what-tags">UPI & Cash</div>
                <div className="what-tags">Order History</div>
                <div className="what-tags">Notifications</div>
                <div className="what-tags">Support</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FOR PARTNERS</h3>
              <h4>Supplier & Driver App</h4>
              <p>
                Professional dispatch software to manage drivers, inventory, and
                automated settlements. Drivers get optimized map routing and
                daily cash collection tools.
              </p>
              <h5>Key Capabilities</h5>
              <div className="what-content-flex">
                <div className="what-tags">Route Optimization</div>
                <div className="what-tags">Supplier Dashboard</div>
                <div className="what-tags">Inventory Management</div>
                <div className="what-tags">Delivery QR Scans</div>
                <div className="what-tags">Automated Settlement</div>
                <div className="what-tags">Driver Earnings</div>
                <div className="what-tags">Empty Can Tracking</div>
                <div className="what-tags">Analytics</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
