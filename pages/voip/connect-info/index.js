import Bootstrap from '../../../components/Bootstrap'

let VoIPConstants = require('../../../constants/Voip')

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming - VoIP Connect</title>
    </Bootstrap>
    <div class="container">
      <p class="lead text-center mt-3 mb-5">
        Your browser should prompt you momentarily to connect to Packet Loss Gaming Mumble server.<br />
        If this does not occur, you may need to <a href="https://mumble.info" target="_blank">download Mumble</a>.
      </p>

      <p class="text-center">
        <a href="/voip/connect">Retry Automatic Connection</a>
        <span class="pl-3 pr-3">&bull;</span>
        <a data-toggle="collapse" href="#manualConnectionInfo" role="button" aria-expanded="false" aria-controls="collapseExample">
          Show Manual Connection Information
        </a>
      </p>

      <div class="collapse" id="manualConnectionInfo">
        <table class="table table-borderless mx-auto" style={{maxWidth: '300px'}}>
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
  </div>
)

