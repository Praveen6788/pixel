
import Homepage from './pages/Homepage'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Aboutpage from './pages/Aboutpage'
import Teampage from './pages/Teampage'
import Gallerypage from './pages/Gallerypage'
import Updatespage from './pages/Updatespage'
import Admin from './pages/Admin'

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>
        <Route index element={<Homepage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/Team" element={<Teampage />} />
        <Route path="Gallery" element={<Gallerypage />} />
        <Route path="/update" element={<Updatespage />} />
        <Route path="/Admin" element={<Admin/>} />
        



      </Route>
      

    )
    
  )

  

  return (
    
    <RouterProvider router={Router} />
  )
}

export default App
