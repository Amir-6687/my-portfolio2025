import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import BottomNav from "./components/bottomNav/BottomNav";
import WhatsAppButton from "./components/whatsappButton/WhatsAppButton";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
        <BottomNav />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;
