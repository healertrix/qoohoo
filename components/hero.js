import { Card } from "./card";
import { gsap } from "gsap";
import React from "react";
export const Hero = () => {
  // React.useEffect(() => {
  //   gsap.to(".box", { rotation: "+=300" });

  // });

  function activateLasers(e) {
    gsap.to(".box", { rotation: "+=360", y: "5vw", opacity: "0" });
    gsap.to(".modelImage", { x: "25vw", duration: 1 });
    gsap.to(".cards", { x: "15vw", opacity: "0" });
    gsap.to(".clothname",{y:"-15vw"});
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
          
          {/* <button class="btn btn-active btn-secondary">ADD</button> */}

          <p className="text-5xl clothname"> Yellow Hoodie</p>
        </div>
      </div>
    </>
  );
};
