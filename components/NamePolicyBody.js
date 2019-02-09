import MarkdownContent from './MarkdownContent'

const NamePolicyBody = (props) => (
 <div>
    <div className="lead">
      <MarkdownContent body={require('../markdown/name-policy/lead.md')} />
    </div>

    <MarkdownContent body={require('../markdown/name-policy/text.md')} />
  </div>
)

export default NamePolicyBody
