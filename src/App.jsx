
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NotFound from './Component/Shared/NotFound/NotFound.jsx'
import MasterLayout from './Component/Shared/MasterLayout/MasterLayout.jsx'
import Home from './Component/Home/Home.jsx'
import Projects from './Component/Projects/Projects.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Skills from './Component/Skills/Skills.jsx'

function App() {

  const routes = createBrowserRouter([

    {
      path : "",
      element : <MasterLayout/>, 
      errorElement : <NotFound/>,
      children : [
        {index : true , element : <Home/>},
        {path : "home" , element : <Home/>},
        {path : "projects" , element : <Projects/>},
        {path : "about" , element : <About/>},
        {path : "skills" , element : <Skills/>},
        {path : "contact" , element : <Contact/>},
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
