import React from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiChatBubbleLeftRight,
  HiStar,
} from "react-icons/hi2";
import "./bottomNav.scss";

export default function BottomNav() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bottom-nav">
      <div className="nav-item" onClick={() => scrollToSection("intro")}>
        <HiHome className="nav-icon" />
        <span>Home</span>
      </div>

      <div className="nav-item" onClick={() => scrollToSection("about")}>
        <HiUser className="nav-icon" />
        <span>About</span>
      </div>

      <div className="nav-item" onClick={() => scrollToSection("works")}>
        <HiBriefcase className="nav-icon" />
        <span>Works</span>
      </div>

      <div className="nav-item" onClick={() => scrollToSection("testimonials")}>
        <HiStar className="nav-icon" />
        <span>Reviews</span>
      </div>

      <div className="nav-item" onClick={() => scrollToSection("contact")}>
        <HiChatBubbleLeftRight className="nav-icon" />
        <span>Contact</span>
      </div>
    </nav>
  );
}
