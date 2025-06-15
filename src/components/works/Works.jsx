import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: process.env.PUBLIC_URL + "/assets/mobile.png",
      title: "Nike Store",
      desc: "Professioneller Online-Shop mit Warenkorb und Bestellfunktionen.",
      img: process.env.PUBLIC_URL + "/assets/Nike.jpg",
      link: "https://amir-6687.github.io/ecommerce/",
    },
    {
      id: 2,
      icon: process.env.PUBLIC_URL + "/assets/globe.png",
      title: "Tarkhineh",
      desc: "Restaurant-Website mit Speisekarte, Galerie und Kontaktformular.",
      img: (
        <img
          src={process.env.PUBLIC_URL + "/assets/Tarkhineh.png"}
          alt="Tarkhineh Restaurant"
        />
      ),
      link: "https://amir-6687.github.io/Tarkhineh/",
    },
    {
      id: 3,
      icon: process.env.PUBLIC_URL + "/assets/writing.png",
      title: "Amir Estate",
      desc: "Kauf- und Verkaufsplattform für Immobilien mit Filtersystem.",
      img: process.env.PUBLIC_URL + "/assets/Amir.jpg",
      link: "https://amir-estate.netlify.app/",
    },
  ];

  const handleclick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span
                    onClick={() =>
                      window.open(d.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    Projekt ansehen
                  </span>
                </div>
              </div>
              <div className="right">
                <div className="right">
                  <img src={d.img} alt={d.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.png"}
        className="arrow left"
        alt=""
        onClick={() => handleclick("left")}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/arrow.png"}
        className="arrow right"
        alt=""
        onClick={() => handleclick("right")}
      />
    </div>
  );
}
