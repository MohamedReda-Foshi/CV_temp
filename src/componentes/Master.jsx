import React from "react";

function Master() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold"> Master's in physics </h1>
      </div>

      <div className="space-y-6 ">
        <div className="flex items-center flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center">Master //</h1>
          </div>
          <div className="overflow-auto h-96">
            <img
              src="/Master.jpg"
              className="w-screen h-full overflow-hidden rounded-lg object-cover px-9"
              alt="dw"
            />
          </div>
        </div>

        <div>
          <p className="px-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolor
            voluptatum esse dolorem iusto et fuga qui, Ab dolor voluptatum esse
            dolorem iusto et fuga qui Ab dolor voluptatum esse dolorem iusto et
            fuga qui
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <h1 className="text-2xl font-bold flex items-center">Master </h1>
          </div>
          <div className="px-4 space-y-3">
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
