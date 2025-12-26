
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [freeCoins, setFreeCoins] = useState(0);
  const handleFreeCoins = (coins, price) => {

    const totalCoins = (freeCoins + coins) - price;
    if (totalCoins > 0) {
      setFreeCoins(totalCoins);
    }
    else {
      toast.warn("Not enough money. Add some then choose player.")
    }
  }

  return (
    <>

      <Navbar freeCoins={freeCoins}></Navbar>
      <Banner handleFreeCoins={handleFreeCoins}></Banner>
      <AvailablePlayers handleFreeCoins={handleFreeCoins}></AvailablePlayers>
      <Newsletter></Newsletter>
      <Footer></Footer>

    </>
  )
}

export default App
