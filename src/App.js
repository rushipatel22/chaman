
import './App.css';
import Header from './Component/header';
import Form from './Component/Form';
import Counter from './Component/Counter';
function App() {
  return (
    <div className="App">
        <Header />
        <Form />
        <Counter countStart={0}/>
    </div>
  );
}

export default App;
