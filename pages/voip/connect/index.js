import Bootstrap from '../../../components/Bootstrap'

let VoIPConstants = require('../../../constants/Voip')

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming - VoIP Connect</title>
      <script charSet="UTF-8" src="/static/mumble-auto-connect.js"></script>
    </Bootstrap>

    <div className="text-center mt-3">
      If you're not automatically redirected, <a href="/voip/connect-info">click here</a>.
    </div>
  </div>
)

