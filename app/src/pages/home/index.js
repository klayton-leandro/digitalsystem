import React, { useEffect,  useState} from 'react';
import { Link } from "react-router-dom";

export const HomePage = (props) => { 

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  console.log("windowWidth", windowWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Utiizacao do cleanUp onde faco a remocao a utilizacao da observacao do listener
    return () => {
      console.log("removendo o listener")
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Assim que meu componente for desmontado




  return (
    <><p>Home</p>
      <Link to="/about">About</Link>
    </>
  )
}