import React from 'react';

let showdown = require('showdown')
let converter = new showdown.Converter()

let renderMarkdown = (text) => {
  return converter.makeHtml(text)
}

export default class MarkdownContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: renderMarkdown(this.props.body)
    }
  }

  render() {
    return <div dangerouslySetInnerHTML={ { __html: this.state.body } } />
  }
}
