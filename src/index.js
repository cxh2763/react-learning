import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./assets/1.jpg"
import src2 from "./assets/2.jpg"
import src3 from "./assets/3.jpg"
import "./index.css"

const srcs = [src1,src2,src3];//保存图片路径的数组

let index = 0;//显示图片的索引

const container = document.getElementById("root")

let timer; //计时器

function render(){
    let img = (<img src = {srcs[index]} alt=""></img>)
    ReactDOM.render(img,container);
}
render()
// 启动计时器。每隔一段时间，切换图片
function start(){
    stop();
    timer = setInterval(()=>{
        index = (index + 1) % 3;//改变index
        render();
    },1500);
}
//停止计时器
function stop(){
    clearInterval(timer);
}
start()

container.onmouseenter = function(){
    stop()
}
container.onmouseleave =function(){
    start()
}