import React, { useEffect } from 'react'
import HomePage from './Pages/HomePage'
import About from './Pages/About';
import Services from './Pages/Services';
import OurWork from './Pages/OurWork';
import Insights from './Pages/Insights';
import Contact from './Pages/Contact';


import { Routes , Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // "/" ke liye
        element: <HomePage />
      },
      {
        path: "aboutus",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "ourwork",
        element: <OurWork />
      },
      {
        path: "insights",
        element: <Insights />
      },
      {
        path: "contactus",
        element: <Contact />
      }
    ]
  }
]);

function App() {
  return (
  <RouterProvider router={router}/>
  )
}

export default App
