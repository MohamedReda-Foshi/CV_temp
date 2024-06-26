import React from "react";
import Project from "./Project";

export default function PHD() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Doctor of philosophy in physics </h1>

      <div className="leading-relaxed">
        <h2 className="text-3xl font-thin py-4 px-1 ">Thesis title: </h2>
          <div className=" px-4 space-y-4">

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          voluptatibus earum maxime eveniet voluptas? Atque quod obcaecati,
          fugiat explicabo iusto reprehenderit, minima autem praesentium,
          pariatur deserunt corporis modi similique. Ad?
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          eos sed repudiandae, in, praesentium expedita cumque vitae odit
          dignissimos fugit atque odio! Voluptates soluta ullam temporibus
          cumque quo eligendi quaerat?
        </p>

          </div>
          
        <div className="py-6">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-thin ">Etudes d'antennes microrubans: dans le domaine spectral</h1>
          </div>
          <div className=" flex-col w-full lg:flex-row flex gap-4 item-center">
                          <div className=" lg:w-3/12 drop-shadow-xl  p-3">
                          <a href="https://www.amazon.com/Etudes-dantennes-microrubans-spectral-Omn-Univ-Europ/dp/3841799663" className="drop-shadow-xl overflow-hidden rounded-xl inline-block">
                              <img src="/book.jpg" className="object-cover transform transition duration-300 hover:scale-110" alt="book" />
                          </a>

                            
                          </div>

                    <div className="py-8 space-y-3 w-3/4 text-pretty">
                        <h1 className="text-xl font-thin">wdsaww</h1>
                      <p className="leading-relaxed font-thin">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                      
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                        
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                      </p>
                      <h1 className="text-xl font-thin">wdsaww</h1>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                        dolor voluptatum esse dolorem iusto et fuga qui,
              
                      </p>
                      
                    </div>
          </div>
        </div>

        <div className="flex-col md:flex-row flex gap-5 ">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}
