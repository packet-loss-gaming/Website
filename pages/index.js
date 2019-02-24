import Bootstrap from '../components/Bootstrap'
import NavBar from '../components/CinematicNavBar'
import PrimaryContainer from '../components/PrimaryContainer'

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming</title>
    </Bootstrap>
    <style jsx global>{`
      body {
        background: #515151;
        color: white;
        box-shadow: inset 0 0 15em black;
        height: 100vh;
      }
    `}</style>
    <NavBar></NavBar>
    <PrimaryContainer>
      <div className="d-none d-sm-block pt-5"></div>
      <img className="rounded mx-auto d-block" style={{maxHeight: 10 + 'em'}} src="/static/favicon.png" />
      <div className="text-center">
        <h1>Packet Loss Gaming</h1>
        <p><i>Game with the finest</i></p>
      </div>
    </PrimaryContainer>
  </div>
)
