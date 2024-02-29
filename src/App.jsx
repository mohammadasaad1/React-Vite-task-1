import { useState } from "react";

import "./App.css";

function App() {
  const [cnt, plus] = useState(0); // to render the button

  return (
    <>
      <button onClick={() => plus(cnt + 1)}>mohammad asaad {cnt}</button>
    </>
  );
}

export default App;
