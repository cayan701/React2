import { useState } from "react";
import Background from "./Components/Background/Background";

const App = () => {

  let heroData = [
    {text1: 'Dive into', text2: 'what you love!'},
    {text1: 'Create your', text2: 'own destiny!'},
    {text1: 'Be Cool', text2: 'Be the best!'},
  ];

  const [ heroCount, setHeroCount ] = useState(2);
  const [ playVideo, setPlayVideo ] = useState(false);

  return (
    <div>
      <Background heroCount={heroCount} playVideo={playVideo} />
    </div>
  );
}

export default App;