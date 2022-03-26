import React from "react";

import { Card } from "./card";


import { gsap } from "gsap";
export const Hero = () => {
  // React.useEffect(() => {
  //   gsap.to(".box", { rotation: "+=300" });

  const [open, setOpen] = React.useState(false);


  function activateLasers(e) {
    setOpen(!open);
    gsap.to(".box", { rotation: "+=360", y: "5vw", opacity: "0" });
    gsap.to(".modelImage", { x: "25vw", duration: 1, scale: 1.1 });
    gsap.to(".cards", { x: "15vw", opacity: "0" });
    gsap.to(".clothname", { y: "-15vw" });
    
    gsap.to(".addbtn", { opacity: 1, duration: 1 });
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="flex-row ">
            <div className="flex-row mb-5 gap-5	cards ">
              <Card />
            </div>
            <div className="flex-row gap-5 cards	 ">
              <Card />
            </div>
          </div>
          <div className="modelImage">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              className="max-w-md rounded-lg shadow-2xl"
            />
          </div>
          <div className=" box " onClick={activateLasers}>
            <img
              src="/plus.svg"
              alt=""
              className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md	"
            />
          </div>

          <div className="clothname flex-col  lg:flex-row-reverse 	">
            <p className="text-5xl "> Yellow Hoodie</p>{" "}
            <div className="flex content-center">
              <button
                className="btn btn-active btn-secondary addbtn ml-20 mt-5	"
                style={{ display: open ? "block" : "none", opacity: 0 }}
              >
                ADD Item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};;
