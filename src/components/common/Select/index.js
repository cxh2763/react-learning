import React, { Component } from 'react'

export default class Select extends Component {

  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }
  /** 
   * @returns 得到一组多选框
   */
  getOptions() {
    return this.props.datas.map(it => (
      <option key={it.value}
        value={it.value}
      >
        {it.text}
      </option>
    ))
  }
  render() {
    const bs = this.getOptions();
    return (
      <select name={this.props.name}
        value={this.props.value}
        onChange={
          this.handleChange
        }
      >
        {bs}
      </select>
    )
  }
}
