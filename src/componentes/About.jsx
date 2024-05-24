
import Button from "./Button";
import Card from "./Card";
import PerInfo from "./PerInfo";
import Progress from "./Progress";
import Progress2 from "./Progress2";

function About() {
  return (
    <div id="About" className="h-lvh flex flex-col py-14 px-9 ">
      <div className=" flex flex-col text-base/loose items-center space-y-9">
        <h1 className="text-3xl font-bold items-start">About</h1>

        <div className=" md:grid grid-cols-3 gap-5  ">
          <div className="overflow-hidden">
            <div>

            <h2 className="uppercase text-3xl font-bold  ">DR HREHDIIEIEHDJE</h2>
            <div className="  h-[420px]  items-center">
               
                 
                 <img className="rounded-lg  w-full h-full  object-cover" src="/img2.jpg"  alt="imag2" />
              
            </div>

              <div className="bg-white-700 row-span-2 ">
                <div>
                  <p className="font-bold">Phone number:</p>
                  <p> 06********</p>
                  
                </div>
                <div>
                  <p className="font-bold">Linkedin:</p>
                  <p> www.Linkedin/redafoshi</p>
                  
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p> reda.foshi@gmail.com</p>
                  
                </div>

              </div>
            </div>


          </div>
            
          <div className=" px-1 space-y-6 col-span-2">
            <div className="text-3xl font-bold space-y-2">
              <h2 className="uppercase  sm:block hidden">DR HREHDIIEIEHDJE</h2>
              <h2 className="text-2xl sm:block hidden">rhjijieiiddk</h2>
            </div>
            <div className="line-clamp-4 text-wrap leading-7	">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, officiis. Fuga numquam aspernatur temporibus laudantium! Praesentium aperiam obcaecati numquam modi asperiores nemo porro.
              </p>
            </div>
            <PerInfo />
            <Button name="Cv download"/>
          </div>

        </div>
      </div>

      <div className="my-6">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iure officia repellendus natus et voluptate reprehenderit cumque, ipsam laborum adipisci delectus accusantium magni fugit! Voluptatem repellendus dolor asperiores quas dicta!
        </p>

        <div className="mt-4">
          <button className="btn">cv download</button>
        </div>
      </div>

      <div className="my-6">
        <h1 className="text-4xl">Skills</h1>
      </div>

      <div className="py-5  flex-col sm:flex-row flex px-0">
        <Progress skill="html " level="100"/>
        <Progress2 skill="react " level="90"/>
        <Progress skill="java script" level="100"/>
        <Progress2 skill="tailwind css" level="90"/>
      </div>

      <div className=" flex flex-row py-8">
        <Card/>
      
    
      </div>

    </div>
  );
}

export default About;
