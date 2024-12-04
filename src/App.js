import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(https://img.freepik.com/premium-photo/blue-white-background-with-white-blue-color_853677-205505.jpg)`}}>
        <Navbar />
        <News pageSize={6} />
        <Footer />
      </div>
    );
  }
}
