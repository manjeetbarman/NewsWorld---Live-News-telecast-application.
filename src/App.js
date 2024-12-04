import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(https://www.pngmagic.com/product_images/cool-light-blue-background.jpg)`}}>
        <Navbar />
        <News pageSize={6} country="us" category="science" />
        <Footer />
      </div>
    );
  }
}
