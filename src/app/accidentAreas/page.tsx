import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import regionImg from "/public/regionidimage.png";
import overSpeedingImg from "/public/overspeeding2014.png";

const AccidentAreas = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-5">
        <div className="px-4">
          <span className="font-bold text-5xl flex justify-center">
            Accident Prone States
          </span>
          <span className="text-3xl py-5 flex justify-center">
            Based on the data collected on Accident Prone Areas, it is found
            that the following regions are highly prone to accidents -
          </span>
          <div className="text-3xl py-5 px-10 grid grid-cols-4">
            <div>
              <span className="font-bold">Region - 1:</span>
              <ul>
                <li>• Bihar</li>
                <li>• Haryana</li>
                <li>• Himachal Pradesh</li>
                <li>• Jammu & Kashmir</li>
                <li>• Punjab</li>
                <li>• Uttarakhand</li>
                <li>• Uttar Pradesh</li>
                <li>• Chandigarh</li>
                <li>• Delhi</li>
              </ul>
            </div>
            <div>
              <span className="font-bold">Region - 2:</span>
              <ul>
                <li>• Andhra Pradesh</li>
                <li>• Karnataka</li>
                <li>• Kerela</li>
                <li>• Tamil Nadu</li>
                <li>• Puducherry</li>
              </ul>
            </div>
            <div>
              <span className="font-bold">Region - 4:</span>
              <ul>
                <li>• Goa</li>
                <li>• Gujurat</li>
                <li>• Maharashtra</li>
                <li>• D & N Haveli</li>
                <li>• Daman & Diu</li>
              </ul>
            </div>
            <div>
              <span className="font-bold">Region - 9:</span>
              <ul>
                <li>• Chattisgarh</li>
                <li>• Jharkhand</li>
                <li>• Madhya Pradesh</li>
                <li>• Orissa</li>
                <li>• Telengana</li>
              </ul>
            </div>
          </div>
          <div className="text-3xl font-bold pt-10 pb-3">Graphical Data:- </div>
          <div className="text-2xl ">
            The major cause of accident is over-speeding. Here is a graphical
            representation of the number of accidents caused by over-speeding.
          </div>
          <div className="py-10 px-10 grid grid-cols-2">
            <div className="flex justify-end px-3">
              <Image src={regionImg} alt="regionid" width={485} height={485} />
            </div>
            <div className="flex justify-start px-3">
              <Image
                src={overSpeedingImg}
                alt="overspeeding"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentAreas;
