import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Folio from './components/Folio';
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Dashboard/>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/folio",
    element :  <Folio/>
  }
])

function App() {
  return (
   <RouterProvider router={appRouter}/>
  );
}

export default App;
