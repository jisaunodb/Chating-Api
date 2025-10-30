
import './App.css'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import firebaseConfig from './components/Firabase/firebaseConfig';
import ForgotPassword from './components/ForgotPass/ForgotPassword';
import Home from './components/Home/Home';
import Sideber from './components/Sideber/Sideber';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
  {
    path:"/login",
    element : <Login/>
  },
  {
    path:"/forgot",
    element : <ForgotPassword/>
  },
  {
    path:"/home",
    element : <Home/>
  },
  {
    path:"/sideber",
    element : <Sideber/>
  }
]);

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
