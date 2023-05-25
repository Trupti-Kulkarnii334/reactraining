import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./component/Message";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;