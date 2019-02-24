import StyledLink from './StyledLink'
import NavBarCore from './NavBarCore'

const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <NavBarCore>
      <StyledLink className="navbar-brand" href="/">Packet Loss Gaming</StyledLink>
    </NavBarCore>
  </nav>
)

export default NavBar
