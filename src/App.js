import { useState } from "react";
import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {


  const [state , setState] = useState(false)

  const toggle = () => {
    setState(!state)
  }

  const openfun = state ? "open" : null
  const coverfun = state ? "block" : null
  const navfun = state ? "add" : null

  return (
    <div className="d-flex h-100 p-app ">
      <Nav state={navfun} />
      <Page openfun={openfun}/>
        <div id="cover" className={coverfun}></div>
          <button id="btn" onClick={toggle}>
            <i className="fa-solid fa-bars"></i>
          </button>
    </div>
  );
}

export default App;
