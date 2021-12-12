import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import CenterPicture from "../public/assets/center.png";

import styles from "../styles/home.module.css";

export default function Page() {

  // Play Audio
  useEffect(() => {
    console.log("play loading sound");
    const IntroAudio = new Audio("/assets/amongus.mp3")
    IntroAudio.play();
  },[])

  // Mouse Move
  function MouseMove() {
    if(Date.now() % 20 === 0) {
      const VineAudio = new Audio("/assets/vine.mp3");
      VineAudio.play();
    }
  }

  return (
    <>
      <Head>
        <title>bababooey</title>
      </Head>
        <div className={styles.main} onMouseMove={MouseMove}>
          <Image src={CenterPicture} layout="intrinsic" width={248} height={256} />
        </div>
    </>
    
  );
}