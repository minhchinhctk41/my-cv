import React, { Component } from 'react'

import './experience.scss'

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'Turned on' //Khởi tạo giá trị của state
    }
    this.handleChangeState = this.handleChangeState.bind(this) //Gán ngữ cảnh cho sự kiện handleChangeState
  }
  handleChangeState() {
    this.setState({
      status: 'Turned off' //Tiến hành update trạng thái của state thông qua hàm setState khi người dùng click vào button On/Off
    })
  }
  render() {
    return (
      <div>
        <h1>Tivi status: {this.state.status}</h1>
        <button onClick={this.handleChangeState}>On/Off</button>
      </div>
    )
  }
}

export default Experience
