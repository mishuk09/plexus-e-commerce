import Home from './pages/Home/Home'
import BlogSection from './pages/BlogSection/BlogSection'
import Count from './pages/Count/Count'
import Features from './pages/Feature/Features'
import Price from './pages/Price/Price'
import Project from './pages/Project/Project'
import Service from './pages/Service/Service'
import SetupProcess from './pages/SetupProcess/SetupProcess'
import Success from './pages/Success/Success'
import Testimonials from './pages/Testimonials/Testimonials'
import './style/App.css'


function ChildApp() {

    return (
        <>
            <Home />
            <Features />
            <Service />
            <Count />
            <Project />
            <Success />
            <SetupProcess />
            <Price />
            <Testimonials />
            <BlogSection />

            {/* service rounte */}
          
        </>
    )
}

export default ChildApp
