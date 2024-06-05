import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {

  let heroData = [
    {text1: 'Dive into', text2: 'what you love!'},
    {text1: 'Create your', text2: 'own destiny!'},
    {text1: 'Be Cool', text2: 'Be the best!'},
  ];

  const [ heroCount, setHeroCount ] = useState(2);
  const [ playStatus, setPlayStatus ] = useState(false);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playVideo
      />
    </div>
  );
}

export default App;