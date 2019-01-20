import Bootstrap from '../../../components/Bootstrap'
import NavBar from '../../../components/NavBar'
import PrimaryContainer from '../../../components/PrimaryContainer'
import NamePolicyBody from '../../../components/NamePolicyBody'

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming - VoIP Name Policy</title>
    </Bootstrap>
    <NavBar></NavBar>
    <PrimaryContainer>
      <h1>VoIP Name Policy</h1>
      <NamePolicyBody></NamePolicyBody>
    </PrimaryContainer>
  </div>
)

