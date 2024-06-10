import './App.css';
import Header from './components/Header';
import ProductCatalog from './components/ProductCatalog';
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductCatalog/>
      <Popup/>
    </div>
  );
}

export default App;
