import "./testimonials.scss";
import { PiArrowBendDownRightThin } from "react-icons/pi";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tina Durden",
      title: "Senior Developer",
      img: "https://media.istockphoto.com/id/1135381120/de/foto/portr%C3%A4t-einer-jungen-frau-im-freien-l%C3%A4chelnd.jpg?s=612x612&w=0&k=20&c=k0haRQxgOyOBLPrTszN2TH7y2Xm1MmQLS2Ha5I59J4A=",
      icon: process.env.PUBLIC_URL + "/assets/twitter.png",
      desc: "Modern and responsive web design for optimal user experience.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m7QHaKYers25wUwqGyVUDRnc2UnPiLhoWA&s",
      icon: process.env.PUBLIC_URL + "/assets/youtube.png",
      desc: "Development of powerful and intuitive apps for iOS and Android.",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO od ALBI",
      img: "https://lead-academy.org/wp-content/uploads/2022/10/2-418.jpg",
      icon: process.env.PUBLIC_URL + "/assets/linkedin.png",
      desc: "Creative branding for a strong and memorable brand presence.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <PiArrowBendDownRightThin className="left" />
              <img
                className="user"
                src={d.img}
                alt={`${d.name} profile picture`}
              />
              <img
                className="right"
                src={d.icon}
                alt={`${d.name} social media icon`}
              />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
