import { Routes, Route } from "react-router-dom"
import SharedLayout from "pages/SharedLayout/SharedLayout"
import Home from "pages/Home/Home"
import Movies from "pages/Movies/Movies"

export default function UserRoute () {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}>
                    
                </Route>
            </Route>
        </Routes>
    )
}