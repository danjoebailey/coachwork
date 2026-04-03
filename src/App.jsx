import { useState } from "react";

const CARS = [
  {
    id: 1, name: "Ferrari 250 GTO", year: 1962,
    info: "With only 36 units produced between 1962 and 1964, the Ferrari 250 GTO was engineered by Giotto Bizzarrini as a homologation special for GT racing and has become the most valuable car ever sold at auction, fetching over $48 million. Its 3.0-liter Colombo V12 engine produced 300 horsepower and carried the car to three consecutive FIA World GT Championship titles.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/250_GTO.jpg/1280px-250_GTO.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ferrari_250_GTO_rear_%28520935929%29.jpg/1280px-Ferrari_250_GTO_rear_%28520935929%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Ferrari_250_GTO_in_1962.png",
    ],
  },
  {
    id: 2, name: "Ford Mustang Fastback", year: 1968,
    info: "The 1968 Ford Mustang Fastback was immortalized as Steve McQueen's Highland Green chase car in the film Bullitt, where its 390-cubic-inch V8 powered one of cinema's most celebrated pursuit sequences through San Francisco. The Fastback's sleek roofline distinguished it from the coupe and convertible variants and became the definitive muscle-car silhouette of the era.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ford_Mustang_Bullitt_390_1968.jpg/1280px-Ford_Mustang_Bullitt_390_1968.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bullitt_Mustang_on_display_on_the_National_Mall_01.jpg/1280px-Bullitt_Mustang_on_display_on_the_National_Mall_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Ford_Mustang_Bullitt_Replica_GT_Fastback_1968.jpg/1280px-Ford_Mustang_Bullitt_Replica_GT_Fastback_1968.jpg",
    ],
  },
  {
    id: 3, name: "Porsche 911 S", year: 1967,
    info: "The 1967 Porsche 911 S was the high-performance variant of the original 911, featuring a 2.0-liter air-cooled flat-six producing 160 horsepower with Webber carburetors and distinctive Fuchs forged alloy wheels that became an icon of sports car design. It established the template for every subsequent 911 S model and cemented Porsche's rear-engined sports car as a serious rival to the established Italian marques.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Porsche_911_S_2.0_%281967%29._%2855025432246%29.jpg/1280px-Porsche_911_S_2.0_%281967%29._%2855025432246%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Porsche_911_S_2.0_%281967%29._%2855025687009%29.jpg/1280px-Porsche_911_S_2.0_%281967%29._%2855025687009%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Porsche_911_S_2.0_%281967%29._%2855025759130%29.jpg/1280px-Porsche_911_S_2.0_%281967%29._%2855025759130%29.jpg",
    ],
  },
  {
    id: 4, name: "Jaguar E-Type", year: 1961,
    info: "Famously described by Enzo Ferrari as 'the most beautiful car ever made,' the Jaguar E-Type debuted at the 1961 Geneva Motor Show and stunned the world with its 150-mph top speed from a 3.8-liter straight-six engine at a fraction of the price of comparable Italian exotics. Its aerodynamic body was derived from the Le Mans-winning D-Type race car and became a defining symbol of 1960s British automotive culture.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/1962_Jaguar_E-Type_8.jpg/1280px-1962_Jaguar_E-Type_8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Jaguar_E-Type_Low_Drag_Coupe_1964.jpg/1280px-Jaguar_E-Type_Low_Drag_Coupe_1964.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/1962_Jaguar_E-Type_EGAL.jpg/1280px-1962_Jaguar_E-Type_EGAL.jpg",
    ],
  },
  {
    id: 5, name: "Lamborghini Miura", year: 1966,
    info: "The Lamborghini Miura, designed by Marcello Gandini at Bertone, is widely regarded as the world's first supercar thanks to its revolutionary transverse mid-mounted 3.9-liter V12 engine producing 350 horsepower and a top speed of 171 mph. Named after the Spanish fighting bull breed, it debuted at the 1966 Geneva Motor Show and single-handedly redefined the expectations for high-performance road cars.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/1967_Lamborghini_Miura_P400.jpg/1280px-1967_Lamborghini_Miura_P400.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lamborghini_Miura_P400_S_Classic-Days_2022_DSC_0086.jpg/1280px-Lamborghini_Miura_P400_S_Classic-Days_2022_DSC_0086.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Lamborghini_Miura_S_%281969%29_-_52879472147.jpg/1280px-Lamborghini_Miura_S_%281969%29_-_52879472147.jpg",
    ],
  },
  {
    id: 6, name: "Aston Martin DB5", year: 1964,
    info: "The Aston Martin DB5, powered by a 4.0-liter straight-six producing 282 horsepower, became the most famous car in cinema history after Sean Connery drove it as James Bond in Goldfinger (1964), complete with ejector seat and revolving license plates. Only 1,059 saloons were built between 1963 and 1965, making it one of the most coveted grand tourers of the era.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Aston_Martin_DB5_%281964%29_1X7A7872.jpg/1280px-Aston_Martin_DB5_%281964%29_1X7A7872.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/1964_Aston_Martin_DB5_4.0_Front.jpg/1280px-1964_Aston_Martin_DB5_4.0_Front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Aston_Martin_DB5_1964.jpg/1280px-Aston_Martin_DB5_1964.jpg",
    ],
  },
  {
    id: 7, name: "Mercedes-Benz 300SL", year: 1954,
    info: "The Mercedes-Benz 300SL 'Gullwing' was the fastest production car of its day, reaching 161 mph thanks to its fuel-injected 3.0-liter inline-six -- making it the first production car to feature mechanical direct fuel injection. Its iconic upward-opening gullwing doors were an engineering necessity dictated by the car's tubular space frame chassis, and only 1,400 coupes were produced between 1954 and 1957.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mercedes_Benz_300SL_gullwing_1954_2993cc.jpg/1280px-Mercedes_Benz_300SL_gullwing_1954_2993cc.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/1955_Mercedes_300_SL_Gullwing.jpg/1280px-1955_Mercedes_300_SL_Gullwing.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/1955_Black_Mercedes-Benz_300SL.jpg/1280px-1955_Black_Mercedes-Benz_300SL.jpg",
    ],
  },
  {
    id: 8, name: "Chevrolet Corvette C2", year: 1963,
    info: "The 1963 Corvette Sting Ray, designed by Larry Shinoda under Bill Mitchell's direction, introduced the iconic split rear window coupe that was produced for one year only, making it the most collectible Corvette ever built. It was the first Corvette to offer independent rear suspension and was available with the legendary 327-cubic-inch small-block V8 producing up to 360 horsepower with fuel injection.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/1963_Chevrolet_C2_Corvette_Stingray_coupe_%286997873806%29.jpg/1280px-1963_Chevrolet_C2_Corvette_Stingray_coupe_%286997873806%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/1963_C-2_Corvette_split_window_01.jpg/1280px-1963_C-2_Corvette_split_window_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/%2763_Corvette_split_window.JPG/1280px-%2763_Corvette_split_window.JPG",
    ],
  },
  {
    id: 9, name: "Shelby Cobra 427", year: 1966,
    info: "The Shelby Cobra 427, born from Carroll Shelby's audacious idea of stuffing Ford's 427-cubic-inch big-block V8 into a lightweight AC Ace chassis, produced 425 horsepower and could reach 60 mph in just 4.2 seconds -- making it one of the fastest accelerating production cars of the 1960s. The competition S/C (Semi-Competition) version remains among the most valuable American cars ever built, with originals commanding over $5 million at auction.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/1965_Shelby_Cobra_427_%28LMC%29.jpg/1280px-1965_Shelby_Cobra_427_%28LMC%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/1966_Shelby_Cobra_427.jpg/1280px-1966_Shelby_Cobra_427.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/1965_AC_Cobra_427.jpg/1280px-1965_AC_Cobra_427.jpg",
    ],
  },
  {
    id: 10, name: "BMW 2002 Turbo", year: 1973,
    info: "The BMW 2002 Turbo was Europe's first turbocharged production car, producing 170 horsepower from its KKK-turbocharged 2.0-liter four-cylinder and reaching 130 mph, but its launch during the 1973 oil crisis made its aggressive reversed-script 'Turbo' front spoiler lettering and fuel consumption politically controversial. Only 1,672 units were built before production ended in 1975, making it a rare and pivotal car that foreshadowed BMW's future M-car performance dynasty.",
    photos: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BMW_2002_Turbo_%282008-06-28%29_ret.jpg/1280px-BMW_2002_Turbo_%282008-06-28%29_ret.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BMW_2002_turbo_Front.JPG/1280px-BMW_2002_turbo_Front.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/BMW_2002_turbo_%2852870354136%29.jpg/1280px-BMW_2002_turbo_%2852870354136%29.jpg",
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
