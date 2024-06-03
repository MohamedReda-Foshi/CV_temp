
import Button from "./Button";
import Card from "./Card";
import PerInfo from "./PerInfo";
import Progress from "./Progress";
import Progress2 from "./Progress2";

function About() {
  return (
    <div className=" px-9 pt-14">

    <div id="About" className=" flex flex-col  px-9  ">
        <h1 className="text-4xl font-bold pb-7">About</h1>
      <div className=" flex flex-col text-base/loose items-center space-y-9  p-2 rounded-xl">

        <div className=" md:grid grid-cols-3 gap-5  ">
          <div className="overflow-hidden">
            <div>

            <h2 className=" text-3xl font-bold block sm:hidden ">Professor Jaouad Foshi</h2>
            <div className="  h-[420px]  items-center">
               
                 
                 <img className="rounded-lg  w-full h-full  object-cover" src="/img2.jpg"  alt="imag2" />
              
            </div>

              <div className="bg-white-700 row-span-2">
                <div>
                  <p className="font-bold">Phone number: </p>
                  <p className="px-4">0661477392</p>

                </div>
                <div>
                  <p className="font-bold">Linkedin:</p>
                  <p className="px-4"> www.Linkedin/redafoshi</p>
                  
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p className="px-4"> reda.foshi@gmail.com</p>
                  
                </div>

              </div>

              <div>
                
              </div>
            </div>


          </div>
            
          <div className=" px-1 space-y-6 col-span-2 ">
            <div className=" font-bold space-y-2">
              <h2 className="text-3xl  sm:block hidden">Professor Jaouad Foshi</h2>
              <h2 className="text-2xl font-thin sm:block hidden">PhD in Physics</h2>
            </div>
            <div className="line-clamp-4 text-wrap leading-7	">
              
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, officiis. Fuga numquam aspernatur temporibus laudantium! Praesentium aperiam obcaecati numquam modi asperiores nemo porro.
              </p>
            </div>
            <PerInfo />
            <Button name="Cv download"/>

            <div className=" max-w-2xl ">
              <h2 className="text-2xl font-thin">University of Moulay Ismail</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iure officia repellendus natus et voluptate reprehenderit cumque, ipsam laborum adipisci delectus accusantium magni fugit! Voluptatem repellendus dolor asperiores quas dicta!
                </p>
            </div>
          </div>

        </div>
      </div>

      <div className=" ">
      <div className="my-6">
      

       
      </div>

      <div className="my-6 ">
        <h1 className="text-2xl font-thin ">Skills</h1>
      </div>

      <div className="py-5  flex-col sm:flex-row flex max-w-4 ">
        <Progress skill="html " level="100"/>
        <Progress2 skill="react " level="90"/>
        <Progress skill="java script" level="100"/>
        <Progress2 skill="tailwind css" level="90"/>
      </div>

      <div className=" flex flex-row py-8 ">
        <Card/>
      
    
      </div>

        </div>
    </div>
    </div>
  );
}

export default About;
