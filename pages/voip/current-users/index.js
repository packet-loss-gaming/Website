import Bootstrap from '../../../components/Bootstrap'
import NavBar from '../../../components/NavBar'
import PrimaryContainer from '../../../components/PrimaryContainer'
import VoIPViewer from '../../../components/VoIPViewer'

export default () => {
  return (
    <div>
      <Bootstrap>
        <title>Packet Loss Gaming - VoIP Current Users</title>
      </Bootstrap>
      <NavBar></NavBar>
      <PrimaryContainer>
        <h1>VoIP Current Users</h1>
        <VoIPViewer></VoIPViewer>
      </PrimaryContainer>
    </div>
  )
}
