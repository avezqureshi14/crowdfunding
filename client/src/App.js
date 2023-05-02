import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Projects/>
    </div>
  );
}

export default App;
