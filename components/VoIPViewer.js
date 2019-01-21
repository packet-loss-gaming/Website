import React from 'react'
import 'isomorphic-unfetch'

export default class VoIPViewer extends React.Component {
  async componentDidMount () {
    // eslint-disable-next-line no-undef
    // const res = await fetch('https://www.nfoservers.com/query/mstat.pl?id=pktloss')
    // const json = await res.json()

    await await new Promise(resolve => setTimeout(resolve, 1000));

    this.setState(state => ({
      rootChannel: {
        name: "Root",
        users: ["Dark_Arc"],
        channels: [
          {
            name: "Game Lobby 1",
              users: ["Cow_Fu", "Dangerous_Dan"],
            channels: [
              {
                name: "Sub Lobby 1",
                users: ["Rambo"],
                channels: []
              }
            ]
          }
        ]
      }
    }));
  }

  getChannelIndent = (channelLevel) => {
    return channelLevel === 0 ? 0 : 40
  }

  getUserIndent = (channelLevel) => {
    return 40
  }

  renderChannelName = (channelData, channelLevel) => {
    if (channelLevel === 0)
      return null

    return <span className="font-weight-bold"><span className="oi oi-people pr-2" title="icon name" aria-hidden="true"></span>{channelData.name}</span>
  }

  renderChannelUsers = (channelData, channelLevel) => {
    let users = []

    channelData.users.forEach((user) => {
      let userStyle = {
        marginLeft: this.getUserIndent(channelLevel) + 'px'
      }

      users.push(<div style={userStyle}><span className="oi oi-person pr-2" title="icon name" aria-hidden="true"></span>{user}</div>);
    })

    return users
  }

  renderSubChannels = (channelData, channelLevel) => {
    let subChannels = []

    channelData.channels.forEach((channel) => {
      subChannels.push(this.renderChannel(channel, channelLevel + 1))
    })

    return subChannels
  }

  renderChannel = (channelData, channelLevel) => {
    let channelStyle = {
      marginLeft: this.getChannelIndent(channelLevel) + 'px'
    }

    return (
      <div className="mt-1" style={channelStyle}>
        {this.renderChannelName(channelData, channelLevel)}
        {this.renderChannelUsers(channelData, channelLevel)}
        {this.renderSubChannels(channelData, channelLevel)}
      </div>
    )
  }


  render() {
    let channelPreview

    if (this.state) {
      channelPreview = this.renderChannel(this.state.rootChannel, 0)
    } else {
      channelPreview = (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div>
        {channelPreview}
      </div>
    )
  }
}

