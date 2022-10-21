import { Outlet, NavLink } from "react-router-dom"
import { Suspense } from "react"
import Header from "./SharedLayout.styled"

export default function SharedLayout() {
  return (
    <>
        <Header>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </Header>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet/>
        </Suspense>
    </>
  )
}
