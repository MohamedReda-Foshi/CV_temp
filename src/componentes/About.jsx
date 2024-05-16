import React from "react";

function About() {
  return (
    <div id="About">
      <div className="flex h-lvh text-base/loose">
        
          <div className="">
            <h1 className="text-3xl text-b font-bold">About</h1>

            <div className="flex flex-row items-center justify-center">
              <div>
                <img src="/img1.jpg" alt="imag2" />
              </div>

              <div className="flex-col px-4">
                <div className="text-3xl">
                  <h2>title</h2>
                  <h2>title</h2>
                  <h2>title</h2>
                </div>

                <div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus, officiis. Fuga numquam aspernatur temporibus
                    laudantium! Praesentium aperiam obcaecati numquam modi
                    asperiores nemo porro. Eaque illum excepturi ipsum magnam,
                    ab commodi!
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus, officiis. Fuga numquam aspernatur temporibus
                    laudantium! Praesentium aperiam obcaecati numquam modi
                    asperiores nemo porro. Eaque illum excepturi ipsum magnam,
                    ab commodi!
                  </p>
                </div>
              </div>
            </div>

          </div>
        
      </div>
    </div>
  );
}

export default About;
