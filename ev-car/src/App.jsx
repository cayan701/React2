import { useState } from "react";

import Background from "./Components/Background/Background";

const App = () => {
  let heroData = [
    { text1: 'Dive into', text2: 'What you love'},
    { text1: 'Indulge', text2: 'Your Passions'},
    { text1: 'Give in to', text2: 'Everything'}
  ]

  const [ heroCount, setHeroCount ] = useState(2);
  const [ playStatus, setPlayStatus ] = useState(true);

  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  )
}

export default App;