import logo from './logo.svg';
import Gameboard from './components/Gameboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Tic-Tac-Toe</h3>
      <header className="App-header">
        <Gameboard/>
        
      </header>
      <footer >
        <div className="naming">This is demo Website</div>
        
              
              <div className="naming">Made by Abhishek Rawat</div>
              
      
      </footer>
    </div>
  );
}

export default App;
