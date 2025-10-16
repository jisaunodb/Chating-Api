
import './App.css'
import Login from './components/Loing/Login'
import Registration from './components/Registration/Registration'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import firebaseConfig from './components/Firabase/firebaseConfig';

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
  {
    path:"/login",
    element : <Login/>
  }
]);

  return (
    <>
     <RouterProvider router={router} />,
    </>
  )
}

export default App
