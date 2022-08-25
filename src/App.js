import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <ItemListContainer greeting={'Bienvenid@ a NC perfumes tester importados'}></ItemListContainer>
    </div>
  );
}

export default App;
