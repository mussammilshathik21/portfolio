import React from "react";
import ReactDom from "react-dom/client"
import App from "./App.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles// ..
AOS.init();

ReactDom.createRoot(document.getElementById("root")).render(
  <App/>
)