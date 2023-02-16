import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from "./component/Home/Home"
import Order from './component/Order/Order';
import About from './component/About/About';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          loader: ()=>{
            return fetch("tshirts.json")
          },
          element: <Home></Home>
        },
        {
          path:"/order",
          element: <Order></Order>
        },
        {
          path:"/about",
          element: <About></About>
        },
      ]
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
