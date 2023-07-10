import React from 'react';
import Link from 'next/link'

export default class StyledLink extends React.Component {
  render() {
    return (
      <Link href={this.props.href} passHref preFetch className={this.props.className}>
        {this.props.children}
      </Link>
    )
  }
}
