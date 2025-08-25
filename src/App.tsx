// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom';
import Home from "./screens/Home.tsx";
import Contact from "./screens/Contact.tsx";
import {useState} from "react";
import Buttons from "./screens/Buttons.tsx";
import Cards from "./screens/Cards.tsx";
import ShowNavBar from "./screens/ShowNavBar.tsx";
import Modals from "./screens/Modals.tsx";

function App() {
    const [pageTitle, setPageTitle] = useState("home");
    return (
        <>
            <header>
                <h1>Dev Site: <span>{pageTitle}</span></h1>
            </header>
            <nav>
                <ul>
                    <li><Link to="/" onClick={() => setPageTitle('home')}>Home</Link></li>
                    <li><Link to="/buttons" onClick={() => setPageTitle('buttons')}>Buttons</Link></li>
                    <li><Link to="/cards" onClick={() => setPageTitle('cards')}>Cards</Link></li>
                    <li><Link to="/navbar" onClick={() => setPageTitle('nav bar')}>Nav Bar</Link></li>
                    <li><Link to="/modals" onClick={() => setPageTitle('modals')}>Modals</Link></li>
                </ul>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/navbar" element={<ShowNavBar />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/modals" element={<Modals />} />
                </Routes>
            </main>
            <footer>

            </footer>
        </>

      /*<div>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>*/

  )


    // const [count, setCount] = useState(0)

  /*return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Energetic Ewoks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
}

export default App
