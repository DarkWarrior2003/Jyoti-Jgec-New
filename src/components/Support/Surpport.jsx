import React from "react";
import "./supportstyle.css"
const Support = () => {
  return (
    <div className="supportbackground pb-10">
      <p className="lg:text-[48px] text-center md:text-6xl pb-4 pt-8 underline " style={{color: "rgb(98, 62, 8)"}}>
        Support Us
      </p>
      <div className="flex flex-row  md:gap-8 lg:gap-14  md:p-8 lg:px-28">
        <img
          src="https://rabbit_olive_306.pineapplebuilder.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Faurity%2Fimage%2Fupload%2Fv1694328286%2FWhats_App_Image_2023_09_10_at_12_14_30_PM_b679950020.jpg&w=640&q=90"
          className=" w-2/4 mb-8 support-img  rounded-lg"
          alt=""
          style={{ boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)" }}
        />
        <div className="support mt-0 lg:mt-6">
          <p className="lg:text-2xl md:text-4xl" style={{color: "rgb(98, 62, 8)"}}>A/c no: 34615713229</p>
          <p className="lg:text-2xl md:text-4xl" style={{color: "rgb(98, 62, 8)"}}>IFSC: SBIN0007194</p>
          <p className="lg:text-2xl md:text-4xl" style={{color: "rgb(98, 62, 8)"}}>Branch: Denguajhar</p>
          <p className="pt-6 md:text-[28px] lg:text-[25px] font-medium italic text-amber-800">
            Your support for this noble cause can help us to run this centre
            better, since this centre is a separate body in our college. Your
            contributions can help poor children to read and write and in turn
            help us to increase the literacy rate in this poverty-stricken
            district, thus helping to improve their life. Help us to keep
            burning the light of INDIA - “JYOTI”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;