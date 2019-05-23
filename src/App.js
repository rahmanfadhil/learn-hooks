import React, { useState, useCallback, useMemo } from "react";
import Counter from "./Counter";

function App() {
  const [text, setText] = useState();
  const [text2, setText2] = useState();

  const onOdd = useCallback(() => setText(""), []);
  const data = useMemo(() => ({ text2 }), [text2]);

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <input
        type="text"
        onChange={e => setText2(e.target.value)}
        value={text2}
      />
      <Counter onOdd={onOdd} data={data} />
    </div>
  );
}

export default App;
