import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { motion, useScroll } from "framer-motion";
import KnowMore from "./Components/OtherComponents/KnowMore";
import { Home } from "./Components/Main/Home";
import Abt from "./Components/OtherComponents/Abt";

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/KnowMore" element={<KnowMore />}></Route>
          <Route path="/About" element={<Abt/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
