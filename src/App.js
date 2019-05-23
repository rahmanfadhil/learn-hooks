import React, { useState, useCallback, useMemo } from "react";
import Counter from "./Counter";

function App() {
  const [text, setText] = useState();

  const onOdd = useCallback(() => setText(""), []);
  const data = useMemo(() => ({ hello: "world" }), []);

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <Counter onOdd={onOdd} data={data} />
    </div>
  );
}

export default App;
