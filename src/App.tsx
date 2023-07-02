import { createContext, useState } from "react";
import "./App.css";
import A from "./components/A";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Message from "./components/Message";
import Message2 from "./components/Message2";
import Message3 from "./components/Message3";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Register from "./components/Register";
import Register2 from "./components/Register2";
import UserDetails from "./components/UserDetails";
import Username from "./components/Username";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderCounter from "./components/RenderCounter";
import Focus from "./components/Focus";
import Colors from "./components/Colors";
import Transition from "./components/Transition";
import Albums from "./components/Albums";
import Reducer from "./components/Reducer";

let themes = {
  light: {
    color: "black",
    background: "white",
  },
  dark: {
    color: "white",
    background: "black",
  },
};

export let SiteTheme = createContext(themes.light);

function App() {
  let myname: string = "Mor";
  let num: number = 6;
  let imgUrl: string =
    "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg";
  let developer: string = "Mor Ashkenazi";
  let year: number = 2023;

  let [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className="App">
      <Reducer />
      <Albums />
      <Transition />
      <Colors />
      <Focus />
      <RenderCounter />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() => setDarkMode(!darkMode)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Dark Mode
        </label>
        {/* {darkMode ? <p>dark mode</p> : <p>light mode</p>} */}
      </div>
      <SiteTheme.Provider value={darkMode ? themes.dark : themes.light}>
        <A />
      </SiteTheme.Provider>
    </div>
  );
}

export default App;

{
  /* <Navbar />
      <Products />
      <Username />
      <Users />
      <Posts /> */
}
{
  /* <Home />
      <Details /> */
}
{
  /* <Message isAdmin={true} />
      <Message isAdmin={false} /> */
}
{
  /* <Message2 isAdmin={true} />
      <Message2 isAdmin={false} /> */
}
{
  /* <Message3 isAdmin={true} />
      <Message3 isAdmin={false} /> */
}
{
  /* <p>Hello my name is {myname}</p>
      <h5>You entered {num} times</h5>
      <p>{Math.random() * 100}</p>
      <img src={imgUrl} alt="Giraffe" width={200} />
      <p>{2 * 3}</p>
      <button className="btn btn-primary">Click Me</button> */
}
{
  /* <Footer devName={developer} devYear={year} /> */
}
// <Router>
//       <Navbar />
//       <Routes>
//         {/* localhost:3000*/}
//         <Route path="/" element={<Home />} />
//         {/* localhost:3000/products */}
//         <Route path="/products" element={<Products />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/users/:id" element={<UserDetails />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/register2" element={<Register2 />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer devName={developer} devYear={year} />
//     </Router>
