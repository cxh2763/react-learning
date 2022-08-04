import React from 'react'
import "./index.css"

export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800,
  }
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div className='three-layout' //外层容器
      style={{
        minWidth: datas.minWidth
      }}>
      <div className="main" //主区域
      >
        {props.children}
      </div>
      <div className="aside-left" //左侧区域
        style={
          {
            width: datas.leftWidth
          }
        }
      >
        {props.left}
      </div>
      <div className="aside-right" //右侧区域
        style={
          {
            width: datas.rightWidth
          }
        }
      >
        {props.right}
      </div>
    </div>
  )
}
