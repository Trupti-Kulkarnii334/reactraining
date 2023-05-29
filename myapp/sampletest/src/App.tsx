import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./component/Message";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Content from "./component/Content";
import Footer from "./component/Footer";
import ListGroup from "./component/ListGroup";
import NavBar from "./component/NavBar";
import FavColor from "./component/FavColor";
import Alert from "./component/Alert";
import Button from "./component/Button";
import Afterlogin from "./AfterLogin";

function App() {
  return (
    <div>
      <Afterlogin></Afterlogin>
    </div>
  );
}

export default App;
