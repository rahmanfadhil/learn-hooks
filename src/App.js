import React, { useState, useCallback } from "react";
import Counter from "./Counter";

function App() {
  const [text, setText] = useState();

  const onOdd = useCallback(() => setText(""), []);

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <Counter onOdd={onOdd} />
    </div>
  );
}

export default App;
