import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Create from "./components/pages/Create"
import About from "./components/pages/About"
import Feedback from "./components/pages/Feedback"
import Login from "./components/pages/Login"
import Header from "./components/header/Header"
import Signup from "./components/pages/Signup"
import { ToastContainer } from "react-toastify"
import Footer from "./components/footer/Footer"
import PostDetails from "./components/pages/PostDetails"


function App() {

  return (
    <div className=" overflow-x-hidden">
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App