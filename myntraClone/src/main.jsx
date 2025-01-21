import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
// import Bag from './components/Bag.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import store from './store/index.js'
import { Provider } from 'react-redux'

const router=createBrowserRouter([

  { path:"/",
    element:<App></App>,
    
    children:[
    {path:"/",element:<Home></Home>/*,loader:postLoader*/},
    {path:"/bag", element:<Bag></Bag> /*, action:postAction*/}
  ]
  }
  
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
   
  </StrictMode>,
)
