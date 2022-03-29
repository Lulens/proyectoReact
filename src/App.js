import './App.css';
import {} from "./css/bootstrap.min.css"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }

    return (
      <div className='App'>
        <header className='App-header'>
          Mateando Así
        </header>

      <NavBar />  
      <ItemListContainer texto="Productos"/>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />

        

      </div>
  );

}

export default App;
