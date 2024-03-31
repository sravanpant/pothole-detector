import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import potholePic1 from "/public/pothole.jpg";
import potholePic2 from "/public/pothole2.jpg";
import potholePic3 from "/public/pothole3.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <main className="px-10 py-5">
        {/* title */}
        <h1 className="font-black text-4xl flex justify-start">
          REPORT POTHOLE
        </h1>

        <div>
          {/* Form to upload pics of potholes */}
          <div className="px-10 pt-10 pb-5 flex  ">
            <Image
              className=""
              src={potholePic1}
              alt="pothole-pic1"
              width={408}
              height={272}
            />
            <Image
              className=""
              src={potholePic2}
              alt="pothole-pic2"
              width={400}
              height={194}
            />
            <Image
              className=""
              src={potholePic3}
              alt="pothole-pic3"
              width={600}
              height={248}
            />
          </div>
          <div className="font-bold text-3xl px-16 pb-5">
            Your vigilance fuels safer streets, your reports pave the path to
            smoother commutes. Join us in creating a road network built on
            community care and shared responsibility!
          </div>
          <div className="flex justify-center px-32 py-16">
            <div className="grid w-full max-w-xl py-3 items-center gap-1.5">
              <Label
                className="flex justify-center font-bold text-3xl"
                htmlFor="picture"
              >
                Upload your picture here
              </Label>

              <div className="py-3">
                <Input
                  className="w-full rounded-xl bg-white"
                  type="file"
                  placeholder="Email"
                />
              </div>

              <div className="flex justify-center w-full py-3">
                <Button
                  type="submit"
                  className="hover:bg-black text-white rounded-full w-1/2 uppercase font-bold text-2xl bg-blue-950"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>

          {/* Form to upload their location */}
        </div>
      </main>
    </div>
  );
};

export default Hero;
