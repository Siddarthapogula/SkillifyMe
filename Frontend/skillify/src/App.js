import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from "../src/Components/Dashboard"
import Folio from "../src/Components/Folio"
import Login from "../src/Components/Login"
import { Provider } from "react-redux"
import appStore from "../src/store/appstore"
import Main from "./Components/Main"
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
    element : <Folio/>
  },
  {
    path : "/portfolio/:name/:id",
    element : <Main/>
  }
])

function App() {
  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
    );
}

export default App;
