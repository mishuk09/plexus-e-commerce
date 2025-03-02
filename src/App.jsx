import Footer from './pages/Footer/Footer'
import Navbar from './pages/Navbar/Navbar'
import './style/App.css'
import { Route, Routes } from 'react-router-dom'
import ChildApp from './ChildApp'
import ContactPage from './components/contactpage/Contactpage'
import Web from './components/Service/Allservices/Web'
import Seo from './components/Service/Allservices/Seo'
import Graphic from './components/Service/Allservices/Graphic'
import Social from './components/Service/Allservices/Social'
import Blog from './pages/Blog/Blog'
import BlogDetails from './pages/Blog/BlogDetails'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<ChildApp />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/web' element={<Web />} />
        <Route path='/seo' element={<Seo />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/social' element={<Social />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogsdetails/:blogid' element={<BlogDetails />}></Route>





      </Routes>

      <Footer />
    </>
  )
}

export default App
