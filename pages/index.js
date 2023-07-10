import Bootstrap from '../components/Bootstrap'
import NavBar from '../components/CinematicNavBar'
import ClipVideoPlayer from '../components/ClipVideoPlayer'
import PrimaryContainer from '../components/PrimaryContainer'

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming</title>
    </Bootstrap>
    <style jsx global>{`
      body {
        background: #000000;
      }
      #overlay {
        color: white;
        box-shadow: inset 0 0 15em black;
        text-shadow: 2px 2px 8px #000000;
      }
      .splash-frame {
        position: fixed;
        left: 0px;
        top: 0px;
        height: 100vh;
        width: 100%;
      }
      .dropdown-item {
        text-shadow: none;
      }
    `}</style>
    <ClipVideoPlayer className="splash-frame"></ClipVideoPlayer>
    <div id="overlay" className="splash-frame">
      <NavBar></NavBar>
      <PrimaryContainer>
        <div className="d-none d-sm-block pt-5"></div>
        <img className="rounded mx-auto d-block" style={{height: 10 + 'em'}} src="/static/favicon.png" />
        <div className="text-center">
          <h1>Packet Loss Gaming</h1>
          <p><i>Game with the finest</i></p>
        </div>
      </PrimaryContainer>
    </div>
  </div>
)
