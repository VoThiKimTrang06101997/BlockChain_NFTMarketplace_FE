import { Footer, NavBar } from "../components/components.index";
import "../styles/globals.css";

import React from "react";

const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
