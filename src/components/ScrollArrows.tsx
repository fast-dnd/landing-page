"use client";

import React from "react";
import Image from "next/image";

const ScrollArrows = () => {
  const scrollToIntro = () => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Image
      className="mt-20 cursor-pointer"
      src="/images/welcome-arrows-down.png"
      width={64}
      height={75}
      alt="welcome-arrows-down"
      onClick={scrollToIntro}
    />
  );
};

export default ScrollArrows;
