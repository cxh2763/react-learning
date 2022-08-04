import React, { Component } from 'react'
import Modal from './common/Modal'

export default class Test extends Component {

  state = {
    showModal: false
  }

  showModal = () => {
    this.setState({
      showModal: true,
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    return (
      <div>
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp02%2F1Z913232123N51-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662189652&t=2212a271044aca32f9e62a8cfe1dd79d" alt="" />
        {
          this.state.showModal ? (<Modal bg="rgba(0,0,255,.3)"
            onClose={this.hideModal}
          >
            <h1>Loading</h1>
            <button onClick={this.hideModal}>关闭朦层</button>
          </Modal>) : null
        }
        <button onClick={this.showModal}>显示朦层</button>
      </div >
    )
  }
}
