import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
    </div>
  );
}

export default App;
