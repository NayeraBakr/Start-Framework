import './App.css'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";
import { createHashRouter, RouterProvider } from 'react-router-dom'

let route = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: '*', element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
