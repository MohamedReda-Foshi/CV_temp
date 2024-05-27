import React from "react";
import Timeline from "./Timeline";
import PHD from "./PHD";
import ContantExp from "./ContantExp";
import Master from "./Master";

function Experiences() {
  return (
    <div id="Experiences" className="px-7">
      <div className=" flex items-center justify-center  ">
        <Timeline />
      </div>

      <div className="py-10">
        <div className="py-8" id="first">
          <ContantExp />
        </div>
        <div className="py-8" id="second">
          <Master/>
        </div>
        <div className="py-8" id="third">
          <PHD />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
