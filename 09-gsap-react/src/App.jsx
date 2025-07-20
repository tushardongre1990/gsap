import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import { useRef } from "react";
// import { useRef } from "react";

function App() {
  gsap.registerPlugin(useGSAP);
  // const boxRef = useRef();

  // useGSAP(() => {
  //   gsap.from(boxRef.current, {
  //     duration: 1,
  //     delay: 0.5,
  //     // x: 500,
  //     y: 200,
  //     opacity: 0,
  //     rotate: 45,
  //   });
  // });

  // useGSAP(
  //   () => {
  //     gsap.from(".box", {
  //       duration: 1,
  //       delay: 0.5,
  //       // x: 500,
  //       y: 800,
  //       opacity: 0,
  //       rotate: 720,
  //     });
  //   },
  //   { scope: ".container-1" }
  // );

  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.from(".box", {
        duration: 1,
        delay: 0.5,
        // x: 500,
        y: 800,
        opacity: 0,
        rotate: 720,
      });
    },
    { scope: containerRef }
  );
  return (
    <main>
      {/* <div ref={gsapRef} className="box"></div> */}

      <div ref={containerRef} className="container-1">
        <div className="circle"></div>
        <div className="box"></div>
      </div>

      <div className="container-2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}

export default App;
