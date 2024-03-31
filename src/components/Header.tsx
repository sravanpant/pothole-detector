import Image from "next/image";
import React from "react";
import logoImg from "/public/PaveAlert.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex p-10">
      <div className="flex">
        <Image src={logoImg} alt="logo" width={50} height={50} />
        <div className="grid grid-row-2">
          <span className="font-bold text-lg px-1">PaveAlert</span>
          <span className="font-bold text-md px-1">
            Detecting Potholes, Protecting Pathways
          </span>
        </div>
      </div>
      <div className="flex pt-2 justify-center">
        <div className="font-bold text-xl px-10 justify-between py-2">
          <Link href={"/"}>Home</Link>
        </div>
        <div className="font-bold text-xl px-10 justify-between py-2">
          <Link href={"/aboutUs"}>About Us</Link>
        </div>
        <div className="font-bold text-xl px-10 justify-between py-2">
          <Link href={"/accidentAreas"}>Accident Prone Areas</Link>
        </div>
      </div>
      <div className="justify-end pl-80">
        <Button
          asChild
          className=" bg-[#1b212c] text-white rounded-full hover:bg-blue-700 font-bold"
        >
          <Link href="/">Report Pothole</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
