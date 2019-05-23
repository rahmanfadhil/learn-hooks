import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [text, setText] = useState();

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <Counter />
    </div>
  );
}

export default App;
