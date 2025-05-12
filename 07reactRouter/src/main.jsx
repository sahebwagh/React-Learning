import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="User/" element={<User />}>
        <Route path=":userId" element={<User/>}/>
      </Route>
      <Route 
      loader = {githubInfoLoader}
      path='github' 
      element = {<Github/>} />
      <Route path='*' element = {<NotFound/>}/>
    </Route>
  )
); 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
