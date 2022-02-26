
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Packages from './components/Packages';
import Review from './components/Review';
import Services from './components/Services';
import Trip from './components/Trip';

function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <Home/>
     <Packages/>
     <Trip/>
     
     <Review/>
     <Services/>
    </div>
  );
}

export default App;
