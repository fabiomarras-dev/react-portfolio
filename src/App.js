import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
