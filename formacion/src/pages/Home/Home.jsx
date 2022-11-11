import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"
import { Main } from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'


export const Home = () => {
  return (
    <div className="home">
        <Header title="Home"/>
        <Navbar/>
        <Aside/>
        <Main/>
        <Footer/>
    </div>

  )
}

export default Home;