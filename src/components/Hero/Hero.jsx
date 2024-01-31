import React from "react";
import "./herostyle.css"
const Hero = () => {
  return (
    <div className=" herobackground mt-4 ml-2 ">
      <div className=" grid grid-cols-2 ">
        <div className="  lg:h-[80vh]"></div>
        <div className=" pt-[2em]  ">
          <div className=" font-medium p-8  text-[30px]  " style={{ color: "rgb(154 99 18)" }}>
            Welcome to Jyoti: A Ray of Hope. This initiative, established in
            2020, is a testiment to the commitment of the students from JGEC.
            <br/><span className="text-red-500">Our mission</span> is to offer quality education and guidance to
            underprivileged children. With the unwavering support of our college
            alumini, we have been successfully running this initiative for over
            a decade. Join us ase we continue to illuminate young minds and
            foster a brighter future.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
