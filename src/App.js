
import './App.scss';
import Header from './Component/header';
import Todo from './Component/Todo';
// import Form from './Component/Form';
// import Counter from './Component/Counter';
function App() {
  return (
    <div className="App">
        <Header />
        {/* <Form /> */}
        {/* <Counter countStart={0}/> */}
        <Todo />
    </div>
  );
}
export default App;
