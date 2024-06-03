import React from 'react'
import { GiBookshelf, } from "react-icons/gi";
import { AiFillBank } from "react-icons/ai";

  
       const data = [
          {
            id: 1,
            icon: <GiBookshelf size={30}/> , // Replace with the actual icon from react-icons
            title: 'Bacolorioc',
            text: '	Licence en Physique 1992, Faculté des Sciences de Meknès  .',
            },
          {
              id: 2,
              icon:  <AiFillBank  size={30}/> , // Replace with the actual icon from react-icons
              title: 'Master',
              text: '	CEA Spectroscopie optique et moléculaire 1993, Faculté des Sciences de Meknès  .',
            },
          {
              id: 3,
              icon:  <AiFillBank  size={30}/> , // Replace with the actual icon from react-icons
              title: 'Secand title',
              text: '	Doctorat en Télécommunication 2001, Faculté des Sciences de Meknès Formation Qualifiante Administration des bases de données  ENSIAS Rabat 2002.',
            },
          {
              id: 4,
              icon:  <AiFillBank  size={30}/> , // Replace with the actual icon from react-icons
              title: 'Secand title',
              text: ' Habilitation Universitaire, Faculté des Sciences et Techniques Er-Rachidia 2008 .',
            },
        ];
function Card() {





  return (
<div>
   <div className='flex gap-4 flex-col sm:flex-row max-lg:250px '>
 
                {data.map((item) => (
                <div className="p-8 space-y-3 border-2  border-black dark:bg-stone-900 dark:border-white   rounded-xl  " key={item.id}>
                            <div className="icon black ">{[item.icon]}</div >
                            <div className="title text-4xl">{item.title}</div >
                            <div className="text dark:text-white">{item.text}</div >
                </div >
                  ))}      

         
                 
    </div>


    <div>










    </div>
</div>


  
  )
}

export default Card