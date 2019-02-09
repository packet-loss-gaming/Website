import Link from 'next/link'

export default class StyledLink extends React.Component {
  render() {
    return (
      <Link route={this.props.route} params={this.props.params} href={this.props.href} passHref preFetch>
        <a className={this.props.className}>{this.props.children}</a>
      </Link>
    )
  }
}
