import React, {createContext} from 'react'
import Axii from '../components/Axii';


export const UserContext = createContext()


const Home = () => {
    const userName = "gamer"
    return (
        <div>
            <UserContext.Provider value={userName}>
            <Axii />
            </UserContext.Provider>
            
        </div>
    )
}

export default Home
