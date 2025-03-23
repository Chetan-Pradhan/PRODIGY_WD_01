import { Container } from "react-bootstrap";
import "./app.js";
import tesla from "./assets/tesla.png";
import bmw from "./assets/bmw.png";
import mclaren from "./assets/mclaren.png";
import merce from "./assets/merce.png";
import audi from "./assets/audi.png";
import "./herosection.css";
import { useRef } from "react";

export default function Hero_section() {
  return (
    <div>
      <div>
        <div className="car">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={tesla} alt="tesla img" className="carImg"></img>
          </div>
          <div className="texts">
            <h3 style={{ fontSize: "20PX" }}>Tesla Model S</h3>
            <p style={{ fontSize: "14px", width: "500px" }}>
              The Tesla Model S redefines luxury electric sedans with its
              cutting-edge technology and remarkable performance. Its sleek
              aerodynamic design, combined with a minimalist interior, offers a
              futuristic driving experience. With powerful dual-motor all-wheel
              drive and the latest autopilot features, the Model S ensures both
              speed and safety. The spacious cabin is complemented by a
              panoramic glass roof and a cinematic 17-inch touchscreen for
              seamless entertainment.
            </p>
            <h4 style={{ fontSize: "20px" }}>Features :</h4>

            <ul style={{ width: "500px", fontSize: "14px" }}>
              <li>
                Long Range: Efficient with an extended range, perfect for long
                drives.
              </li>
              <li>
                Plaid: Built for speed, offering lightning-fast acceleration and
                unparalleled performance.
              </li>
            </ul>
          </div>
        </div>
        <div className="car">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={bmw} alt="tesla img" className="carImg"></img>
          </div>
          <div className="texts">
            <h3 style={{ fontSize: "20px" }}>BMW X5</h3>
            <p style={{ fontSize: "14px", width: "500px" }}>
              The BMW X5 is the embodiment of premium SUVs, delivering a perfect
              blend of luxury, power, and utility. Its bold exterior,
              highlighted by the iconic kidney grille, is matched by a
              sophisticated interior with leather upholstery and a panoramic
              sunroof. State-of-the-art digital displays and driver-assist
              features ensure a connected and safe driving experience. With
              multiple engine options, the X5 is designed to tackle any terrain.
            </p>
            <h4 style={{ fontSize: "20px" }}>Features :</h4>

            <ul style={{ width: "500px", fontSize: "14px" }}>
              <li>
                xDrive40i: Smooth and efficient with a powerful inline-6 engine.
              </li>
              <li>
                Plaid: Built for speed, offering lightning-fast acceleration and
                unparalleled performance.
              </li>
              <li>
                M60i: High-performance V8 engine with M Sport features for
                adrenaline-pumping drives.
              </li>
            </ul>
          </div>
        </div>
        <div className="car">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={audi} alt="tesla img" className="carImg"></img>
          </div>
          <div className="texts">
            <h3 style={{ fontSize: "20px" }}>Audi Q7</h3>
            <p style={{ fontSize: "14px", width: "500px" }}>
              The Audi Q7 is a luxury SUV that combines robust performance with
              elegant design. Its bold presence is complemented by Matrix-design
              LED headlights and a striking front grille. The spacious 7-seater
              interior is equipped with premium leather, ambient lighting, and a
              fully digital instrument cluster. Advanced driver-assist systems
              make every journey secure and comfortable.
            </p>
            <h4 style={{ fontSize: "20px" }}>Features :</h4>

            <ul style={{ width: "500px", fontSize: "14px" }}>
              <li>
                Premium 45 TFSI: Ideal for everyday driving with a turbocharged
                engine.
              </li>
              <li>
                Premium Plus: Enhanced with luxury features like a panoramic
                sunroof and upgraded sound system.
              </li>
              <li>
                Prestige 55 TFSI: Designed for performance enthusiasts with a
                powerful V6 engine.
              </li>
            </ul>
          </div>
        </div>
        <div className="car">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={merce} alt="tesla img" className="carImg"></img>
          </div>
          <div className="texts">
            <h3 style={{ fontSize: "20px" }}>Mercedes-Benz GLC</h3>
            <p style={{ fontSize: "14px", width: "500px" }}>
              The Mercedes-Benz GLC is the epitome of elegance and innovation in
              the luxury compact SUV segment. With its sculpted body lines and
              signature LED headlights, it leaves a lasting impression. Inside,
              the GLC offers a modern dashboard featuring an 11.9-inch
              touchscreen infotainment system, paired with ambient lighting that
              can be customized. Advanced driver-assistance technology ensures a
              smooth and safe ride.
            </p>
            <h4 style={{ fontSize: "20px" }}>Features :</h4>

            <ul style={{ width: "500px", fontSize: "14px" }}>
              <li>
                GLC 300: A balance of performance and luxury, ideal for city and
                highway driving.
              </li>
              <li>
                GLC 300 4MATIC: Equipped with all-wheel drive for enhanced
                stability in all conditions.
              </li>
            </ul>
          </div>
        </div>
        <div className="car">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={mclaren} alt="tesla img" className="carImg"></img>
          </div>
          <div className="texts">
            <h3 style={{ fontSize: "20px" }}>McLaren Artura</h3>
            <p style={{ fontSize: "14px", width: "500px" }}>
              The McLaren Artura is a next-generation hybrid supercar that
              seamlessly blends electrification with thrilling performance.
              Designed with a lightweight carbon fiber monocoque, it offers
              exceptional agility and handling. The plug-in hybrid system
              combines a twin-turbo V6 engine with an electric motor, providing
              an exhilarating driving experience with reduced emissions.
            </p>
            <h4 style={{ fontSize: "20px" }}>Features :</h4>

            <ul style={{ width: "500px", fontSize: "14px" }}>
              <li>Engine: 3.0L Twin-Turbo V6 with Electric Motor</li>
              <li>Power: 671 hp</li>
              <li>
                Design Features: Aerodynamic body, dihedral doors, and a
                futuristic cockpit with a driver-focused infotainment system.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
