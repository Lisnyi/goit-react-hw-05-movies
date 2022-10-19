import { Outlet, NavLink } from "react-router-dom"

export default function SharedLayout() {
  return (
    <>
        <header>
          <nav>
            <NavLink end to="/">Home</NavLink>
            <NavLink end to="/movies">Movies</NavLink>
          </nav>
        </header>
        <Outlet/>
    </>
  )
}
