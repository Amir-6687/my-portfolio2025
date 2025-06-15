import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: process.env.PUBLIC_URL + "/assets/mobile.png",
      title: "Web Design",
      desc: "Modernes und responsives Webdesign für eine optimale Benutzererfahrung.",
      img: "https://via.placeholder.com/300x200?text=Mobile+App",
    },
    {
      id: 2,
      icon: process.env.PUBLIC_URL + "/assets/globe.png",
      title: "Mobile Application",
      desc: "Entwicklung leistungsstarker und intuitiver Apps für iOS und Android.",
      img: "https://via.placeholder.com/300x200?text=Web+Design",
    },
    {
      id: 3,
      icon: process.env.PUBLIC_URL + "/assets/writing.png",
      title: "Branding",
      desc: "Kreatives Branding für einen starken und einprägsamen Markenauftritt.",
      img: "https://via.placeholder.com/300x200?text=Content",
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
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://cdn.dribbble.com/userupload/14918242/file/original-b5341549c0511f82048d94a7d1775b2d.jpg?format=webp&resize=400x300&vertical=center"
                  alt=""
                />
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
