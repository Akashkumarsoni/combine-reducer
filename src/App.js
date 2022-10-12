import './App.css';
import CakePage from './CakePage';
import ChocolatePage from './ChocolatePage';
import IceCreamPage from './IceCreamPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CakePage />
       <IceCreamPage />
       <ChocolatePage />
      </header>
    </div>
  );
}

export default App;
