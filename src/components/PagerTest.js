import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList';
import Modal from './Modal';

export default class PagerTest extends Component {
  state = {
    current: 1,
    total: 0,
    limit: 10,
    panelNumber: 5,
    students: [],
    isLoading: true,
  }

  constructor(props) {
    super(props);
    this.fetchStudent()
  }

  async fetchStudent() {
    this.setState({
      isLoading: true,
    })
    const resp = await fetch(`https://open.duyiedu.com/api/student/findByPage?appkey=276314445_1590670332060&page=${this.state.current}&size=10`)
      .then(resp => resp.json())
      .then(resp => resp.data)
    this.setState({
      total: resp.cont,
      students: resp.findByPage,
      isLoading: false,
    })
  }

  handlePageChange = (newPage) => {
    this.setState({
      current: newPage
    })
    this.fetchStudent()
  }

  render() {
    return (
      <div className="container">
        <StudentList stus={this.state.students}>

        </StudentList>
        <div className="pager">
          <Pager {...this.state} onPageChange={
            this.handlePageChange
          }></Pager>
        </div>
        <Modal show={this.state.isLoading}></Modal>
      </div>
    )
  }
}
