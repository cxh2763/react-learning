import React, { Component } from 'react'

export default class CheckBoxGroup extends Component {

  handleChange = e => {
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value]
    } else {
      newArr = this.props.chooseDatas.filter(it => {
        return it.value !== e.target.value;
      })
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  }
  /** 
   * @returns 得到一组多选框
   */
  getCheckBoxs() {
    return this.props.datas.map(it => (
      <label key={it.value}>
        <input type="checkbox"
          name={this.props.name}
          value={it.value}
          checked={this.props.chooseDatas.includes(it.value)}
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
