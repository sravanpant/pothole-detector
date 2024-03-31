"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);

  const successCallBack = (position: GeolocationPosition) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const errorCallBack = (error: GeolocationPositionError) => {
    console.log(error);
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
    } else {
      console.log("Geolocation is not supported");
    }
  });
  // navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
