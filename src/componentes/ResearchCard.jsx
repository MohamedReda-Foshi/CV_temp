import React from 'react'

    const data=[
        {
            id:1,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 1',
            title: "Mutual Coupling Reduction of a Two-Port MIMO Antenna Using Defected Ground Structure",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, culpa reiciendis. Optio in neque minus est laudantium id quod error earum, quas quasi facilis tempore fugit dignissimos perferendis iste suscipit.", 
        },
       
        {
            id:2,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 2',
            title: "Design and Analysis of Wide Band Circular Patch Antenna for IoT and Biomedical Applications",
            text:"This paper focuses on the performance of a circular patch antenna with a defected ground structure. The antenna structure utilizes the FR4 substrate with a relative dielectric constant (ℇr) of 4.5, a loss tangent (tan δ) of 0.004, and a thickness (h) of 1.5 mm. To enhance the antenna’s performance, the ground structure is modified by incorporating six specially shaped slots instead of a complete ground plane. The proposed antenna exhibits resonance at a frequency of 5.2 GHz, accompanied by a remarkable reflection coefficient of − 40.54 dB.", 
        },
       
        {
            id:3,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 3',
            title: "Development and Examination of a 2.4 GHz Rectangular Patch Microstrip Antenna Incorporating Slot and Dielectric Superstrates",
            text:"The investigation into the antenna design consisted of utilizing a transmission line and cavity model at the frequency of 2.4 GHz. This study specifically concentrated on how dielectric Superstrates affected various performance measures, including but not limited to bandwidth, beamwidth, gain, resonant frequency, input impedance, return loss, and VSWR. This current research constitutes a reiteration of the findings outlined in Article .", 
        },
       
        {
            id:4,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 4',
            title: "A New Miniaturized Ultra-Wideband High-Isolated Two-Port MIMO Antenna for 5G Millimeter-Wave Applications",
            text:"At present, the fifth-generation (5G) technology is of paramount importance since it aspires to account for the limitations of the preceding 4G generation. Among the multiple existing technologies, the mm-wave grabbed the researcher’s attention in an attempt to attain maximum data transfer rates and prevent network congestion. In pursuit of this objective, this piece of work involves devising a compact ultra-wideband (UWB) MIMO antenna with an anti-parallel layout specifically designed for the millimeter-wave spectrum.", 
        },
       

        {
            id:5,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 4',
            title: "A New Miniaturized Ultra-Wideband High-Isolated Two-Port MIMO Antenna for 5G Millimeter-Wave Applications",
            text:"At present, the fifth-generation (5G) technology is of paramount importance since it aspires to account for the limitations of the preceding 4G generation. Among the multiple existing technologies, the mm-wave grabbed the researcher’s attention in an attempt to attain maximum data transfer rates and prevent network congestion. In pursuit of this objective, this piece of work involves devising a compact ultra-wideband (UWB) MIMO antenna with an anti-parallel layout specifically designed for the millimeter-wave spectrum.", 
        },
       

        {
            id:6,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 4',
            title: "A New Miniaturized Ultra-Wideband High-Isolated Two-Port MIMO Antenna for 5G Millimeter-Wave Applications",
            text:"At present, the fifth-generation (5G) technology is of paramount importance since it aspires to account for the limitations of the preceding 4G generation. Among the multiple existing technologies, the mm-wave grabbed the researcher’s attention in an attempt to attain maximum data transfer rates and prevent network congestion. In pursuit of this objective, this piece of work involves devising a compact ultra-wideband (UWB) MIMO antenna with an anti-parallel layout specifically designed for the millimeter-wave spectrum.", 
        },
       

        {
            id:7,
            URL:'https://www.researchgate.net/publication/376679201/figure/tbl1/AS:11431281213653388@1703088152173/figure-tbl1.png ',
            alt: 'Image 4',
            title: "A New Miniaturized Ultra-Wideband High-Isolated Two-Port MIMO Antenna for 5G Millimeter-Wave Applications",
            text:"At present, the fifth-generation (5G) technology is of paramount importance since it aspires to account for the limitations of the preceding 4G generation. Among the multiple existing technologies, the mm-wave grabbed the researcher’s attention in an attempt to attain maximum data transfer rates and prevent network congestion. In pursuit of this objective, this piece of work involves devising a compact ultra-wideband (UWB) MIMO antenna with an anti-parallel layout specifically designed for the millimeter-wave spectrum.", 
        },
       



    ]



function ResearchCard() {
  return (
    <div className=' flex flex-col items-center '>
        {data.map((item)=>(
               <a 
               href="https://www.researchgate.net/publication/380082657_Mutual_Coupling_Reduction_of_a_Two-Port_MIMO_Antenna_Using_Defected_Ground_Structure" 
               className=" relative p-4 m-3 space-y-7 border-2 rounded-xl flex flex-col items-center justify-center border-black dark:bg-stone-900 dark:border-white" 
               key={item.id}
             >
               <div className="h-full relative shadow-2xl overflow-hidden group">
                 <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-black opacity-60 transition-all ease-in-out duration-500">
                   <div className="w-full h-full p-5 relative">
                     <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                       <h2 className="text-2xl font-bold text-white mb-0 pb-1">{item.title}</h2>
                       <p className="text-lg font-light text-white line-clamp-2">{item.text}</p>
                     </div>
                   </div>
                 </div>
                 <img src={item.URL} className="w-full z-0 h-full object-fill example mx-auto" alt={item.image} />
               </div>
             </a>
                      
        ))}



<>


</>

    </div>


























  )
}

export default ResearchCard