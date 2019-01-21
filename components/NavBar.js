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
            <a className="nav-link" href="/voip">VoIP</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar
