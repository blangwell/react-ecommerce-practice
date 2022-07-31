import './App.css';
import { Outlet } from 'react-router-dom';
import GlobalNav from './GlobalNav';

function App() {
  return (
    <div className="App">
      <GlobalNav />
      <h1>React Ecommerce Practice</h1>
      <Outlet />
    </div>
  );
}

export default App;