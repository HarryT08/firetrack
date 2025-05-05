import './App.css'
import Sidebar from './components/layout/Sidebar'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App