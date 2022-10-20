import { Outlet, NavLink } from "react-router-dom"

export default function SharedLayout() {
  return (
    <>
        <header>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Outlet/>
    </>
  )
}
