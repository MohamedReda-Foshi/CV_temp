import React from 'react'
import Button from './Button'

function Contact( {darkMode} ) {
  return (
    <div className=' flex items-center lg:px-40 flex-col md:flex-row py-20 md:py-0 '>

        <div>
          <h1 className="text-3xl font-medium block sm:hidden ">Contact me</h1>
        </div>

        <div className='max-w-80'>

        {/* <img src={darkMode ? '/img2.jpg' : '/imagLight.png'}  alt="Light" /> */}
              {/* {darkMode ? <img src='/imagDarck.png'  alt="Light" /> : <img src='/imagLight.png'  alt="Light" />} */}
              { darkMode ?  <img src="/imagDarck.png " className='h-96 w-96' alt="log.dark"/> : <img src="/imagLight.png" className='h-96 w-96' alt="logo" />}
              
        </div>

        <div>

            <div className="flex min-h-screen items-center justify-center  ">
            <div className="mx-auto max-w-lg">
              <h1 className="text-3xl font-medium  hidden sm:block">Contact me</h1>
              <p className="mt-3">Email us at help@domain.com or message us here:</p>

              <form action="https://api.web3forms.com/submit" className="mt-3">
              


                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className='sm:col-span-2 grid gap-7'>
                  <div className="relative z-0 ">
                    <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black">Your name</label>
                  </div>
                  <div className="relative z-0">
                    <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black">Your email</label>
                  </div>
                </div>


                  <div className="relative z-0 col-span-2">
                    <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black ">Your message</label>
                  </div>
                </div>

                
                <div className='py-7'>
                      
                      <Button name="Send Message"/>
                  </div>
              </form>
            </div>
          </div>
        </div>



      


















    </div>
  )
}

export default Contact