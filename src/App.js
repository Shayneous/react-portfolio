import './App.css';
import Header from './components/Header';
import About from './components/About';
import Section from './components/Section';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <About/>
      <Projects/>
    </div>
    
  );
}

export default App;
