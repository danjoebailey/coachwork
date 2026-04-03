import { useState } from "react";

const CARS = [
  {
    id: 1, name: "Ferrari 250 GTO", year: 1962,
    info: "Only 36 ever built. Most expensive car ever sold at auction.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/1963_Ferrari_250_GTO_%2836705025970%29.jpg/1280px-1963_Ferrari_250_GTO_%2836705025970%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/1962_Ferrari_250_GTO_red_2019_Monterey.jpg/1280px-1962_Ferrari_250_GTO_red_2019_Monterey.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ferrari_250_GTO_Ser.II_1964_%2814405036759%29.jpg/1280px-Ferrari_250_GTO_Ser.II_1964_%2814405036759%29.jpg",
    ],
  },
  {
    id: 2, name: "Ford Mustang Fastback", year: 1968,
    info: "The original pony car. Born on American asphalt.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1968_Ford_Mustang_GT390_Fastback.jpg/1280px-1968_Ford_Mustang_GT390_Fastback.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/1967_Ford_Mustang_fastback%2C_front_8.22.19.jpg/1280px-1967_Ford_Mustang_fastback%2C_front_8.22.19.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/1969_Ford_Mustang_Boss_429_fastback_%2814547956699%29.jpg/1280px-1969_Ford_Mustang_Boss_429_fastback_%2814547956699%29.jpg",
    ],
  },
  {
    id: 3, name: "Porsche 911 S", year: 1967,
    info: "Air-cooled flat-six. Still the benchmark.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Porsche_911_S_1970.jpg/1280px-Porsche_911_S_1970.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Porsche_911_2.4_S_Coupe_%281972%29_%2833985755720%29.jpg/1280px-Porsche_911_2.4_S_Coupe_%281972%29_%2833985755720%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Porsche_911_2.0_coupe_%281965%29_%2832814167004%29.jpg/1280px-Porsche_911_2.0_coupe_%281965%29_%2832814167004%29.jpg",
    ],
  },
  {
    id: 4, name: "Jaguar E-Type", year: 1961,
    info: "Enzo Ferrari called it the most beautiful car ever made.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jaguar_E-Type_Series_I_3.8_Roadster_%281961%29_%2833511094524%29.jpg/1280px-Jaguar_E-Type_Series_I_3.8_Roadster_%281961%29_%2833511094524%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Jaguar_E-Type_Coupe_%281961%29_%2833626454811%29.jpg/1280px-Jaguar_E-Type_Coupe_%281961%29_%2833626454811%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jaguar_E-type_Series_1_%281961%29.jpg/1280px-Jaguar_E-type_Series_1_%281961%29.jpg",
    ],
  },
  {
    id: 5, name: "Lamborghini Miura", year: 1966,
    info: "Mid-engine V12 before anyone else dared.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Lamborghini_Miura_P400S_%281971%29_%2832980736028%29.jpg/1280px-Lamborghini_Miura_P400S_%281971%29_%2832980736028%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lamborghini_Miura_P400_%281966%29_%2833811049055%29.jpg/1280px-Lamborghini_Miura_P400_%281966%29_%2833811049055%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lamborghini_Miura_rear.jpg/1280px-Lamborghini_Miura_rear.jpg",
    ],
  },
  {
    id: 6, name: "Aston Martin DB5", year: 1964,
    info: "James Bond's ride. 282 bhp of British cool.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Aston_Martin_DB5_%281964%29_%2833782804424%29.jpg/1280px-Aston_Martin_DB5_%281964%29_%2833782804424%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Aston_Martin_DB5_silver.jpg/1280px-Aston_Martin_DB5_silver.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Aston_Martin_DB5_rear.jpg/1280px-Aston_Martin_DB5_rear.jpg",
    ],
  },
  {
    id: 7, name: "Mercedes-Benz 300SL", year: 1954,
    info: "Gullwing doors. First fuel-injected production car.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/1955_Mercedes-Benz_300SL_Gullwing_Coupe_34.jpg/1280px-1955_Mercedes-Benz_300SL_Gullwing_Coupe_34.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mercedes_Benz_300SL_%281954%29_%2833823912970%29.jpg/1280px-Mercedes_Benz_300SL_%281954%29_%2833823912970%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_300_SL_Roadster_%281957%29_%2833351116062%29.jpg/1280px-Mercedes-Benz_300_SL_Roadster_%281957%29_%2833351116062%29.jpg",
    ],
  },
  {
    id: 8, name: "Chevrolet Corvette C2", year: 1963,
    info: "Split-window coupe. Never repeated. Never forgotten.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/1963_Corvette_Sting_Ray.jpg/1280px-1963_Corvette_Sting_Ray.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/1963_Chevrolet_Corvette_Sting_Ray_Split_Window_Coupe_%2814588024829%29.jpg/1280px-1963_Chevrolet_Corvette_Sting_Ray_Split_Window_Coupe_%2814588024829%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/1967_Chevrolet_Corvette_Sting_Ray_427.jpg/1280px-1967_Chevrolet_Corvette_Sting_Ray_427.jpg",
    ],
  },
  {
    id: 9, name: "Shelby Cobra 427", year: 1966,
    info: "427 cubic inches. Zero to sixty in 4.2 seconds — in 1966.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shelby_Cobra_427_%281966%29_%2814583319238%29.jpg/1280px-Shelby_Cobra_427_%281966%29_%2814583319238%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Shelby_Cobra_427_-_front.jpg/1280px-Shelby_Cobra_427_-_front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Shelby_427_Cobra_at_Road_America_%2828705072316%29.jpg/1280px-Shelby_427_Cobra_at_Road_America_%2828705072316%29.jpg",
    ],
  },
  {
    id: 10, name: "BMW 2002 Turbo", year: 1973,
    info: "The car that invented the sport sedan.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/BMW_2002_turbo_%281973%29_%2833228692984%29.jpg/1280px-BMW_2002_turbo_%281973%29_%2833228692984%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/BMW_2002_tii_%281974%29_%2832984163183%29.jpg/1280px-BMW_2002_tii_%281974%29_%2832984163183%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/1973_BMW_2002_Turbo_%2814401991960%29.jpg/1280px-1973_BMW_2002_Turbo_%2814401991960%29.jpg",
    ],
  },
];

