import Header from './components/header';
import './App.css';
import Container from './components/container';
import Footer from './components/footer';
import Navbar from './components/search';
import './App.css';



function App() {
  return (
    <div className="App">
       <Header /> 
       <Navbar/>
       <Container/>
       <Footer/>
    </div>
  );
}

export default App;
