import logo from "./logo.svg";
import "./App.css";

import Header from "./component/Pages/Header/Header";
import { Router, RouterProvider } from "react-router-dom";
import router from "./Route/Route";


function App() {
  return (
    <div className='dark:bg-gray-700'>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
