import About from './About';
import './App.css';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Home from './Home';
import Interest from './Interest';
import Navbar from './Navbar';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
        <Interest/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
