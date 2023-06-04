import './App.css';
import Body from './Components/Body/Body'
import Feature from './Components/Feature/Feature';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Body/>
     <Feature />
     <Main />
     <Footer />
    </div>
  );
}

export default App;
