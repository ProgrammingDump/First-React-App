import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World ^^
        </p>
        <a
          className="App-link"
          href="https://sherdil-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's my portfolio!
        </a>
        <p>
        What does this spinny thing do?
        </p>
      </header>
    </div>
  );
}

export default App;
