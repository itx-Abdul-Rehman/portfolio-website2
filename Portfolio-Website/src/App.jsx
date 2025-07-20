import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Certifications from "./components/Certifications";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";



function App() {
 
  return (
    <>
      <Navbar />
      <Main />
      <Projects />
      <Certifications />
      <Products />
      <ContactUs />
    </>
  )
}

export default App
