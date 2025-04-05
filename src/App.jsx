import { useState } from "react";
import AppRoutes from "./Routing/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
