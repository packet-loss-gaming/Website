import Bootstrap from '../../components/Bootstrap'
import NavBar from '../../components/NavBar'
import PrimaryContainer from '../../components/PrimaryContainer'
import NamePolicyBody from '../../components/NamePolicyBody'

let VoIPConstants = require('../../constants/Voip')

export default () => (
  <div>
    <Bootstrap>
        <title>Packet Loss Gaming - VoIP Overview</title>
    </Bootstrap>
    <NavBar></NavBar>
    <PrimaryContainer>
      <h1>VoIP Overview</h1>
      <div class="row">
        <div class="col-sm-8">
          <p class="lead pt-3">
            Packet Loss Gaming uses Mumble for VoIP.
            If you do not already have Mumble, you should <a href="https://mumble.info" target="_blank">download it</a>.
          </p>

          <p>
            You can manually connect using the connection information, or <a href="/voip/connect" target="_blank">click here to automatically connect</a>.
          </p>
        </div>
        <div class="col-sm-4">
          <h3 class="">Connection Information</h3>
          <table class="table table-borderless" style={{maxWidth: '300px'}}>
            <tbody>
              <tr>
                <th scope="row">Label</th>
                <td>{ VoIPConstants.label }</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>{ VoIPConstants.address }</td>
              </tr>
              <tr>
                <th scope="row">Port</th>
                <td>{ VoIPConstants.port }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <h2>Name Policy</h2>
          <NamePolicyBody></NamePolicyBody>
        </div>
      </div>
    </PrimaryContainer>
  </div>
)

