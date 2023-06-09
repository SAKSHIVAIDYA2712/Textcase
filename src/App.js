import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [suntheme, moontheme] = useState("sun");
  const [state, setstate] = useState("solid");
  const [navcolor, navsetcolor] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [textcolor, settextcolor] = useState("black");
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const changeLogo = () => {
    let theme = suntheme;
    if (theme === "sun") {
      moontheme("moon");
      setstate("regular");
      document.body.style.backgroundColor = "rgba(46,54,70,1)";
      navsetcolor("dark");
      showalert("Dark Mode has been enabled successfully", "success");
      document.title = "Text Case - Dark Mode";
      // settextcolor("white");
    } else {
      moontheme("sun");
      setstate("solid");
      document.body.style.backgroundColor = " rgb(248, 249, 250)";
      navsetcolor("light");
      showalert("Light Mode has been enabled successfully", "success");
      document.title = "Text Case - Light Mode";
      // settextcolor("black");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          mode="sum"
          suntheme={suntheme}
          state={state}
          navcolor={navcolor}
          changeLogo={changeLogo}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About navcolor={navcolor} />} />
          <Route
            path="/"
            element={<Textform showalert={showalert} navcolor={navcolor} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
