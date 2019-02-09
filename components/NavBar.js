import StyledLink from './StyledLink'

const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div className="container">
      <StyledLink className="navbar-brand" href="/">Packet Loss Gaming</StyledLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <StyledLink className="nav-link" href="/coc">Code of Conduct</StyledLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              VoIP
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <StyledLink className="dropdown-item" href="/voip">Overview</StyledLink>
              <StyledLink className="dropdown-item" href="/voip/current-users">Current Users</StyledLink>
              <div className="dropdown-divider"></div>
              <StyledLink className="dropdown-item" href="/voip/connect">Quick Connect</StyledLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar
