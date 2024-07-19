
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  

  return (
    <>
       <ToastContainer />
       <Navbar> </Navbar> 
       <Intro></Intro>
       <Skills></Skills>
       <Works></Works>
       <Contact></Contact>
       <Footer></Footer>
    </>
  )
}

export default App
