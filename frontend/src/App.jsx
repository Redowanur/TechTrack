import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"
import AuthContext from "./util/AuthContext"

function App() {
    const [isNavBarShow, setIsNavBarShow] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <NavBar isNavBarShow={isNavBarShow}/>
            <Header isNavBarShow={isNavBarShow} setIsNavBarShow={setIsNavBarShow}/>
            <Outlet/>
            <Footer/>
        </AuthContext.Provider>
    )
}

export default App
