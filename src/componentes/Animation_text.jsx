import React, { useEffect, useState } from "react";

function Animation_text() {
  const [currentWord, setCurrentWord] = useState("dev");

  useEffect(() => {
    const words = ["dev", "design", "QA"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className=" font-bold">
        <div className="text-center ">
          <div className="text-center text-3xl font-bold">
            Services offered {currentWord}
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Animation_text;
