import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Signin from './components/pages/Auth/Signin'
import Signup from './components/pages/Auth/Signup'
import NavBar from './components/layouts/NavBar'

function App() {
  return (
    <div className=" bg-f1 h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} index={true} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
