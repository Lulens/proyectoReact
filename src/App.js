import './App.css';
import {} from "./css/bootstrap.min.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';


function App() {

    return (
      <div className='App'>
        <header className='App-header'>
          Mateando Así
        </header>

      <NavBar />  
      <ItemListContainer texto="Aquí irán los productos"/>
      
      </div>
  );

}

export default App;
