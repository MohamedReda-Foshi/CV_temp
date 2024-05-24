import React from 'react'
import { GiBookshelf, } from "react-icons/gi";
import { AiFillBank } from "react-icons/ai";

  
       const data = [
          {
            id: 1,
            icon: <GiBookshelf size={30}/> , // Replace with the actual icon from react-icons
            title: 'First title',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  .',
            },
          {
              id: 2,
              icon:  <AiFillBank  size={30}/> , // Replace with the actual icon from react-icons
              title: 'Secand title',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  .',
            },
          {
              id: 3,
              icon:  <AiFillBank  size={30}/> , // Replace with the actual icon from react-icons
              title: 'Secand title',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  .',
            },
          {
              id: 4,
              icon:  <AiFillBank  size={30}/> , // Replace with the actual icon from react-icons
              title: 'Secand title',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  .',
            },
        ];
function Card() {





  return (
<div>
   <div className='flex gap-4 flex-col sm:flex-row max-lg:250px'>
 
                {data.map((item) => (
                <div className="p-8 space-y-3 border-2 border-black  rounded-xl  " key={item.id}>
                            <div className="icon black">{[item.icon]}</div >
                            <div className="title text-4xl">{item.title}</div >
                            <div className="text">{item.text}</div >
                </div >
                  ))}      

         
                 
    </div>


    <div>










    </div>
</div>


  
  )
}

export default Card