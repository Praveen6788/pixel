import Homepage from './pages/Homepage'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout'
import Aboutpage from './pages/Aboutpage'
import Teampage from './pages/Teampage'
import Gallerypage from './pages/Gallerypage'
import Updatespage from './pages/Updatespage'
import Admin from './pages/adminpages/Admin'
import Upload from './pages/adminpages/Upload'
import UpdateTeam from './pages/adminpages/UpdateTeam'
import Adminhome from './pages/adminpages/Admihome'
import { useState } from 'react'
import Uploadupdates from "./pages/adminpages/Uploadupdates"

// ✅ ProtectedRoute as a separate function
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout isAuthenticated={isAuthenticated} />}>
        {/* Public Routes */}
        <Route index element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/update" element={<Updatespage />} />

        {/* Admin Login Route (passes setter to allow login) */}
        <Route path="/admin" element={<Admin setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route path="/upload" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Upload />
          </ProtectedRoute>
        } />
        <Route path="/uploadupdates" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Uploadupdates/>
          </ProtectedRoute>
        } />
        
        <Route path="/updateteam" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UpdateTeam />
          </ProtectedRoute>
        } />

        <Route path="/adminhome" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Adminhome />
          </ProtectedRoute>
        } />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
