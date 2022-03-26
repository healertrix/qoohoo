import React from "react";
import { Corsel } from "../components/coursel";
import { Card } from "./card";
import { ContentCard } from "./contentCard";

import { gsap } from "gsap";
export const Hero = () => {
  // React.useEffect(() => {
  //   gsap.to(".box", { rotation: "+=300" });

  const [open, setOpen] = React.useState(false);
  const [model, setModel] = React.useState("/model.jpg");
 function handleClick ()  {
   setModel(
     "https://api.lorem.space/image/fashion?w=400&h=225"
   );
 };
  
  function activateLasers(e) {
    setOpen(!open);
    gsap.to(".box", { rotation: "+=360", y: "5vw", opacity: "0" });
    gsap.to(".modelImage", { x: "25vw", duration: 1, scale: 1.1 });
    gsap.to(".cards", { x: "15vw", opacity: "0" });
    gsap.to(".clothname", { y: "-15vw" });
    gsap.to(".cbody", { y: "-25vw", opacity: "1", duration: 1.3 });
    gsap.to(".cbodyy", { y: "-35vw", opacity: "1", duration: 1.3 });

    gsap.to(".addbtn", { opacity: 1, duration: 1 });
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200 ">
        <div className=" cards  " style={{ marginLeft: "90vw" }}>
          <img
            src={
              "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            className="max-w-xs		 rounded-lg shadow-xl "
          />
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="flex-row ">
            <div className="flex-row mb-5 gap-5	cards ">
              <Card />
            </div>
            <div></div>
            <div className="flex-row gap-5 cards	 ">
              <Card />
              <div></div>
            </div>
          </div>

          <div className="modelImage">
            <img src={model} className="max-w-md rounded-lg shadow-2xl" />
          </div>
          <div className=" box " onClick={activateLasers}>
            <img
              src="/plus.svg"
              alt=""
              className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md	"
            />
          </div>

          <div className="clothname flex-col  lg:flex-row-reverse 	">
            <p className="text-5xl "> Yellow Hoodie</p>
            <div></div>
          </div>
        </div>
      </div>
      <div
        className="flex-col m-10 content-center justify-center gap-1"
        style={{ display: open ? "flex" : "none", opacity: 1 }}
      >
        <p className="text-4xl cbodyy ml-20">$87</p>
        <p className="cbodyy ml-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel
          obcaecati{" "}
        </p>
        <p className="text-2xl cbodyy ml-20">Select Size</p>
        <div className="ml-20 flex gap-1 mt-3 cbodyy">
          <img
            src="/L.svg"
            alt=""
            className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md	"
            width="35"
            height="35"
          />
          <img
            src="/S.svg"
            alt=""
            className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md"
            width="35"
            height="35"
          />
          <img
            src="/M.svg"
            alt=""
            className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md	"
            width="35"
            height="35"
          />
        </div>
      </div>
      <div
        className="flex gap-4 cbody ml-2 "
        style={{ display: open ? "flex" : "none", opacity: 0 }}
        onClick={handleClick}
      >
        <Corsel src="/moely1.jpg" />
        <Corsel src="/model2.jpg" />
        <Corsel src="/moely1.jpg" />
      </div>
    </>
  );
};;
