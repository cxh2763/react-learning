import React from 'react'
import "./Pager.css"

/**
 * 属性：
 * 1. current: 初始页码
 * 2. total: 总页数
 * 3. limit: 页容量
 * 4. panelNumber: 数字页码最多显示多少个
 */
export default function Pager(props) {
  const PageNumner = getPageNumber(props);
  const min = getMinNumber(props);
  const max = getMaxNumber(min, PageNumner, props);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(<span key={i}
      onClick={() => {
        toPage(i, props);
      }}
      className={i === props.current ? "item active" : "item"}>{i}</span>)
  }
  return (
    <>
      <span
        onClick={() => {
          toPage(1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}>首页</span>
      <span
        onClick={() => {
          toPage(props.current - 1 > 1 ? props.current - 1 : 1, props);
        }}
        className={props.current === 1 ? "item disabled" : "item"}>上一页</span>
      {/**数字页码 */}
      {numbers}
      <span></span>
      <span
        onClick={() => {
          toPage(props.current + 1 < PageNumner ? props.current + 1 : PageNumner, props);
        }}
        className={props.current === PageNumner ? "item disabled" : "item"}>下一页</span>
      <span
        onClick={() => {
          toPage(PageNumner, props);
        }}
        className={props.current === PageNumner ? "item disabled" : "item"}>尾页</span>
      <span
        className='current'>{props.current}</span> / <span>{PageNumner}</span>
    </>
  )
}

/**
 * 计算总页数
 * @param {*} props
 */
function getPageNumber(props) {
  return Math.ceil(props.total / props.limit);
}

/**
 * 跳转到某一页
 * @param {*} target 目标页码 
 * @param {*} props 所有属性
 */
function toPage(target, props) {
  if (props.current === target) {
    return
  }
  props.onPageChange && props.onPageChange(target);
}

function getMinNumber(props) {
  let min = props.current - Math.floor(props.panelNumber / 2);
  if (min < 1) {
    min = 1;
  }
  return min;
}

function getMaxNumber(min, PageNumner, props) {
  let max = min + props.panelNumber - 1;
  if (max > PageNumner) {
    max = PageNumner
  }
  return max
}