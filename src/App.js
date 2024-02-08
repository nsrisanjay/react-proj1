import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Rootlayout from './components/rootlayout/Rootlayout';
import SearchBar from './components/searchbar/SearchBar';
import DetailCard from './components/detailCard/DetailCard';
function App() {
  let router = createBrowserRouter(
    [
      {
        path:'',
        element:<Rootlayout/>,
        children:[
          {
            path:'',
            element:<SearchBar/>
          },
          {
            path:'product-detail/:x',
            element:<DetailCard/>
          }
        ]
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
