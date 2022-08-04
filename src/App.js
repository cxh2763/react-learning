import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'

export default function App() {
  return (
    <div>
      <ThreeLayout
        left={
          <div style={{
            color: 'blue',
            border: '1px solid blue'
          }}>左边栏</div>
        }
        right={
          <div style={{
            color: 'blue',
            border: '1px solid blue'
          }}>右边栏</div>
        }
      >
        <div style={{
          color: '#f40',
          border: "2px solid red"
        }}>
          <h1>主区域</h1>
          <p>asdsadsadsadsa</p>
        </div>
      </ThreeLayout>
    </div>
  )
}
