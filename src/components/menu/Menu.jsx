import "./menu.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="contact-info">
        <div className="contact-item">
          <Mail className="icon" />
          <a href="mailto:amir.hossein.akbari59@gmail.com">
            amir.hossein.akbari59@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <Person className="icon" />
          <a href="tel:+4917631732291">+49 176 3173 2291</a>
        </div>
      </div>
    </div>
  );
}
