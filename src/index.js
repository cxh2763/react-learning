import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from "./components/StudentList";
const appkey = "276314445_1590670332060";
/**
 * 获取所有的学生数据
 */
 async function fetchAllStudents(){
   const stus = await fetch("http://open.duyiedu.com/api/student/findAll?appkey="+appkey)
        .then(resp => resp.json()).then(resp => resp.data)
    return stus;
 }

 async function render(){
   ReactDOM.render("正在加载中....",document.getElementById("root"));
   const stus = await fetchAllStudents() //获取学生数据
   ReactDOM.render(<StudentList stus={stus}/>,document.getElementById("root"))
 }

 render();