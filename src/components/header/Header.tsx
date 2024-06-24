import {NavBar} from "src/components/header/nav-bar/NavBar.tsx";
import {Donate} from "src/components/header/donate/Donate.tsx";

export const Header = () => {
  return (
      <header>
          <NavBar/>
          <Donate/>
      </header>
  )
}