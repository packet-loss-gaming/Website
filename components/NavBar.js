const NavBar = (props) => (
  <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">Packet Loss Gaming</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/coc">Code of Conduct</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              VoIP
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/voip">Overview</a>
              <a class="dropdown-item" href="/voip/current-users">Current Users</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/voip/connect">Quick Connect</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar
