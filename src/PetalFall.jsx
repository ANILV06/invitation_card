
import "./PetalFall.css";

function PetalFall() {
  const petals = Array.from({ length: 50 }, (_, i) => {
    const random = (min, max) => Math.random() * (max - min) + min;

    const startRotation = random(-360, 360);

    return {
      id: i,
      style: {
        "--x": `${random(0, 100)}vw`,
        "--drift": `${random(-100, 100)}px`,
        "--drift-end": `${random(-150, 150)}px`,
        "--duration": `${random(10, 15)}s`,
        "--delay": `${random(-15, 0)}s`,
        "--scale": random(0.4, 1).toFixed(2),
        "--rotate-start": `${startRotation}deg`,
        "--rotate-end": `${startRotation * -0.7}deg`,
        "--rotate-final": `${startRotation * 1.5}deg`,
        "--opacity": random(0.25, 0.7).toFixed(2),
      },
    };
  });

  return (
    <div className="fall-container" aria-hidden="true">
      <div className="falling">
        {petals.map((petal) => (
          <div
            className="item flower"
            key={petal.id}
            style={petal.style}
          >
            <div className="item-inner" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetalFall;
