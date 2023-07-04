import React, { useState } from "react";
import "./App.css";
import "./DarkMode.css";
import Nevber from "./Nevber";
import Alert from "./Alert.js";
import About from './Component/About';
import TextBuilder from "./TextBuilder";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App(props) {
  const [black, setBlack] = useState("light");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [blue, setBlue] = useState("light");

  // const toggleBlackmode = () => {
  //   if (black === "light") {
  //     setBlack("black");
  //     document.body.style.backgroundColor = "black";
  //     showAlert("Dark Mode Has Enabled", "success");
  //   } else {
  //     setBlack("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Dark Mode Has Disabled", "success");
  //   }
  // };
  // blue-mode-funtions
  // const toggleBluemode = () => {
  //   if (blue === "light") {
  //     setBlue("bludarkbluee");
  //     document.body.style.backgroundColor = "darkblue";
  //     showAlert("Blue Mode Has Enabled", "success");
  //   } else {
  //     setBlue("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Blue Mode Has Disabled", "success");
  //   }
  // };
  //  crimson-mode
  const toggledrkmode = () => {
    if (mode === "light") {
      setMode("#181616");
      document.body.style.backgroundColor = "#181616";
      showAlert("Dark Mode Has Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Has Disabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
    <Router>
      <Nevber
        title="UniText"
        sq="Darkstyle"
        black={black}
        // toggleBlackmode={toggleBlackmode}
        // blue={blue}
        // toggleBluemode={toggleBluemode}
        mode={mode}
        toggledrkmode={toggledrkmode}
      />
      <Alert alert={alert} />

          <Routes>
                
          <Route path="/" element={<TextBuilder showAlert={showAlert} headline="Write Your Text Here" black={black} mode={mode}/>}>
            </Route>

            <Route  path="About.js" element={<About mode={mode} black={black} />}>
            </Route>

          {/* <div className="container my-3">
          <TextBuilder showAlert={showAlert} textline="Put Your Text To Analize" headline="Write Your Text Here" blue={blue}  black={black} crimson={crimson} />
          </div> */}
          
                {/* <TextBuilder
                    showAlert={showAlert}
                    textline="Put Your Text To Analize"
                    headline="Write Your Text Here"
                    blue={blue}
                    black={black}
                    crimson={crimson}
                  /> */}
                
                  </Routes>
           {/* <Darkstyle showAlert={showAlert}/> */}
        
   </Router>
    </>
    
  );
}

export default App;