import React, { Component } from 'react'
import CheckBox from './index'
import { getAllStudents } from '../../../services/student'

export default class Test extends Component {
  state = {
    datas: [
      // { value: 'football', text: '足球' },
      // { value: 'basketball', text: '篮球' },
      // { value: 'movie', text: '电影' },
    ],
    chooseDatas: [],
  }
  async componentDidMount() {
    const stus = await getAllStudents();
    this.setState(
      {
        datas: stus.map(it => {
          return (
            {
              value: it.id.toString(),
              text: it.name,
            }
          )
        })
      }
    )
  }

  render() {
    return (
      <div>
        <CheckBox
          name="loves"
          {...this.state}
          // datas={this.state.datas}
          // chooseDatas={this.state.chooseDatas}
          onChange={newArr => {
            this.setState({
              chooseDatas: newArr
            })
          }}
        ></CheckBox>
      </div>
    )
  }
}
