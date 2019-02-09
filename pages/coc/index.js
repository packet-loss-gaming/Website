import Bootstrap from '../../components/Bootstrap'
import NavBar from '../../components/NavBar'
import PrimaryContainer from '../../components/PrimaryContainer'
import MarkdownContent from '../../components/MarkdownContent'

export default () => (
  <div>
    <Bootstrap>
      <title>Packet Loss Gaming - Code of Conduct</title>
    </Bootstrap>
    <NavBar></NavBar>
    <PrimaryContainer>
      <h1>Code of Conduct</h1>

      <div className="lead">
        <MarkdownContent body={require(`../../markdown/coc/lead.md`)} />
      </div>

      <MarkdownContent body={require(`../../markdown/coc/lead-subtext.md`)} />

      <MarkdownContent body={require(`../../markdown/coc/text.md`)} />
    </PrimaryContainer>
  </div>
)
