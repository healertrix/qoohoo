import React from "react";
import { Corsel } from "../components/coursel";
import { Card } from "./card";
import { ContentCard } from "./contentCard";

import { gsap } from "gsap";
export const Hero = () => {
  const boxRef = React.useRef();

  const [open, setOpen] = React.useState(false);
  const [model, setModel] = React.useState("/modelb.jpg");
  function handleClick(e) {
    setModel("/modelblack.jpg");
    gsap.fromTo(
      ".themodel",
      { opacity: 0, x: "-3.5vw" },
      { opacity: 1, duration: 1, x: "0" }
    );
  }
  function handleClickk(e) {
    setModel("/man_model.jpg");
    gsap.fromTo(
      ".themodel",
      { opacity: 0, x: "-3.5vw" },
      { opacity: 1, duration: 1, x: "0" }
    );

  }
  function handleClickkk(e) {
    setModel("/modelemo.jpg");
    gsap.fromTo(
      ".themodel",
      { opacity: 0, x: "-3.5vw" },
      { opacity: 1, duration: 1, x: "0" }
    );

  }
  function activateLasers(e) {
    setOpen(!open);
    gsap.to(".box", { rotation: "+=360", y: "5vw", opacity: "0" });
    gsap.to(".modelImage", { x: "25vw", duration: 1 });
    gsap.to(".cards", { x: "15vw", opacity: "0" });
    gsap.to(".clothname", { y: "-15vw", x: "-6vw" });
    gsap.to(".cbody", { y: "-25vw", opacity: "1", duration: 1.3 });
    gsap.to(".cbodyy", { y: "-35vw", opacity: "1", duration: 1.3 });

    gsap.to(".addbtn", { y: "-15vw", opacity: 1, duration: 1 });
    gsap.to(".animecardd", {  opacity: 0, duration: 1 });
    
  }

  React.useEffect(() => {
    gsap.to(".summer", {
      opacity: 1,
      duration: 2.5,
    });
  });
  React.useEffect(() => {
    gsap.fromTo(
      ".manmod",
      { opacity: 0.5, y: "-3.5vw" },
      { opacity: 1, duration: 1, y: "0" }
    );
    gsap.fromTo(
      ".themodel",
      { opacity: 0.5, x: "-3.5vw" },
      { opacity: 1, duration: 1, x: "0" }
    );
    gsap.fromTo(
      ".animecard",
      { opacity: 0.5, y: "3.5vw" },
      { opacity: 1, duration: 1, y: "0" }
    );
    gsap.fromTo(
      ".svger",
      { opacity: 0.5, y: "1vw" },
      { opacity: 1, duration: 1, y: "0" }
    );
    gsap.to("#round", { rotation: "+=720", duration: 15, repeat: -1 });
    gsap.to("#triangle", { rotation: "+=720", duration: 100, repeat: -1 });
   

  });

  return (
    <>
      <div className=" z-0" id="">
        <img
          src={"/triangle.svg"}
          className="cards "
          id="triangle"
          style={{
            marginLeft: "50vw",
            marginTop: "-0.5vw",
            height: "70%",
            opacity: 0.5,
          }}
        />
      </div>
      <div
        className="hero min-h-screen bg-base-200 	 "
        style={{ background: "white" }}
      >
        <div className=" cards manmod " style={{ marginLeft: "88vw" }}>
          <img
            src={"/man_model.jpg"}
            className="max-w-xs		 rounded-lg shadow-xl z-0 "
          />
        </div>
        <div className="summer">
          <img
            src={"/summer.svg"}
            className="max-w-xs		rounded-lg shadow-xl z-1 cards summer "
            style={{ marginLeft: "65vw", opacity: 0.1 }}
            ref={boxRef}
          />
        </div>
        <div>
          <img
            src={"/bar.svg"}
            className="max-w-xs		rounded-lg cards "
            style={{ marginLeft: "55vw", height: "100%" }}
          />
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="flex-row animecard " style={{ marginRight: "15vw" }}>
            <div className="flex-row mb-5 gap-5	cards ">
              <Card />
            </div>
            <img
              src={"/gola.svg"}
              className="cards svger "
              id="gola"
              style={{
                marginLeft: "10vw",
                marginTop: "1.5vw",
                height: "70%",
                opacity: 1,
              }}
            />
            <div className="flex-row gap-5 cards 	 ">
              <Card />
              <div className=" " id="">
                <img
                  src={"/round1.svg"}
                  className="cards svger"
                  id="round"
                  style={{ marginLeft: "-50vw", height: "70%", opacity: 0.8 }}
                />
              </div>{" "}
            </div>
          </div>

          <div className="modelImage">
            <img
              src={model}
              className="max-w-md rounded-lg shadow-2xl themodel"
            />
          </div>
          <div className=" box " onClick={activateLasers}>
            <img
              src="/plus.svg"
              alt=""
              className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md	"
            />
          </div>
          <div
            className="addbtn drop-shadow-md box ml-3"
            style={{ display: open ? "flex" : "none", opacity: 0 }}
          >
            <img
              src="/addbttn.svg"
              alt=""
              width="80"
              height="80"
              className="hover:-translate-y-1 hover:scale-105 duration-300 drop-shadow-md	"
            />
          </div>
          <div className="clothname flex-col  lg:flex-row-reverse md:ml-20 2xl:ml-0 sm:ml-15	">
            <p className="text-5xl "> Blue Hoodie</p>
          </div>
        </div>
      </div>
      <div
        className="flex-col m-10 content-center justify-center gap-1"
        style={{ display: open ? "flex" : "none", opacity: 1 }}
      >
        <p className="text-4xl cbodyy ml-20 mb-3">$67</p>
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
          <p
            className="ml-10 text-xl "
            style={{ color: "rgba(124, 181, 53, 1)", marginTop: "2.0vw" }}
          >
            {" "}
            Size Guide
          </p>
          <div className="">
            <img
              src={"/triangle.svg"}
              className=" "
              id="triangle"
              style={{
                marginLeft: "30vw",
                marginTop: "3.5vw",
                height: "56%",
                opacity: 1,
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="flex gap-4 cbody ml-5 mr-5 "
        style={{
          display: open ? "flex" : "none",
          opacity: 0,
          marginTop: "-5.0vw",
        }}
      >
        <div onClick={handleClick}>
          <Corsel src="/modelblack.jpg" />
        </div>
        <div onClick={handleClickk}>
          <Corsel src="/man_model.jpg" />
        </div>
        <div onClick={handleClickkk}>
          <Corsel src="/modelemo.jpg" />
        </div>
      </div>
    </>
  );
};;;
