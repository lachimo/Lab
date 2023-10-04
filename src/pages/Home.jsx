import Header from "../components/Header/Header"
import './Home.css'


import Intro from "../components/IntroducePage/Introduce"
import List from "../components/ListOfFilm/List"

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Intro/> 
            <List/>  
        
        </div>
    )
}

export default Home;