import React from "react";
import "./styles/TechStack.css";

const techs = [
  { name: "Flutter", color: "#54C5F8" },
  { name: "Dart", color: "#00B4AB" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Firestore", color: "#FFA000" },
  { name: "Cloud Functions", color: "#EF5350" },
  { name: "Google Maps", color: "#4CAF50" },
  { name: "FCM", color: "#FF7043" },
  { name: "GetX", color: "#9C27B0" },
  { name: "Auth", color: "#42A5F5" },
  { name: "QR Scanner", color: "#26C6DA" },
  { name: "Node.js", color: "#8BC34A" },
  { name: "Git", color: "#F4511E" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <div className="tech-grid">
        {techs.map((tech, i) => (
          <div
            className="tech-pill"
            key={i}
            style={{ "--pill-color": tech.color } as React.CSSProperties}
          >
            <span className="tech-dot" />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
