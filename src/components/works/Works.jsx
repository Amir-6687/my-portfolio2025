import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: process.env.PUBLIC_URL + "/assets/mobile.png",
      title: "Nike Store",
      desc: "Professional e-commerce website with shopping cart and order management features.",
      img: process.env.PUBLIC_URL + "/assets/Nike.jpg",
      link: "https://amir-6687.github.io/ecommerce/",
    },
    {
      id: 2,
      icon: process.env.PUBLIC_URL + "/assets/globe.png",
      title: "Tarkhineh",
      desc: "Restaurant website with menu, gallery and contact form.",
      img: process.env.PUBLIC_URL + "/assets/Tarkhineh.png",
      link: "https://amir-6687.github.io/Tarkhineh/",
    },
    {
      id: 3,
      icon: process.env.PUBLIC_URL + "/assets/writing.png",
      title: "Amir Estate",
      desc: "Buy and sell platform for real estate with advanced filtering system.",
      img: process.env.PUBLIC_URL + "/assets/Amir.jpg",
      link: "https://amir-estate.netlify.app/",
    },
    {
      id: 4,
      icon: process.env.PUBLIC_URL + "/assets/writing.png",
      title: "The Girl's Club",
      desc: "Modern community website with interactive features, blog and event management.",
      img: process.env.PUBLIC_URL + "/assets/Girl's-Club-Logo.png",
      link: "https://thegrrrlsclub.de/",
    },
  ];

  const handleclick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
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
                    <img src={d.icon} alt={`${d.title} project icon`} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <button
                    className="view-project-btn"
                    onClick={() =>
                      window.open(d.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="right">
                <div className="right">
                  <img src={d.img} alt={`${d.title} project screenshot`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-container">
        <HiChevronLeft
          className="arrow left"
          onClick={() => handleclick("left")}
        />
        <HiOutlineChevronRight
          className="arrow right"
          onClick={() => handleclick("right")}
        />
      </div>
    </div>
  );
}
