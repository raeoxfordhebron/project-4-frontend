import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidenav from './components/Sidenav'

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
