import React, { useState } from 'react';
import{
  createBrowserRouter,
  RouterProvider
  
} from "react-router-dom";
import Home from "./pages/home/Home";
import HouseOwner from "./pages/houseOwner/HouseOwner";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Students from "./pages/students/Students";
import University from "./pages/uni/University";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/students",
    element:<Students/>,
  },
  {
    path:"/students/:studentsId",
    element:<Single/>,
  },
  {
    path:"/students/:studentsId/new",
    element:<New />,
  },
  {
    path:"/houseOwner",
    element:<HouseOwner />,
  },
  {
    path:"/houseOwner/:houseOwnerId",
    element:<Single/>,
  },
  {
    path:"/houseOwner/:houseOwnerId/new",
    element:<New/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/University",
    element:<University/>,
  },
]);
function App() {
 
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
