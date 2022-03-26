import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Nav } from '../components/navbar'
import { Hero } from '../components/hero'
import {Card} from '../components/card'
export default function Home() {
  return (
    <>
      <div class="relative bg-white" style="width: 1440px; height: 1024px;">
        <img
          class="absolute"
          style="width: 419px; height: 730px; left: 766px; top: 214px;"
          src="https://via.placeholder.com/419x730"
        />
        <p class="absolute text-5xl" style="left: 297px; top: 499px;">
          Old Gold Hoodie
          <br /> Sweatshirt
          <br />
        </p>
        <img
          class="w-20 h-20 absolute"
          style="left: 728px; top: 516px;"
          src="https://via.placeholder.com/75x75"
        />
        <div
          class="w-44 h-36 absolute bg-gray-300 rounded-lg"
          style="left: 1146px; top: 404px;"
        />
        <div
          class="w-44 h-36 absolute bg-gray-300 rounded-lg"
          style="left: 1146px; top: 715px;"
        />
      </div>
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

