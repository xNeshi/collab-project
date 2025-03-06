import React from "react";
import Image from "next/image";

export const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-white">
      <Image
        src={"/logo-only-xl.png"}
        alt="collab logo"
        height={120}
        width={120}
        className="object-cover rounded-3xl"
      ></Image>
    </div>
  );
};

export default SplashScreen;
