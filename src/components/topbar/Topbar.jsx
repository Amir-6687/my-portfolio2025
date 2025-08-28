import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Amir Akbari
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+49 123 45 67</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mail@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
