import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/countercomponent'
import Header from './components/header'
function App() {
  return (
    <div className="App">
     <Header></Header>
      <CounterComponent></CounterComponent>
    </div>
  );
}

export default App;
