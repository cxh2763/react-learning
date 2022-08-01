import React from 'react'
import Student from './Student'

export default function StudentList(props) {
  const stus = props.stus.map(item => <Student key={item.id} {...item}></Student>)
  return (
    <ul>
      {stus}
    </ul>
  )
}
