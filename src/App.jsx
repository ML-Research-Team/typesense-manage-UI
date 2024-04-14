import './App.css';
import Home from './components/home/home';
import './environment/styles/light.css'
import './environment/styles/dark.css'
import './styles/style.css'


function App({content}) {
  return (
    <div className="App"
    >
      {content}
    </div>
  );
}

export default App;
