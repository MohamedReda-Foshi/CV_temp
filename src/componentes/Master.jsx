import React from "react";

function Master() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold"> Master's in physics </h1>
      </div>

      <div className="space-y-6 ">
        <div className="flex  flex-col gap-4">
          <div>
            <h1 className="text-3xl font-thin flex px-3 ">Optical and molecular spectroscopy</h1>
          </div>
          <div className="px-9">

                      <div className="overflow-auto h-96">
                        <img
                          src="/Master.jpg"
                          className="w-screen h-full overflow-hidden rounded-lg object-cover "
                          alt="dw"
                          />
                      </div>
                      <div>
                      <p className="pt-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolor
                        voluptatum esse dolorem iusto et fuga qui, Ab dolor voluptatum esse
                        dolorem iusto et fuga qui Ab dolor voluptatum esse dolorem iusto et
                        fuga qui
                      </p>
                    </div>
            </div>
        </div>



        <div className="space-y-3 px-4">
          <div>
            <h1 className="text-2xl font-thin flex items-center">Master </h1>
          </div>
          <div className="px-4 space-y-3 max-w-4xl">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolor
              voluptatum esse dolorem iusto et fuga qui Ab dolor voluptatum esse
              dolorem iusto et fuga qui
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolor
              voluptatum esse dolorem iusto et fuga qui,
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolor
              voluptatum esse dolorem iusto et fuga qui,
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Master;
