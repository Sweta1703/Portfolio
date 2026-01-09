import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  // Outer orbit - larger radius
  const outerSkills = [
    "react",
    "nodejs",
    "Express",
    "MongoDB",
    "javascript",
    "tailwindcss",
    "html5",
    "css3",
    "vitejs",
    "stripe",
  ];

  // Inner orbit - smaller radius
  const innerSkills = [
    "git",
    "github",
    "AWS",
    "MySQL",
    "Java",
    "C",
    "Postman",
    "visualstudiocode",
    "threejs",
    "Vercel",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Outer orbit with larger icons */}
      <OrbitingCircles iconSize={32} radius={155}>
        {outerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      {/* Inner orbit with smaller icons */}
      <OrbitingCircles iconSize={28} radius={90} reverse speed={1.5}>
        {innerSkills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
