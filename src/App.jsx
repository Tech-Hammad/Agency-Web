import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
