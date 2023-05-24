import './assets/_null.css';
import './assets/App.css';
import Branches from './components/Branches/Branches';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <Header />
      <Home />
      <Branches />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
