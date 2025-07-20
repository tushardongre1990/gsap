import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import { useState } from "react";

function App() {
  gsap.registerPlugin(useGSAP);

  const [circle, setCircle] = useState(0);

  let random = gsap.utils.random(-500, 500, 100, true);

  useGSAP(() => {
    gsap.to(".circle", {
      x: circle,
      duration: 0.5,
    });
  }, [circle]);
  return (
    <main>
      <button
        onClick={() => {
          setCircle(random);
          console.log(circle);
        }}
      >
        Animate
      </button>
      <div className="circle"></div>
    </main>
  );
}

export default App;
