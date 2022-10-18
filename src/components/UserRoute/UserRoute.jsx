import { Routes, Route } from "react-router-dom"
import SharedLayout from "pages/SharedLayout/SharedLayout"
import HomePage from "pages/Home/HomePage"

export default function UserRoute () {
    return (
        <Routes>
            <Route path="/goit-react-hw-05-movies" element={<SharedLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}