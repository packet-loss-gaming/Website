import StyledLink from './StyledLink'

const NavBarCore = (props) => (
  <div className="container">
    {props.children}
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <StyledLink className="nav-link" href="/coc">Code of Conduct</StyledLink>
        </li>
      </ul>
    </div>
  </div>
)

export default NavBarCore
