import Bootstrap from '../../../components/Bootstrap'
import NavBar from '../../../components/NavBar'
import PrimaryContainer from '../../../components/PrimaryContainer'

let VoIPConstants = require('../../../constants/Voip')

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming - VoIP Connect</title>
      <script charSet="UTF-8" src="/static/mumble-auto-connect.js"></script>
    </Bootstrap>

    <PrimaryContainer>
      <p className="lead text-center mb-5">
        Your browser should prompt you momentarily to connect to Packet Loss Gaming Mumble server.<br />
        If this does not occur, you may need to <a href="https://mumble.info" target="_blank">download Mumble</a>.
      </p>

      <p className="text-center">
        <a href="/voip/connect">Retry Automatic Connection</a>
        <span className="pl-3 pr-3 d-none d-sm-inline">&bull;</span>
        <span className="mb-3 d-block d-sm-none"></span>
        <a data-toggle="collapse" href="#manualConnectionInfo" role="button" aria-expanded="false" aria-controls="collapseExample">
          Show Manual Connection Information
        </a>
      </p>

      <div className="collapse" id="manualConnectionInfo">
        <table className="table table-borderless mx-auto" style={{maxWidth: '300px'}}>
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
    </PrimaryContainer>
  </div>
)

