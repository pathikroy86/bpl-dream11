
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [freeCoins, setFreeCoins] = useState(0);
  const handleFreeCoins = (coins) => {
    const totalCoins = freeCoins + coins;
    setFreeCoins(totalCoins);
  }

  return (
    <>

      <Navbar freeCoins={freeCoins}></Navbar>
      <Banner handleFreeCoins={handleFreeCoins}></Banner>
      <AvailablePlayers></AvailablePlayers>
      <Newsletter></Newsletter>
      <Footer></Footer>

    </>
  )
}

export default App
