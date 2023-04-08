// import { useEffect } from 'react';
// import AOS from 'aos'
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero-section/Hero';
import Schedule from './components/Schedule/Schedule';
import Klat from './components/Klat/Klat';
import Gym from './components/Gym/Gym';
// import Testimonial from './components/Testimonial/Tesimonial'
import Footer from './components/Footer/Footer';



function App() {

  // useEffect(() => {
  //  Aos.init()

  // }, [])
  
 return ( 
<>
< Header/>
< Hero/>
< Schedule/>
< Klat/>
< Gym/>
{/* < Testimonial/> */}

< Footer/>
</>
  );
}

export default App;

