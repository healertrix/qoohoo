import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Nav } from '../components/navbar'
import { Hero } from '../components/hero'
import { ContentCard } from "../components/contentCard";

import { Footer } from '../components/footer'
import { gsap } from "gsap";
 import React from "react";

export default function Home() {

  const boxRef = React.createRef();


// wait until DOM has been rendered
React.useEffect(() => {
  gsap.to(".box", { rotation: "+=360" });
});
  return (
    <>
      <Nav />
      <Hero />
      {/* <Footer /> */}
    </>
  );

       
}

// import React from "react";
// import styled from "@emotion/styled";

// export default function Home() {
//   return (
//     <>
//       <RootWrapper22V1VoEqf1
//         src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//         alt="image of _22V1VoEqf1"
//       />
//     </>
//   );
// }

// const RootWrapper22V1VoEqf1 = styled.img`
//   width: 821px;
//   height: 617px;
//   object-fit: cover;
// `;

