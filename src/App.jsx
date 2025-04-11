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
// import Blog from './pages/Blog/Blog'
import BlogDetails from './pages/Blog/BlogDetails'
import BlogMain from './pages/Blog/BlogMain'
import Signin from './components/Login/Signin'
import RequireAuth from './components/RequireAuth/RequireAuth'
import Adminpage from './components/Login/Adminpage/Adminpage'
import ManageBlog from './components/Login/Adminpage/DeletePost'
import AddBlogs from './pages/Blog/AddBlogs'
import Editblogs from './components/Login/Adminpage/Editblogs'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
// import BlogMain from './pages/Blog/BlogMain'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<ChildApp />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/web' element={<Web />} />
        <Route path='/seo' element={<Seo />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/social' element={<Social />} />
        <Route path='/about' element={<About />} />


        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='/blog' element={<BlogMain />} />
        <Route path='/product/:id' element={<BlogDetails />} />


        <Route path='/adminpage' element={
          <RequireAuth>
            <Adminpage />
          </RequireAuth>
        } />
        <Route path='/addblog' element={
          <RequireAuth>
            <AddBlogs />
          </RequireAuth>
        } />
        <Route path='/manageblog' element={
          <RequireAuth>
            <ManageBlog />
          </RequireAuth>
        } />
        <Route path='/editblogs' element={
          <RequireAuth>
            <Editblogs />
          </RequireAuth>
        } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
