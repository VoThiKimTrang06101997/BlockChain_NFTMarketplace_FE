import { NavBar } from "../components/components.index";
import "../styles/globals.css";

import React from "react";

const App = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);

export default App;
