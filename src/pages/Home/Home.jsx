
import './Home.css'

import Intro from "../../components/IntroducePage/Introduce"
import List from "../../components/ListOfFilm/List"


const Home = () => {

    return (
        <div className="home">
            <Intro/> 
            <List/>  
            <List/>  
        
        </div>
    )
}

export default Home;