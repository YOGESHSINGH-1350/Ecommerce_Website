import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import FetchStatus from '../components/FetchStatus'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'




function App() {

  const fetchStatus =useSelector((store)=>store.fetch)

  return (
    <>
  <Header></Header>
  <FetchStatus></FetchStatus>
  {fetchStatus.fetching? <LoadingSpinner/>:  <Outlet></Outlet>}
   <Footer></Footer>
</>

  )
}

export default App
