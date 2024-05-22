
import Button from "./Button";
import PerInfo from "./PerInfo";

function About() {
  return (
    <div id="About" className="h-lvh flex flex-col">
      <div className="px-3 flex flex-col text-base/loose items-center space-y-4">
        <h1 className="text-3xl font-bold items-start">About</h1>

        <div className="grid grid-cols-2 gap-5">
          <div className="overflow-hidden">
            <div className="grid-rows-2 ">

            <div className="row-span-2 w-300px h-[420px]">
               
                 
                 {/* <img className="rounded-lg  w-full h-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"alt="imag2" /> */}
                 <img className="rounded-lg  w-full h-full max-w-72 min-w-40" src="/img2.jpg"  alt="imag2" />
              
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
            
          <div className=" px-4 space-y-6">
            <div className="text-3xl font-bold space-y-2">
              <h2 className="uppercase">DR HREHDIIEIEHDJE</h2>
              <h2 className="text-2xl">rhjijieiiddk</h2>
            </div>
            <div className="text-balance">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, officiis. Fuga numquam aspernatur temporibus laudantium! Praesentium aperiam obcaecati numquam modi asperiores nemo porro.
              </p>
            </div>
            <PerInfo />
          </div>

            <Button />
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

      <div>
        <p>Component about the skills</p>
      </div>
    </div>
  );
}

export default About;
