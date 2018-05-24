//设置入口函数
window.onload=pre;

//img数组
var imgArray;
//大Img
var bigImg;
//图片路径数组
var picArray=["img/01big.jpg", "img/02big.jpg", "img/03big.jpg", "img/04big.jpg", "img/05big.jpg"];


function pre(){
    //获取需要元素
    imgArray = document.getElementsByClassName("_img");
    bigImg = document.getElementById("bigImg");

    setEvent();
}

//设置响应事件
function setEvent(){
    if(imgArray==null || bigImg==null){
        return;
    }
    for(var i=0; i<imgArray.length; i++){
        imgArray[i]._index=i;
        imgArray[i].onmouseover=function(){
            bigImg.setAttribute("src", picArray[this._index]);
            console.log("aaa");
        }
    }
}