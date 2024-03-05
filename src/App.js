import './App.css';
import logo from './img/kuullogo.png'

function App() {
  return (
    <div className="coming-soon">
      <img src={logo} className='kuullogo'/>
    <h1>Coming Soon!</h1>
    <p className='p-tag'>We're working hard to bring you something amazing. Stay tuned!</p>
  </div>
  );
}

export default App;