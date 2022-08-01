import React from 'react'

export default function Student({ name, sex, birth }) {
  return (
    <li>
      【姓名】{name}
      【性别】{sex === 1 ? "男" : "女"}
      【年龄】{birth}
    </li>
  )
}
