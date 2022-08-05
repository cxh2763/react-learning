import React, { Component } from 'react'

export default class RadioBoxGroup extends Component {

  handleChange = e => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  }
  /** 
   * @returns 得到一组多选框
   */
  getCheckBoxs() {
    return this.props.datas.map(it => (
      <label key={it.value}>
        <input type="radio"
          name={this.props.name}
          value={it.value}
          checked={this.props.chooseData === it.value}
          onChange={
            this.handleChange
          }
        />
        {it.text}
      </label>
    ))
  }
  render() {
    const bs = this.getCheckBoxs();
    return (
      <div>{bs}</div>
    )
  }
}