const DARK = {
  bg: "#0f0f0f", headerBg: "#0f0f0f", headerBorder: "#1c1c1c",
  wordmark: "#ffffff", tagline: "#aaaaaa",
  imgBorder: "#1c1c1c", imgBg: "#141414", fallbackText: "#555",
  carName: "#ffffff", info: "#aaaaaa",
  toggleBg: "#1c1c1c", toggleColor: "#aaaaaa",
};

const LIGHT = {
  bg: "#f2f0eb", headerBg: "#f2f0eb", headerBorder: "#dedad4",
  wordmark: "#111111", tagline: "#444444",
  imgBorder: "#dedad4", imgBg: "#e8e4de", fallbackText: "#999",
  carName: "#111111", info: "#444444",
  toggleBg: "#e4e0da", toggleColor: "#444444",
};

function Modal({ car, onClose }) {
  return (
    <div style={m.backdrop}>
      {/* Close */}
      <button onClick={onClose} style={m.close}>✕</button>

      {/* Counter */}
      <div style={m.counter}>{car.name} · {car.year}</div>

      {/* Scrollable photo stack */}
      <div style={m.scroll}>
        {car.photos.map((photo, i) => (
          <div key={i} style={m.slide}>
            <img src={photo} alt={`${car.name} ${i + 1}`} style={m.img} />
            {i === 0 && (
              <div style={m.caption}>
                <p style={m.captionText}>{car.info}</p>
              </div>
            )}
            {i < car.photos.length - 1 && (
              <div style={m.arrowWrap}>
                <div style={m.arrow}>↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CarCard({ car, t, onOpen }) {
  return (
    <div>
      <div onClick={onOpen} style={{ width: "100%", aspectRatio: "2/1", background: t.imgBg, borderRadius: 3, border: `1px solid ${t.imgBorder}`, overflow: "hidden", cursor: "pointer" }} className="car-img-box">
        <img src={car.photos[0]} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }} className="car-img" />
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: t.carName, letterSpacing: "0.06em" }}>{car.name}</span>
          <span style={{ fontSize: 12, color: "#e63c1e", letterSpacing: "0.05em" }}>{car.year}</span>
        </div>
        <p style={{ fontSize: 11, color: t.info, lineHeight: 1.7, letterSpacing: "0.03em" }}>{car.info}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState(null);
  const t = dark ? DARK : LIGHT;

  return (
    <div style={{ minHeight: "100vh", background: t.bg, fontFamily: "'DM Mono', monospace", transition: "background 0.25s" }}>
      <style>{css}</style>

      <header style={{ padding: "20px 24px 16px", borderBottom: `1px solid ${t.headerBorder}`, position: "sticky", top: 0, background: t.headerBg, zIndex: 10, transition: "background 0.25s, border-color 0.25s" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span style={{ color: "#e63c1e", fontSize: 16 }}>◈</span>
            <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "0.14em", color: t.wordmark, transition: "color 0.25s" }}>COACHWORK</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 10, color: t.tagline, letterSpacing: "0.1em", lineHeight: 1.8, textAlign: "right", transition: "color 0.25s" }}>The classics.<br />Nothing else.</span>
            <button onClick={() => setDark(d => !d)} style={{ background: t.toggleBg, border: "none", borderRadius: 99, padding: "5px 10px", cursor: "pointer", fontSize: 13, color: t.toggleColor, transition: "all 0.25s", fontFamily: "inherit" }}>
              {dark ? "☀︎" : "☾"}
            </button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px 100px", display: "flex", flexDirection: "column", gap: 52 }}>
        {CARS.map(car => <CarCard key={car.id} car={car} t={t} onOpen={() => setSelected(car)} />)}
      </main>

      {selected && <Modal car={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

const m = {
  backdrop: {
    position: "fixed", inset: 0,
    background: "#000",
    zIndex: 200,
    overflowY: "auto",
  },
  close: {
    position: "fixed", top: 18, right: 20,
    background: "rgba(255,255,255,0.1)",
    border: "none", color: "#fff",
    fontSize: 14, width: 34, height: 34,
    borderRadius: "50%", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 210, fontFamily: "inherit",
  },
  counter: {
    position: "fixed", top: 22, left: 20,
    fontSize: 11, color: "rgba(255,255,255,0.4)",
    letterSpacing: "0.08em", zIndex: 210,
  },
  scroll: {
    display: "flex", flexDirection: "column",
  },
  slide: {
    position: "relative",
    width: "100%", minHeight: "100vh",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
  },
  img: {
    width: "100%", height: "100vh",
    objectFit: "cover", display: "block",
  },
  caption: {
    position: "absolute", bottom: 0, left: 0, right: 0,
    background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
    padding: "60px 28px 80px",
  },
  captionText: {
    fontSize: 13, color: "rgba(255,255,255,0.75)",
    lineHeight: 1.8, letterSpacing: "0.03em",
    maxWidth: 480,
  },
  arrowWrap: {
    position: "absolute", bottom: 24,
    left: "50%", transform: "translateX(-50%)",
  },
  arrow: {
    fontSize: 20, color: "rgba(255,255,255,0.5)",
    animation: "bob 1.5s ease-in-out infinite",
  },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .car-img-box:hover .car-img { transform: scale(1.03); }
  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
`;
